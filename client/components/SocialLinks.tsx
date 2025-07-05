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
        {/* Section Header - iJerce style */}
        <div className="text-center mb-16 fade-in-up">
          <Badge className="section-badge mb-6">Contact</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Restons <span className="gradient-text">connectés</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Suivez-moi sur mes réseaux sociaux pour découvrir mes dernières
            créations et ne rien manquer de mon univers créatif.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => {
            const colors = ["blue", "pink", "red", "green"];
            const colorClass = colors[index % colors.length];

            return (
              <Card
                key={social.platform}
                className="content-card group hover:scale-[1.02] transition-all duration-200 cursor-pointer fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(social.url, "_blank")}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`p-4 rounded-xl bg-${colorClass}/10 border border-${colorClass}/20 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <social.icon className={`h-8 w-8 text-${colorClass}`} />
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {social.platform}
                  </h3>
                  <p className={`text-${colorClass} font-bold mb-3`}>
                    {social.username}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {social.description}
                  </p>

                  <Button
                    size="sm"
                    className={`bg-${colorClass}/10 text-${colorClass} hover:bg-${colorClass} hover:text-white border border-${colorClass}/20 rounded-lg font-medium transition-all duration-200`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visiter
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section - iJerce style */}
        <div className="text-center">
          <div className="content-card max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Prêt à collaborer ?</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Je suis toujours ouvert aux nouveaux projets et collaborations
              créatives. Discutons de votre vision ensemble !
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-3 font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Commencer un projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
