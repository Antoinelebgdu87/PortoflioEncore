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
        {/* Section Header - iJerce style */}
        <div className="text-center mb-16 fade-in-up">
          <Badge className="section-badge mb-6">Portfolio</Badge>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {videos.map((video, index) => {
            const colors = [
              "blue",
              "green",
              "red",
              "yellow",
              "orange",
              "pink",
              "purple",
              "cyan",
            ];
            const colorClass = colors[index % colors.length];

            return (
              <Card
                key={video.id}
                className="video-card group cursor-pointer fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-xl">
                    {/* Thumbnail */}
                    <div
                      className={`${video.type === "short" ? "aspect-[9/16]" : "aspect-video"} bg-${colorClass}/10 border border-${colorClass}/20 flex items-center justify-center`}
                    >
                      <div className={`p-4 rounded-full bg-${colorClass}/20`}>
                        <Play
                          className={`h-8 w-8 text-${colorClass} group-hover:scale-110 transition-transform duration-200`}
                        />
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <Button
                        size="sm"
                        className={`bg-${colorClass} text-white hover:bg-${colorClass}/90 rounded-lg`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Type Badge */}
                    <Badge
                      className={`absolute top-3 left-3 bg-${colorClass}/90 text-white font-medium border-0`}
                    >
                      {video.type === "short" ? "Short" : "Long"}
                    </Badge>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 font-medium">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Eye className="h-4 w-4 mr-2" />
                      <span className={`text-${colorClass} font-semibold`}>
                        {video.views}
                      </span>
                      <span className="ml-1">vues</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent-bright text-accent-foreground hover:bg-accent font-semibold"
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
