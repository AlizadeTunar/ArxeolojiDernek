import excavationsData from "../data/excavations.json";
import museumsData from "../data/museums.json";
import artifactsData from "../data/artifacts.json";
import contentData from "../data/content.json";
import type { ArchaeologySite, Artifact, EventItem, LearningTopic, Museum, NewsItem, QuizQuestion, SearchResult } from "../../domain/types";

export interface ArchaeologyRepository {
  getSites(): Promise<ArchaeologySite[]>;
  getMuseums(): Promise<Museum[]>;
  getArtifacts(): Promise<Artifact[]>;
  getLearningTopics(): Promise<LearningTopic[]>;
  getEvents(): Promise<EventItem[]>;
  getQuiz(): Promise<QuizQuestion[]>;
  getNews(): Promise<NewsItem[]>;
  search(query: string): Promise<SearchResult[]>;
}

const sites = excavationsData as ArchaeologySite[];
const museums = museumsData as Museum[];
const artifacts = artifactsData as Artifact[];
const content = contentData as {
  learning: LearningTopic[];
  events: EventItem[];
  quiz: QuizQuestion[];
  news: NewsItem[];
};

export class LocalArchaeologyRepository implements ArchaeologyRepository {
  async getSites() {
    return sites;
  }

  async getMuseums() {
    return museums;
  }

  async getArtifacts() {
    return artifacts;
  }

  async getLearningTopics() {
    return content.learning;
  }

  async getEvents() {
    return content.events;
  }

  async getQuiz() {
    return content.quiz;
  }

  async getNews() {
    return content.news;
  }

  async search(query: string) {
    const needle = query.trim().toLocaleLowerCase("az");
    if (!needle) return [];

    const siteResults = sites
      .filter((item) => [item.name, item.region, item.era, item.description].join(" ").toLocaleLowerCase("az").includes(needle))
      .map((item) => ({ id: item.id, title: item.name, subtitle: `${item.region} · ${item.era}`, type: "Qazıntı" as const }));

    const museumResults = museums
      .filter((item) => [item.name, item.address, item.description].join(" ").toLocaleLowerCase("az").includes(needle))
      .map((item) => ({ id: item.id, title: item.name, subtitle: item.address, type: "Muzey" as const }));

    const artifactResults = artifacts
      .filter((item) => [item.name, item.foundAt, item.category, item.era, item.material].join(" ").toLocaleLowerCase("az").includes(needle))
      .map((item) => ({ id: item.id, title: item.name, subtitle: `${item.category} · ${item.foundAt}`, type: "Tapıntı" as const }));

    return [...siteResults, ...museumResults, ...artifactResults].slice(0, 8);
  }
}

export const archaeologyRepository = new LocalArchaeologyRepository();
