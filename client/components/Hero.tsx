import { Button } from "@/components/ui/button";
import { Play, Download, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-background to-pink-900/30"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full floating-animation"></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-pink-500 rounded-full floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 rounded-full floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center fade-in">
          {/* Main title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">NaCoSpy</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
            Monteur - Première Pro
          </h2>

          {/* Taglines */}
          <div className="space-y-2 mb-8">
            <p className="text-lg md:text-xl text-video-accent font-medium">
              TIKTOKS/SHORTS ENJOYER
            </p>
            <p className="text-lg md:text-xl text-video-secondary font-medium">
              GOAT DES SHORTS
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              ALL MY HOMIES LOVE SFXS
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Monteur vidéo depuis 5 mois, spécialisé dans les shorts et TikToks
            avec des effets visuels impressionnants.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="glow-effect group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Voir mes créations
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Mes réseaux
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground">
                Mois d'expérience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100+</div>
              <div className="text-sm text-muted-foreground">Vidéos créées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">∞</div>
              <div className="text-sm text-muted-foreground">Créativité</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
