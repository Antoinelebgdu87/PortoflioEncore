import { RequestHandler } from "express";
import {
  GetPortfolioResponse,
  UpdatePortfolioRequest,
  UpdatePortfolioResponse,
  PortfolioData,
} from "@shared/portfolio";

// In-memory storage (in production, use a real database)
let portfolioData: PortfolioData = {
  videos: [
    {
      id: "1",
      title: "Epic Short Edit #1",
      url: "https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO",
      type: "short",
      duration: "0:30",
      views: "25K",
    },
    {
      id: "2",
      title: "Cinematic Long Form",
      url: "https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO",
      type: "long",
      duration: "5:42",
      views: "10K",
    },
    {
      id: "3",
      title: "TikTok Viral Edit",
      url: "https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO",
      type: "short",
      duration: "0:15",
      views: "50K",
    },
    {
      id: "4",
      title: "Professional Showcase",
      url: "https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO",
      type: "long",
      duration: "3:20",
      views: "8K",
    },
  ],
  socialLinks: [
    {
      id: "1",
      platform: "Discord",
      username: "nacospy",
      url: "#",
      description: "Rejoignez ma communauté",
    },
    {
      id: "2",
      platform: "Instagram",
      username: "@nacospy",
      url: "#",
      description: "Mes dernières créations",
    },
    {
      id: "3",
      platform: "YouTube",
      username: "NaCoSpy",
      url: "https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO",
      description: "Toutes mes vidéos",
    },
    {
      id: "4",
      platform: "Contact",
      username: "Collaboration",
      url: "#",
      description: "Travaillons ensemble",
    },
  ],
  settings: {
    bio: "Monteur vidéo depuis 5 mois, spécialisé dans les shorts et TikToks avec des effets visuels impressionnants.",
    youtubePlaylist:
      "https://youtube.com/playlist?list=PLWEXW1UK9HZzoWtCY5TR6ibBUfP4nsWTw&si=wiu26SWg8POUxCeO",
    title: "NaCoSpy",
    subtitle: "Monteur - Première Pro",
  },
};

export const getPortfolio: RequestHandler = (req, res) => {
  const response: GetPortfolioResponse = {
    success: true,
    data: portfolioData,
  };
  res.json(response);
};

export const updatePortfolio: RequestHandler = (req, res) => {
  try {
    const updateData = req.body as UpdatePortfolioRequest;

    if (updateData.videos) {
      portfolioData.videos = updateData.videos;
    }

    if (updateData.socialLinks) {
      portfolioData.socialLinks = updateData.socialLinks;
    }

    if (updateData.settings) {
      portfolioData.settings = {
        ...portfolioData.settings,
        ...updateData.settings,
      };
    }

    const response: UpdatePortfolioResponse = {
      success: true,
      message: "Portfolio mis à jour avec succès",
    };

    res.json(response);
  } catch (error) {
    console.error("Error updating portfolio:", error);
    res.status(500).json({
      success: false,
      message: "Erreur lors de la mise à jour du portfolio",
    });
  }
};
