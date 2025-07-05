import { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import VideoShowcase from "../components/VideoShowcase";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section id="hero">
        <Hero />
      </section>

      <section id="videos">
        <VideoShowcase />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="social">
        <SocialLinks />
      </section>

      <Footer />
    </div>
  );
}
