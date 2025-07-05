import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Instagram,
  Youtube,
  Mail,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    platform: "Discord",
    username: "nacospy",
    icon: MessageCircle,
    url: "#",
    color: "from-indigo-500 to-purple-600",
    description: "Rejoignez ma communauté",
  },
  {
    platform: "Instagram",
    username: "@nacospy",
    icon: Instagram,
    url: "#",
    color: "from-pink-500 to-rose-600",
    description: "Mes dernières créations",
  },
  {
    platform: "YouTube",
    username: "NaCoSpy",
    icon: Youtube,
    url: "https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO",
    color: "from-red-500 to-red-600",
    description: "Toutes mes vidéos",
  },
  {
    platform: "Contact",
    username: "Collaboration",
    icon: Mail,
    url: "#",
    color: "from-green-500 to-emerald-600",
    description: "Travaillons ensemble",
  },
];

export default function SocialLinks() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Réseaux <span className="gradient-text">NaCoSpy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez connecté et découvrez mes dernières créations sur tous mes
            réseaux
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <Card
              key={social.platform}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(social.url, "_blank")}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-br ${social.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <social.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-1">
                  {social.platform}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {social.username}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {social.description}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:border-primary group-hover:text-primary transition-colors"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visiter
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Prêt à collaborer ?</h3>
              <p className="text-muted-foreground mb-6">
                Je suis toujours ouvert aux nouveaux projets et collaborations
                créatives
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Me contacter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
