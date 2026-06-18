import { Search, Sparkles } from "lucide-react";
import type { SearchResult } from "../../domain/types";

interface UniversalSearchProps {
  query: string;
  results: SearchResult[];
  onQueryChange: (query: string) => void;
}

export function UniversalSearch({ query, results, onQueryChange }: UniversalSearchProps) {
  return (
    <div className="search-shell">
      <Search size={20} />
      <input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Muzey, qazıntı, tapıntı və dövr üzrə axtar..."
      />
      <Sparkles className="search-spark" size={18} />
      {results.length > 0 && (
        <div className="search-results">
          {results.map((result) => (
            <button key={`${result.type}-${result.id}`} type="button">
              <span>{result.type}</span>
              <strong>{result.title}</strong>
              <small>{result.subtitle}</small>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
