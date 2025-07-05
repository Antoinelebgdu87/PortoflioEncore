import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Clock, Eye } from "lucide-react";

interface Video {
  id: string;
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  type: "short" | "long";
  url: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Epic Short Edit #1",
    duration: "0:30",
    views: "25K",
    thumbnail: "/api/placeholder/400/600",
    type: "short",
    url: "#",
  },
  {
    id: "2",
    title: "Cinematic Long Form",
    duration: "5:42",
    views: "10K",
    thumbnail: "/api/placeholder/400/225",
    type: "long",
    url: "#",
  },
  {
    id: "3",
    title: "TikTok Viral Edit",
    duration: "0:15",
    views: "50K",
    thumbnail: "/api/placeholder/400/600",
    type: "short",
    url: "#",
  },
  {
    id: "4",
    title: "Professional Showcase",
    duration: "3:20",
    views: "8K",
    thumbnail: "/api/placeholder/400/225",
    type: "long",
    url: "#",
  },
];

export default function VideoShowcase() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Créations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes meilleures vidéos, des shorts viraux aux montages
            longs format
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {videos.map((video, index) => (
            <Card
              key={video.id}
              className="video-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  {/* Thumbnail */}
                  <div
                    className={`${video.type === "short" ? "aspect-[9/16]" : "aspect-video"} bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center`}
                  >
                    <Play className="h-12 w-12 text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Type Badge */}
                  <Badge
                    className={`absolute top-2 left-2 ${
                      video.type === "short"
                        ? "bg-video-accent/90 hover:bg-video-accent"
                        : "bg-video-secondary/90 hover:bg-video-secondary"
                    }`}
                  >
                    {video.type === "short" ? "Short" : "Long"}
                  </Badge>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Eye className="h-3 w-3 mr-1" />
                    {video.views} vues
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
            onClick={() =>
              window.open(
                "https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO",
                "_blank",
              )
            }
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Voir toutes mes vidéos
          </Button>
        </div>
      </div>
    </section>
  );
}
