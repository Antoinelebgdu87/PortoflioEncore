import { Heart, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand section - iJerce style */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Editing By <span className="gradient-text">NaCoSpy</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Monteur vidéo professionnel spécialisé dans la création de
              contenus captivants et viraux. Transformons vos idées en vidéos
              mémorables.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-blue/10 text-blue hover:bg-blue hover:text-white transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-pink/10 text-pink hover:bg-pink hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-red/10 text-red hover:bg-red hover:text-white transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Accueil
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Créations
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Compétences
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Montage TikTok</p>
              <p className="text-sm text-muted-foreground">Shorts YouTube</p>
              <p className="text-sm text-muted-foreground">Effets Visuels</p>
              <p className="text-sm text-muted-foreground">Color Grading</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 NaCoSpy. "ALL MY HOMIES LOVE SFXS" - Monteur depuis 5 mois
            et déjà une légende.
          </p>
        </div>
      </div>
    </footer>
  );
}
