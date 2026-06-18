import { useEffect, useState } from "react";

const storageKey = "arxeoloji-dernek:favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (raw) setFavorites(JSON.parse(raw) as number[]);
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  };

  return { favorites, toggleFavorite };
}
