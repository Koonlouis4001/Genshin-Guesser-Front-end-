import axios from "axios";
import { useEffect, useState } from "react";

export function GenshinGuesser() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "http://localhost:8090/genshin-characters"
        );
        setCharacters(response.data);
        console.log(response.data);
      } catch {
        setError("Failed to fetch characters");
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, []);

  return (
    <div className="max-w-[300px] w-full space-y-6 px-4">
      <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
        <ul>
            {loading && <li className="text-black-700">Loading characters...</li>}
            {error && <li className="text-red-500">{error}</li>}
            {!loading && !error && characters.length === 0 && (
                <li className="text-black-700">No characters found</li>
            )}
            {!loading &&
                !error &&
                characters.map((character) => (
                <li key={character.id} className="text-black-700 dark:text-black-300">
                    {character.name}
                </li>
                ))}
        </ul>
      </nav>
    </div>
  );
}
