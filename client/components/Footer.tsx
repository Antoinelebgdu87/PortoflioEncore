import { Heart, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary-bright mb-2">
              NaCoSpy
            </h3>
            <p className="text-sm text-muted-foreground">
              Monteur vidéo passionné • Créateur de contenu viral
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-blue transition-colors font-medium"
            >
              Discord
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-pink transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red transition-colors font-medium"
            >
              YouTube
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red fill-current animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 mx-1 text-primary-bright" />
            <span>© 2024 NaCoSpy</span>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            "ALL MY HOMIES LOVE SFXS" - NaCoSpy, monteur depuis 5 mois et déjà
            une légende
          </p>
        </div>
      </div>
    </footer>
  );
}
