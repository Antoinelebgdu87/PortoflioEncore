import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Video,
  Zap,
  Palette,
  Music,
  Scissors,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react";

const skills = [
  {
    icon: Video,
    title: "Montage Vidéo",
    description: "Maîtrise d'Adobe Premiere Pro",
    level: 95,
  },
  {
    icon: Zap,
    title: "Effets Visuels",
    description: "SFX et transitions smooth",
    level: 90,
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Ambiances cinématiques",
    level: 85,
  },
  {
    icon: Music,
    title: "Sound Design",
    description: "Synchronisation audio parfaite",
    level: 88,
  },
  {
    icon: Scissors,
    title: "Shorts/TikToks",
    description: "Format vertical optimisé",
    level: 98,
  },
  {
    icon: TrendingUp,
    title: "Contenu Viral",
    description: "Comprendre les tendances",
    level: 92,
  },
];

const achievements = [
  {
    icon: Award,
    title: "5 Mois d'Expérience",
    description: "Progression rapide et constante",
  },
  {
    icon: Sparkles,
    title: "Style Unique",
    description: "Signature visuelle reconnaissable",
  },
  {
    icon: TrendingUp,
    title: "Contenu Engageant",
    description: "Vidéos qui captent l'attention",
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header - iJerce style */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Spécialisé dans{" "}
            <span className="gradient-text">l'art du montage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Chaque projet est unique et mérite une approche personnalisée. Avec
            5 mois d'expérience intensive, je maîtrise les outils modernes du
            montage vidéo.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => {
            const colors = [
              "blue",
              "green",
              "red",
              "yellow",
              "orange",
              "pink",
              "purple",
              "cyan",
            ];
            const colorClass = colors[index % colors.length];

            return (
              <Card
                key={skill.title}
                className="content-card group hover:scale-[1.02] hover-lift transition-all duration-200 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-${colorClass}/10 border border-${colorClass}/20 transition-all duration-200`}
                  >
                    <skill.icon className={`h-6 w-6 text-${colorClass}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Skill Level */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">
                      Niveau de maîtrise
                    </span>
                    <span className={`text-lg font-bold text-${colorClass}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className={`bg-${colorClass} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-8 text-primary-bright">
            Réalisations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const colors = ["bg-green", "bg-yellow", "bg-orange"];
            const colorClass = colors[index];

            return (
              <Card
                key={achievement.title}
                className="text-center group hover:scale-105 transition-all duration-200 simple-fade"
              >
                <CardContent className={`p-6 ${index === 1 ? "mb-6" : ""}`}>
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-4 rounded-full ${colorClass}/20 group-hover:scale-110 transition-transform duration-200`}
                    ></div>
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
