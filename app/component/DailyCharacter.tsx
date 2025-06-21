import axios from "axios";
import { useEffect, useState } from "react";
import { GenshinGuesserSelector } from "./GenshinGuesserSelector";
import { Button } from "@mui/material";

type DailyCharacterProps = {
  currentCharacter: any;
  finishGame: boolean;
  setFinishGame: (reset: boolean) => void;
};

export function DailyCharacter({
  currentCharacter,
  finishGame,
  setFinishGame
}: DailyCharacterProps) {
  const [dailyCharacter, setDailyCharacter] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [answerTemplate, setAnswerTemplate] = useState({
    weapon: false,
    vision: false,
    region: false,
    version: 1,
    affiliation: false,
  });

  useEffect(() => {
    if (currentCharacter === null || currentCharacter === undefined) {
      return;
    }
    if (currentCharacter.name === dailyCharacter.name) {
      console.log("You have guessed the character correctly!");
      setFinishGame(true);
      return;
    }
    if (currentCharacter.weapon === dailyCharacter.weapon) {
      console.log("Weapon is correct");
    }
    if (currentCharacter.vision === dailyCharacter.vision) {
      console.log("Vision is correct");
    }
    if (currentCharacter.region === dailyCharacter.region) {
      console.log("Region is correct");
    }
    if (currentCharacter.version === dailyCharacter.version) {
      console.log("Version is correct");
    }
    if (currentCharacter.affiliation === dailyCharacter.affiliation) {
      console.log("Affiliation is correct");
    }
  }, [currentCharacter]);

  const randomNewCharacter = async () => {
    console.log("Let's get a new character!");
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8090/genshin-characters/random?excludeId=${dailyCharacter.id}`
      );
      setDailyCharacter(response.data);
      console.log(response.data);
    } catch {
      setError("Failed to random new character");
    } finally {
      setLoading(false);
    }
  };

  const resetGame = () => {
    randomNewCharacter();
    setFinishGame(false);
  }

  useEffect(() => {
    async function fetchDailyCharacter() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "http://localhost:8090/genshin-characters/daily"
        );
        setDailyCharacter(response.data);
        console.log(response.data);
      } catch {
        setError("Failed to fetch daily character");
      } finally {
        setLoading(false);
      }
    }
    fetchDailyCharacter();
  }, []);

  return (
    <div className="">
      {finishGame && (<Button onClick={() => resetGame()}>Restart</Button>)}
      <ul>
        {loading && <li className="text-black-700">Loading characters...</li>}
        {error && <li className="text-red-500">{error}</li>}
        {!loading && !error && dailyCharacter === null && (
          <li className="text-black-700">No characters found</li>
        )}
        {!loading && !error && dailyCharacter !== null && (
          <li
            key={dailyCharacter.id}
            className="text-black-700 dark:text-black-300"
          >
            {dailyCharacter.name}
            {dailyCharacter.region}
            {dailyCharacter.vision}
            {dailyCharacter.weapon}
            {dailyCharacter.affiliation}
            {dailyCharacter.version}
          </li>
        )}
      </ul>
    </div>
  );
}
