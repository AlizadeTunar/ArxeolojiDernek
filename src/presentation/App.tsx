import { Menu, ShieldCheck, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { ArchaeologySite, Artifact, EventItem, LearningTopic, Museum, NewsItem, QuizQuestion, SearchResult } from "../domain/types";
import { archaeologyRepository } from "../infrastructure/repositories/localRepository";
import { AboutSection } from "./components/AboutSection";
import { ArtifactCatalog } from "./components/ArtifactCatalog";
import { ExcavationExplorer } from "./components/ExcavationExplorer";
import { Hero } from "./components/Hero";
import { LearningSection } from "./components/LearningSection";
import { MapExperience } from "./components/MapExperience";
import { MuseumSection } from "./components/MuseumSection";
import { QuizSection } from "./components/QuizSection";
import { UniversalSearch } from "./components/UniversalSearch";
import { useFavorites } from "./hooks/useFavorites";

export function App() {
  const [sites, setSites] = useState<ArchaeologySite[]>([]);
  const [museums, setMuseums] = useState<Museum[]>([]);
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [topics, setTopics] = useState<LearningTopic[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [quiz, setQuiz] = useState<QuizQuestion[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [navOpen, setNavOpen] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    Promise.all([
      archaeologyRepository.getSites(),
      archaeologyRepository.getMuseums(),
      archaeologyRepository.getArtifacts(),
      archaeologyRepository.getLearningTopics(),
      archaeologyRepository.getEvents(),
      archaeologyRepository.getQuiz(),
      archaeologyRepository.getNews(),
    ]).then(([siteData, museumData, artifactData, topicData, eventData, quizData, newsData]) => {
      setSites(siteData);
      setMuseums(museumData);
      setArtifacts(artifactData);
      setTopics(topicData);
      setEvents(eventData);
      setQuiz(quizData);
      setNews(newsData);
    });
  }, []);

  useEffect(() => {
    archaeologyRepository.search(query).then(setResults);
  }, [query]);

  const dailyArtifact = useMemo(() => artifacts[new Date().getDate() % Math.max(artifacts.length, 1)] ?? artifacts[0], [artifacts]);

  if (!dailyArtifact) {
    return <div className="app-loading">Arxeoloji Dərnək açılır...</div>;
  }

  const navItems = [
    ["Qazıntılar", "#sites"],
    ["Xəritə", "#map"],
    ["Muzeylər", "#museums"],
    ["Tapıntılar", "#artifacts"],
    ["Öyrənmə", "#learn"],
    ["Viktorina", "#quiz"],
    ["Dərnək", "#about"],
  ];

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark"><ShieldCheck size={22} /></span>
          <span>Arxeoloji Dərnək</span>
        </a>
        <nav className={navOpen ? "open" : ""}>
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setNavOpen(false)}>{label}</a>)}
        </nav>
        <button className="menu-button" onClick={() => setNavOpen((value) => !value)} type="button" aria-label="Menyu">
          {navOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <Hero artifact={dailyArtifact} />
        <div className="search-wrap">
          <UniversalSearch query={query} results={results} onQueryChange={setQuery} />
        </div>
        <ExcavationExplorer sites={sites} />
        <MapExperience sites={sites} museums={museums} />
        <MuseumSection museums={museums} />
        <ArtifactCatalog artifacts={artifacts} favorites={favorites} onToggleFavorite={toggleFavorite} />
        <LearningSection topics={topics} events={events} news={news} />
        <QuizSection questions={quiz} />
        <AboutSection />
      </main>
      <footer className="footer">
        <strong>Arxeoloji Dərnək</strong>
        <span>JSON offline cache · Firebase-ready repository · Google Maps route support</span>
      </footer>
    </div>
  );
}
