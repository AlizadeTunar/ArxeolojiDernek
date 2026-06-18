export type Era = "Daş dövrü" | "Tunc dövrü" | "Dəmir dövrü" | "Antik dövr" | "Orta əsrlər";

export type SiteType = "excavation" | "museum" | "historic";

export type ArtifactCategory = "Silahlar" | "Keramika" | "Sikkələr" | "Bəzək əşyaları" | "Alətlər";

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface ArchaeologySite extends Coordinates {
  id: number;
  name: string;
  type: SiteType;
  region: string;
  era: Era;
  description: string;
  images: string[];
  highlights: string[];
}

export interface Museum extends Coordinates {
  id: number;
  name: string;
  address: string;
  hours: string;
  description: string;
  images: string[];
  collectionFocus: string[];
}

export interface Artifact {
  id: number;
  name: string;
  category: ArtifactCategory;
  image: string;
  foundAt: string;
  era: Era;
  material: string;
  explanation: string;
}

export interface LearningTopic {
  id: number;
  title: string;
  summary: string;
  detail: string;
  metric: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  capacity: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  badge: string;
}

export interface NewsItem {
  id: number;
  title: string;
  source: string;
  date: string;
  description: string;
}

export interface SearchResult {
  id: number;
  title: string;
  subtitle: string;
  type: "Qazıntı" | "Muzey" | "Tapıntı";
}
