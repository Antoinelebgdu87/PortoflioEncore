export interface Video {
  id: string;
  title: string;
  url: string;
  type: "short" | "long";
  thumbnail?: string;
  duration?: string;
  views?: string;
  createdAt?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username: string;
  description?: string;
}

export interface PortfolioSettings {
  bio: string;
  youtubePlaylist: string;
  title: string;
  subtitle: string;
}

export interface PortfolioData {
  videos: Video[];
  socialLinks: SocialLink[];
  settings: PortfolioSettings;
}

// API Response types
export interface GetPortfolioResponse {
  success: boolean;
  data: PortfolioData;
}

export interface UpdatePortfolioRequest {
  videos?: Video[];
  socialLinks?: SocialLink[];
  settings?: Partial<PortfolioSettings>;
}

export interface UpdatePortfolioResponse {
  success: boolean;
  message: string;
}
