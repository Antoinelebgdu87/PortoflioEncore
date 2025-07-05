import { useState, useEffect } from "react";
import { Play, Film, Scissors, Zap, Sparkles, Download } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    { icon: Download, text: "Chargement des assets...", color: "text-blue" },
    { icon: Film, text: "Préparation de la timeline...", color: "text-green" },
    { icon: Scissors, text: "Montage en cours...", color: "text-yellow" },
    { icon: Zap, text: "Application des effets...", color: "text-orange" },
    { icon: Sparkles, text: "Finalisation...", color: "text-pink" },
    { icon: Play, text: "Export terminé !", color: "text-purple" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        const stepProgress = Math.floor(newProgress / 17);

        if (stepProgress !== currentStep && stepProgress < steps.length) {
          setCurrentStep(stepProgress);
        }

        if (newProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 1200);
          return 100;
        }

        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete, currentStep]);

  const currentStepData = steps[currentStep] || steps[0];
  const IconComponent = currentStepData.icon;

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Film strip effect */}
        <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-muted/20 to-transparent">
          <div className="h-full flex flex-col justify-between py-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-6 h-4 bg-muted/30 mx-3 rounded-sm" />
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-muted/20 to-transparent">
          <div className="h-full flex flex-col justify-between py-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-6 h-4 bg-muted/30 mx-3 rounded-sm" />
            ))}
          </div>
        </div>

        {/* Moving particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue/5 via-transparent to-purple/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-12 px-8 max-w-lg">
        {/* Logo Section */}
        <div className="space-y-6">
          <div className="relative">
            <h1 className="text-7xl font-bold gradient-text">NaCoSpy</h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="text-lg text-muted-foreground font-medium">
            Portfolio • Monteur Vidéo
          </p>
        </div>

        {/* Loading Animation */}
        <div className="space-y-8">
          {/* Current Step Icon */}
          <div className="flex justify-center">
            <div
              className={`p-6 rounded-full bg-gradient-to-br from-primary/20 to-purple/20 border border-primary/30 ${isComplete ? "animate-pulse" : ""}`}
            >
              <IconComponent
                className={`w-12 h-12 ${currentStepData.color} transition-all duration-500 ${isComplete ? "scale-125" : ""}`}
              />
            </div>
          </div>

          {/* Progress Text */}
          <div className="space-y-2">
            <p
              className={`text-lg font-medium ${currentStepData.color} transition-colors duration-500`}
            >
              {currentStepData.text}
            </p>
            <p className="text-sm text-muted-foreground">
              {isComplete ? "Chargement terminé !" : `${progress}% complété`}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-4">
            <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-purple transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </div>
            </div>

            {/* Step indicators */}
            <div className="flex justify-between items-center">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center space-y-1 transition-all duration-500 ${
                      index <= currentStep ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${index <= currentStep ? "bg-primary/20" : "bg-muted/20"} transition-colors duration-500`}
                    >
                      <StepIcon
                        className={`w-4 h-4 ${index <= currentStep ? step.color : "text-muted-foreground"} transition-colors duration-500`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Animation */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-8 bg-gradient-to-t from-primary to-purple rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Cinematic fade effect */}
      {isComplete && (
        <div className="absolute inset-0 bg-background animate-fade-in z-20" />
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
