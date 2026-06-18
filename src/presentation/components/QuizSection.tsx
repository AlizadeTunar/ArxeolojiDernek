import { Award, Trophy } from "lucide-react";
import { useMemo, useState } from "react";
import type { QuizQuestion } from "../../domain/types";
import { SectionHeader } from "./SectionHeader";

interface QuizSectionProps {
  questions: QuizQuestion[];
}

export function QuizSection({ questions }: QuizSectionProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const score = useMemo(() => questions.filter((question) => answers[question.id] === question.answer).length, [answers, questions]);
  const level = score >= 3 ? "Arxeoloq" : score >= 2 ? "Tədqiqatçı" : "Başlanğıc";
  const badges = questions.filter((question) => answers[question.id] === question.answer).map((question) => question.badge);

  return (
    <section className="page-section quiz-band" id="quiz">
      <SectionHeader
        eyebrow="Viktorina"
        title="Bilik səviyyəni yoxla"
        description="Düzgün cavablar nişan və səviyyə açır."
        action={<div className="score-chip"><Trophy size={17} /> {score * 10} xal · {level}</div>}
      />
      <div className="quiz-grid">
        {questions.map((question) => (
          <article className="quiz-card" key={question.id}>
            <h3>{question.question}</h3>
            <div className="option-list">
              {question.options.map((option) => {
                const selected = answers[question.id] === option;
                const correct = selected && option === question.answer;
                const wrong = selected && option !== question.answer;
                return (
                  <button
                    className={`${selected ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}`}
                    key={option}
                    onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}
                    type="button"
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
      <div className="badge-row">
        {["Qobustan kəşfçisi", "İçərişəhər tədqiqatçısı", "Tapıntı ustası"].map((badge) => (
          <span className={badges.includes(badge) ? "earned" : ""} key={badge}><Award size={16} /> {badge}</span>
        ))}
      </div>
    </section>
  );
}
