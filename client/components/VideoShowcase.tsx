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

        {/* Empty spacing div */}
        <div className="p-4"></div>

        {/* View All Button container - empty */}
        <div className="text-center"></div>
      </div>
    </section>
  );
}
