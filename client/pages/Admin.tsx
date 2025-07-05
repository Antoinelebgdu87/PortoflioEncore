import { useState } from "react";
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
  const [videos, setVideos] = useState<VideoItem[]>([
    {
      id: "1",
      title: "Epic Short Edit #1",
      url: "#",
      type: "short",
    },
    {
      id: "2",
      title: "Cinematic Long Form",
      url: "#",
      type: "long",
    },
  ]);

  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    {
      id: "1",
      platform: "Discord",
      url: "#",
      username: "nacospy",
    },
    {
      id: "2",
      platform: "Instagram",
      url: "#",
      username: "@nacospy",
    },
  ]);

  const [newVideo, setNewVideo] = useState({
    title: "",
    url: "",
    type: "short" as "short" | "long",
  });

  const [newSocialLink, setNewSocialLink] = useState({
    platform: "",
    url: "",
    username: "",
  });

  const addVideo = () => {
    if (newVideo.title && newVideo.url) {
      const video: VideoItem = {
        id: Date.now().toString(),
        ...newVideo,
      };
      setVideos([...videos, video]);
      setNewVideo({ title: "", url: "", type: "short" });
    }
  };

  const removeVideo = (id: string) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const addSocialLink = () => {
    if (newSocialLink.platform && newSocialLink.url) {
      const link: SocialLink = {
        id: Date.now().toString(),
        ...newSocialLink,
      };
      setSocialLinks([...socialLinks, link]);
      setNewSocialLink({ platform: "", url: "", username: "" });
    }
  };

  const removeSocialLink = (id: string) => {
    setSocialLinks(socialLinks.filter((link) => link.id !== id));
  };

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
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
              <Save className="mr-2 h-4 w-4" />
              Sauvegarder
            </Button>
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
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeVideo(video.id)}
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
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeSocialLink(link.id)}
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
                  placeholder="Monteur vidéo depuis 5 mois..."
                  className="min-h-20"
                />
              </div>
              <div>
                <Label htmlFor="youtube-playlist">Playlist YouTube</Label>
                <Input
                  id="youtube-playlist"
                  defaultValue="https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO"
                  placeholder="URL de la playlist"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
