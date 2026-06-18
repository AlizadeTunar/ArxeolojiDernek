import { BookOpen, CalendarDays, CheckCircle2 } from "lucide-react";
import type { EventItem, LearningTopic, NewsItem } from "../../domain/types";
import { SectionHeader } from "./SectionHeader";

interface LearningSectionProps {
  topics: LearningTopic[];
  events: EventItem[];
  news: NewsItem[];
}

export function LearningSection({ topics, events, news }: LearningSectionProps) {
  return (
    <>
      <section className="page-section" id="learn">
        <SectionHeader eyebrow="Öyrənmə" title="Arxeologiyanı vizual və sadə öyrən" />
        <div className="learning-grid">
          {topics.map((topic) => (
            <article className="learning-card" key={topic.id}>
              <BookOpen size={22} />
              <span>{topic.metric}</span>
              <h3>{topic.title}</h3>
              <p>{topic.summary}</p>
              <small>{topic.detail}</small>
            </article>
          ))}
        </div>
      </section>
      <section className="page-section split-section" id="events">
        <div>
          <SectionHeader eyebrow="Tədbirlər" title="Ekskursiya və sərgilər" />
          <div className="event-list">
            {events.map((event) => (
              <article className="event-card" key={event.id}>
                <CalendarDays size={20} />
                <div>
                  <strong>{event.title}</strong>
                  <p>{event.location} · {new Date(event.date).toLocaleDateString("az-AZ")} · {event.capacity} yer</p>
                  <small>{event.description}</small>
                </div>
                <button type="button">Qeydiyyat</button>
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow="Son xəbərlər" title="Dərnək gündəliyi" />
          <div className="news-rail">
            {news.map((item) => (
              <article className="news-card" key={item.id}>
                <CheckCircle2 size={18} />
                <span>{item.source} · {new Date(item.date).toLocaleDateString("az-AZ")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
