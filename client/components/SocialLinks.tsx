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
    color: "bg-blue",
    description: "Rejoignez ma communauté",
  },
  {
    platform: "Instagram",
    username: "@nacospy",
    icon: Instagram,
    url: "#",
    color: "bg-pink",
    description: "Mes dernières créations",
  },
  {
    platform: "YouTube",
    username: "NaCoSpy",
    icon: Youtube,
    url: "https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO",
    color: "bg-red",
    description: "Toutes mes vidéos",
  },
  {
    platform: "Contact",
    username: "Collaboration",
    icon: Mail,
    url: "#",
    color: "bg-green",
    description: "Travaillons ensemble",
  },
];

export default function SocialLinks() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 simple-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Réseaux <span className="text-primary-bright">NaCoSpy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez connecté et découvrez mes dernières créations sur tous mes
            réseaux
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social) => (
            <Card
              key={social.platform}
              className="group hover:scale-105 transition-all duration-200 cursor-pointer simple-fade"
              onClick={() => window.open(social.url, "_blank")}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-4 rounded-full ${social.color} group-hover:scale-110 transition-transform duration-200`}
                  >
                    <social.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-1">
                  {social.platform}
                </h3>
                <p className="text-primary-bright font-bold mb-2">
                  {social.username}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {social.description}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary-bright text-primary-bright hover:bg-primary-bright hover:text-primary-foreground transition-colors font-medium"
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
          <Card className="max-w-2xl mx-auto bg-card border-primary-bright/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Prêt à collaborer ?</h3>
              <p className="text-muted-foreground mb-6">
                Je suis toujours ouvert aux nouveaux projets et collaborations
                créatives
              </p>
              <Button
                size="lg"
                className="bg-accent-bright text-accent-foreground hover:bg-accent transition-all duration-200 font-semibold"
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
