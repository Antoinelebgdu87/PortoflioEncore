import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    url: "https://discord.com/invite/Kk3RV8V9",
    color: "bg-blue",
    description: "Rejoignez ma communauté",
  },
  {
    platform: "Instagram",
    username: "@nacospy",
    icon: Instagram,
    url: "https://www.instagram.com/nacospy?igsh=NXN1ejc4ZnYxeDRm",
    color: "bg-pink",
    description: "Mes dernières créations",
  },
  {
    platform: "YouTube",
    username: "NaCoSpy",
    icon: Youtube,
    url: "https://www.youtube.com/@nacospy50",
    color: "bg-red",
    description: "Toutes mes vidéos",
  },
];

export default function SocialLinks() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header - iJerce style */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Restons <span className="gradient-text">connectés</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Suivez-moi sur mes réseaux sociaux pour découvrir mes dernières
            créations et ne rien manquer de mon univers créatif.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social, index) => {
            const colors = ["blue", "pink", "red"];
            const colorClass = colors[index % colors.length];

            return (
              <Card
                key={social.platform}
                className="content-card group hover:scale-[1.02] hover-lift hover-glow transition-all duration-500 cursor-pointer stagger-animation"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => window.open(social.url, "_blank")}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`p-4 rounded-xl bg-${colorClass}/10 border border-${colorClass}/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 float-animation`}
                    >
                      <social.icon
                        className={`h-8 w-8 text-${colorClass} transition-colors duration-300 group-hover:text-white`}
                      />
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-primary">
                    {social.platform}
                  </h3>
                  <p
                    className={`text-${colorClass} font-bold mb-3 transition-all duration-300 group-hover:scale-105`}
                  >
                    {social.username}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                    {social.description}
                  </p>

                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center bg-${colorClass}/10 text-${colorClass} hover:bg-${colorClass} hover:text-white border border-${colorClass}/20 rounded-lg font-medium transition-all duration-300 h-9 px-3 text-sm gap-2 hover-grow pulse-glow`}
                  >
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                    Visiter
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
