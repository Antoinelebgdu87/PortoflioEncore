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
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Spécialisé dans le montage vidéo moderne avec une passion pour les
            effets visuels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Skill Level */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Niveau</span>
                    <span className="text-primary font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Réalisations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={achievement.title}
              className="text-center group hover:scale-105 transition-all duration-300 slide-in-right"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
