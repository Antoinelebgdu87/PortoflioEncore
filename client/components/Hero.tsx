import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center fade-in-up">
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
            Passionné par{" "}
            <span className="gradient-text float-animation">
              l'art du montage
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium fade-in-up-delay">
            <span className="text-primary-bright font-bold pulse-glow">
              NaCoSpy
            </span>{" "}
            • Monteur - Profesionel
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed fade-in-up-delay-2">
            Depuis 5 mois, je transforme les vidéos brutes en contenus
            exceptionnels. Spécialisé dans les shorts et TikToks avec des effets
            visuels impressionnants.
          </p>

          {/* Skill tags with vibrant colors */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in-up-delay-3">
            <Badge
              className="bg-blue/10 text-blue border-blue/20 px-3 py-1 font-medium hover-grow stagger-animation"
              style={{ animationDelay: "0.1s" }}
            >
              TIKTOKS/SHORTS ENJOYER
            </Badge>
            <Badge
              className="bg-orange/10 text-orange border-orange/20 px-3 py-1 font-medium hover-grow stagger-animation"
              style={{ animationDelay: "0.2s" }}
            >
              GOAT DES SHORTS
            </Badge>
            <Badge
              className="bg-purple/10 text-purple border-purple/20 px-3 py-1 font-medium hover-grow stagger-animation"
              style={{ animationDelay: "0.3s" }}
            >
              ALL MY HOMIES LOVE SFXS
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 scale-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl px-8 hover-lift hover-glow transition-all duration-300"
              onClick={() => scrollToSection("#videos")}
            >
              <Play className="mr-2 h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              Voir mes créations
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-card font-semibold rounded-xl px-8 hover-lift transition-all duration-300"
              onClick={() => scrollToSection("#social")}
            >
              <ExternalLink className="mr-2 h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              Mes réseaux
            </Button>
          </div>
        </div>

        {/* Stats card - iJerce style */}
        <div
          className="max-w-2xl mx-auto slide-in-right"
          style={{ animationDelay: "1s" }}
        >
          <div
            className="content-card hover-lift"
            style={{ marginLeft: "-5px" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div
                className="stagger-animation"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-green mb-1 hover:scale-110 transition-transform duration-200">
                  5+
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Mois d'expérience
                </div>
              </div>
              <div
                className="stagger-animation"
                style={{ animationDelay: "1.4s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-pink mb-1 hover:scale-110 transition-transform duration-200">
                  27+
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Vidéos créées
                </div>
              </div>
              <div
                className="stagger-animation"
                style={{ animationDelay: "1.6s" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow mb-1 hover:scale-110 transition-transform duration-200 float-animation">
                  ∞
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Créativité
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
