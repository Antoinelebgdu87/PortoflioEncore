import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  Plus,
  Save,
  Trash2,
  ExternalLink,
  Video,
  Link as LinkIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import {
  GetPortfolioResponse,
  UpdatePortfolioRequest,
} from "@shared/portfolio";

interface VideoItem {
  id: string;
  title: string;
  url: string;
  type: "short" | "long";
  thumbnail?: string;
}

interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [portfolioSettings, setPortfolioSettings] = useState({
    bio: "",
    youtubePlaylist: "",
  });

  const [newVideo, setNewVideo] = useState({
    title: "",
    url: "",
    type: "short" as "short" | "long",
    thumbnail: "",
  });

  const [newSocialLink, setNewSocialLink] = useState({
    platform: "",
    url: "",
    username: "",
  });

  // Load portfolio data on component mount
  useEffect(() => {
    loadPortfolioData();
  }, []);

  const loadPortfolioData = async () => {
    try {
      const response = await fetch("/api/portfolio");
      const data: GetPortfolioResponse = await response.json();

      if (data.success) {
        setVideos(data.data.videos);
        setSocialLinks(data.data.socialLinks);
        setPortfolioSettings({
          bio: data.data.settings.bio,
          youtubePlaylist: data.data.settings.youtubePlaylist,
        });
      }
    } catch (error) {
      console.error("Error loading portfolio data:", error);
      toast({
        title: "Erreur de chargement",
        description: "Impossible de charger les données du portfolio.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const savePortfolioData = async () => {
    setIsSaving(true);
    try {
      const updateData: UpdatePortfolioRequest = {
        videos,
        socialLinks,
        settings: portfolioSettings,
      };

      const response = await fetch("/api/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Sauvegarde réussie",
          description: "Les données du portfolio ont été mises à jour.",
        });
      } else {
        throw new Error(data.message || "Erreur lors de la sauvegarde");
      }
    } catch (error) {
      console.error("Error saving portfolio data:", error);
      toast({
        title: "Erreur de sauvegarde",
        description: "Impossible de sauvegarder les données.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const addVideo = () => {
    if (newVideo.title.trim() && newVideo.url.trim()) {
      const video: VideoItem = {
        id: Date.now().toString(),
        title: newVideo.title.trim(),
        url: newVideo.url.trim(),
        type: newVideo.type,
        thumbnail: newVideo.thumbnail.trim() || undefined,
      };
      setVideos([...videos, video]);
      setNewVideo({ title: "", url: "", type: "short", thumbnail: "" });
      toast({
        title: "Vidéo ajoutée",
        description: `"${video.title}" a été ajoutée à la liste.`,
      });
    } else {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir le titre et l'URL de la vidéo.",
        variant: "destructive",
      });
    }
  };

  const removeVideo = (id: string) => {
    const video = videos.find((v) => v.id === id);
    setVideos(videos.filter((video) => video.id !== id));
    if (video) {
      toast({
        title: "Vidéo supprimée",
        description: `"${video.title}" a été supprimée.`,
      });
    }
  };

  const addSocialLink = () => {
    if (newSocialLink.platform.trim() && newSocialLink.url.trim()) {
      const link: SocialLink = {
        id: Date.now().toString(),
        platform: newSocialLink.platform.trim(),
        url: newSocialLink.url.trim(),
        username: newSocialLink.username.trim(),
      };
      setSocialLinks([...socialLinks, link]);
      setNewSocialLink({ platform: "", url: "", username: "" });
      toast({
        title: "Réseau ajouté",
        description: `${link.platform} a été ajouté à la liste.`,
      });
    } else {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir la plateforme et l'URL.",
        variant: "destructive",
      });
    }
  };

  const removeSocialLink = (id: string) => {
    const link = socialLinks.find((l) => l.id === id);
    setSocialLinks(socialLinks.filter((link) => link.id !== id));
    if (link) {
      toast({
        title: "Réseau supprimé",
        description: `${link.platform} a été supprimé.`,
      });
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté du panel admin.",
    });
  };

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement du panel admin...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour au portfolio
                </Button>
              </Link>
              <h1 className="text-2xl font-bold gradient-text">
                Admin Panel - NaCoSpy
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onClick={savePortfolioData}
                disabled={isSaving}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? "Sauvegarde..." : "Sauvegarder"}
              </Button>
              <Button onClick={handleLogout} variant="outline" size="sm">
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="mr-2 h-5 w-5" />
                Gestion des Vidéos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add New Video */}
              <div className="space-y-4 p-4 border border-border rounded-lg bg-muted/20">
                <h3 className="font-semibold">Ajouter une vidéo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="video-title">Titre</Label>
                    <Input
                      id="video-title"
                      value={newVideo.title}
                      onChange={(e) =>
                        setNewVideo({ ...newVideo, title: e.target.value })
                      }
                      placeholder="Titre de la vidéo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="video-type">Type</Label>
                    <Select
                      value={newVideo.type}
                      onValueChange={(value: "short" | "long") =>
                        setNewVideo({ ...newVideo, type: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Type de vidéo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short</SelectItem>
                        <SelectItem value="long">Long</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="video-url">URL</Label>
                  <Input
                    id="video-url"
                    value={newVideo.url}
                    onChange={(e) =>
                      setNewVideo({ ...newVideo, url: e.target.value })
                    }
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>
                <div>
                  <Label htmlFor="video-thumbnail">Miniature (URL image)</Label>
                  <Input
                    id="video-thumbnail"
                    value={newVideo.thumbnail}
                    onChange={(e) =>
                      setNewVideo({ ...newVideo, thumbnail: e.target.value })
                    }
                    placeholder="https://exemple.com/image.jpg"
                  />
                </div>
                <Button onClick={addVideo} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Ajouter la vidéo
                </Button>
              </div>

              {/* Video List */}
              <div className="space-y-3">
                <h3 className="font-semibold">Vidéos existantes</h3>
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="flex items-center justify-between p-3 border border-border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{video.title}</h4>
                        <Badge
                          variant={
                            video.type === "short" ? "default" : "secondary"
                          }
                        >
                          {video.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {video.url}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(video.url, "_blank")}
                        title="Ouvrir la vidéo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeVideo(video.id)}
                        title="Supprimer la vidéo"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Links Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <LinkIcon className="mr-2 h-5 w-5" />
                Gestion des Réseaux
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add New Social Link */}
              <div className="space-y-4 p-4 border border-border rounded-lg bg-muted/20">
                <h3 className="font-semibold">Ajouter un réseau</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="platform">Plateforme</Label>
                    <Input
                      id="platform"
                      value={newSocialLink.platform}
                      onChange={(e) =>
                        setNewSocialLink({
                          ...newSocialLink,
                          platform: e.target.value,
                        })
                      }
                      placeholder="Discord, Instagram, etc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="username">Nom d'utilisateur</Label>
                    <Input
                      id="username"
                      value={newSocialLink.username}
                      onChange={(e) =>
                        setNewSocialLink({
                          ...newSocialLink,
                          username: e.target.value,
                        })
                      }
                      placeholder="@nacospy"
                    />
                  </div>
                  <div>
                    <Label htmlFor="social-url">URL</Label>
                    <Input
                      id="social-url"
                      value={newSocialLink.url}
                      onChange={(e) =>
                        setNewSocialLink({
                          ...newSocialLink,
                          url: e.target.value,
                        })
                      }
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <Button onClick={addSocialLink} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Ajouter le réseau
                </Button>
              </div>

              {/* Social Links List */}
              <div className="space-y-3">
                <h3 className="font-semibold">Réseaux existants</h3>
                {socialLinks.map((link) => (
                  <div
                    key={link.id}
                    className="flex items-center justify-between p-3 border border-border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{link.platform}</h4>
                        <Badge variant="outline">{link.username}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {link.url}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(link.url, "_blank")}
                        title="Ouvrir le lien"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSocialLink(link.id)}
                        title="Supprimer le réseau"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Settings */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Paramètres du Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={portfolioSettings.bio}
                  onChange={(e) =>
                    setPortfolioSettings({
                      ...portfolioSettings,
                      bio: e.target.value,
                    })
                  }
                  placeholder="Monteur vidéo depuis 5 mois..."
                  className="min-h-20"
                />
              </div>
              <div>
                <Label htmlFor="youtube-playlist">Playlist YouTube</Label>
                <Input
                  id="youtube-playlist"
                  value={portfolioSettings.youtubePlaylist}
                  onChange={(e) =>
                    setPortfolioSettings({
                      ...portfolioSettings,
                      youtubePlaylist: e.target.value,
                    })
                  }
                  placeholder="URL de la playlist YouTube"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
