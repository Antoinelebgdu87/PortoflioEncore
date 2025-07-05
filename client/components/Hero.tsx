import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center simple-fade">
          {/* Main title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-primary-bright">NaCoSpy</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Monteur - Première Pro
          </h2>

          {/* Taglines with vibrant colors */}
          <div className="space-y-3 mb-10">
            <p className="text-xl md:text-2xl font-bold text-yellow">
              TIKTOKS/SHORTS ENJOYER
            </p>
            <p className="text-xl md:text-2xl font-bold text-orange">
              GOAT DES SHORTS
            </p>
            <p className="text-lg md:text-xl font-semibold text-blue">
              ALL MY HOMIES LOVE SFXS
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Monteur vidéo depuis 5 mois, spécialisé dans les shorts et TikToks
            avec des effets visuels impressionnants.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-primary-bright hover:bg-primary text-primary-foreground font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              Voir mes créations
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Mes réseaux
            </Button>
          </div>

          {/* Stats with vibrant colors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green">5+</div>
              <div className="text-muted-foreground font-medium">
                Mois d'expérience
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink">100+</div>
              <div className="text-muted-foreground font-medium">
                Vidéos créées
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red">∞</div>
              <div className="text-muted-foreground font-medium">
                Créativité
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
