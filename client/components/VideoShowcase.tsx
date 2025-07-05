import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Clock, Eye } from "lucide-react";
import { Video, GetPortfolioResponse } from "@shared/portfolio";

export default function VideoShowcase() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const response = await fetch("/api/portfolio");
      const data: GetPortfolioResponse = await response.json();

      if (data.success) {
        setVideos(data.data.videos);
      }
    } catch (error) {
      console.error("Error loading videos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openVideo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header - iJerce style */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mes <span className="gradient-text">Créations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez mes meilleures vidéos, des shorts viraux aux montages
            longs format. Chaque projet reflète ma passion pour l'art du montage
            vidéo.
          </p>
        </div>

        {/* Video Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement des vidéos...</p>
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Aucune vidéo disponible pour le moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 fade-in-up">
            {videos.map((video, index) => (
              <Card
                key={video.id}
                className={`group cursor-pointer overflow-hidden border-2 transition-all duration-300 hover:border-primary hover:scale-[1.02] hover-lift bg-gradient-to-br fade-in-up ${
                  video.type === "short"
                    ? "from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20"
                    : "from-green-500/10 to-yellow-500/10 hover:from-green-500/20 hover:to-yellow-500/20"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openVideo(video.url)}
              >
                <CardContent className="p-0">
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden">
                    {video.thumbnail ? (
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className={`w-full ${
                            video.type === "short"
                              ? "aspect-[9/16]"
                              : "aspect-video"
                          } object-cover`}
                          onError={(e) => {
                            // Fallback to gradient if image fails to load
                            e.currentTarget.style.display = "none";
                            const fallback = e.currentTarget
                              .nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        <div
                          className={`w-full ${
                            video.type === "short"
                              ? "aspect-[9/16]"
                              : "aspect-video"
                          } bg-gradient-to-br ${
                            video.type === "short"
                              ? "from-blue-600 to-purple-600"
                              : "from-green-600 to-yellow-600"
                          } flex items-center justify-center absolute inset-0`}
                          style={{ display: "none" }}
                        >
                          <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        {/* Play overlay */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`w-full ${
                          video.type === "short"
                            ? "aspect-[9/16]"
                            : "aspect-video"
                        } bg-gradient-to-br ${
                          video.type === "short"
                            ? "from-blue-600 to-purple-600"
                            : "from-green-600 to-yellow-600"
                        } flex items-center justify-center`}
                      >
                        <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={
                          video.type === "short"
                            ? "bg-blue-600"
                            : "bg-green-600"
                        }
                      >
                        {video.type === "short" ? "Short" : "Long"}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-black/70 hover:bg-black/90 transition-all duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          openVideo(video.url);
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-bold text-lg leading-tight line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      {video.duration && (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {video.duration}
                        </div>
                      )}
                      {video.views && (
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {video.views}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* View All Button */}
        {videos.length > 0 && (
          <div className="text-center fade-in-up">
            <Button
              onClick={() =>
                window.open(
                  "https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO",
                  "_blank",
                )
              }
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-3 hover-lift transition-all duration-200"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Voir toutes mes vidéos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
