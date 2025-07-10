import { useEffect, useState } from "react";
import { GenshinGuesserSelector } from "./GenshinGuesserSelector";
import { DailyCharacter } from "./DailyCharacter";
import { GenshinGuesserTable } from "./GenshinGuesserTable";
import axios from "axios";
import { Button } from "@mui/material";

export function GenshinGuesser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [guessCharacterList, setGuessCharacterList] = useState<any[]>([]);
  const [finishGame, setFinishGame] = useState(false);
  const [dailyCharacter, setDailyCharacter] = useState<any>(null);
  const [mode, setMode] = useState("daily");
  const [answerTemplate, setAnswerTemplate] = useState({
    status: "incorrect",
    weapon: "incorrect",
    vision: "incorrect",
    region: "incorrect",
    version: "incorrect",
    affiliation: "incorrect",
  });

  const randomNewCharacter = async () => {
    console.log("Let's get a new character!");
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/genshin-characters/random?excludeId=${dailyCharacter.id}`
      );
      setDailyCharacter(response.data);
      setMode("endless");
    } catch {
      setError("Failed to random new character");
    } finally {
      setLoading(false);
    }
  };

  const resetGame = () => {
    randomNewCharacter();
    setFinishGame(false);
  };

  const checkAnswer = (character: any) => {
    const currentAnswerTemplate = { ...answerTemplate };
    if (character.name === dailyCharacter.name) {
      currentAnswerTemplate.status = "correct";
      setFinishGame(true);
    }

    if (character.weapon === dailyCharacter.weapon) {
      currentAnswerTemplate.weapon = "correct";
    }
    if (character.vision === dailyCharacter.vision) {
      currentAnswerTemplate.vision = "correct";
    }
    if (character.region === dailyCharacter.region) {
      currentAnswerTemplate.region = "correct";
    }
    if (character.affiliation === dailyCharacter.affiliation) {
      currentAnswerTemplate.affiliation = "correct";
    }

    if(character.version === dailyCharacter.version) {
      currentAnswerTemplate.version = "correct";
    }
    else if(character.version - dailyCharacter.version < 0) {
      currentAnswerTemplate.version = "higher";
    }
    else if(character.version - dailyCharacter.version > 0) {
      currentAnswerTemplate.version = "lower";
    }
    return currentAnswerTemplate;
  };

  const guessCharacter = (character: any) => {
    if (character === null || character === undefined) {
      return;
    }
    console.log("You have choose : " + character.name);
    if (guessCharacterList.some((c) => c.id === character.id)) {
      console.log("Character already guessed: " + character.name);
      return; // Character already guessed
    }
    var currentAnswer = checkAnswer(character);
    character.check = currentAnswer;
    console.log("Current character: ", character);
    setGuessCharacterList((prevList) => [...prevList, character]);
  };

  // initial fetch of the daily character
  useEffect(() => {
    async function fetchDailyCharacter() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/genshin-characters/daily`
        );
        setDailyCharacter(response.data);
      } catch {
        setError("Failed to fetch daily character");
      } finally {
        setLoading(false);
      }
    }
    fetchDailyCharacter();
  }, []);

  useEffect(() => {
    if (guessCharacterList.length > 0 && !finishGame) {
      console.log("Resetting game...");
      setCurrentCharacter(null);
      setGuessCharacterList([]);
    }
  }, [finishGame]);

  return (
    <div className="board">
      <div className="board_status">
        {loading && <li className="text-black-700">Loading characters...</li>}
        {error && <li className="text-red-500">{error}</li>}
        {finishGame && <Button onClick={() => resetGame()}>Restart</Button>}
        {!loading && !error && (
          <DailyCharacter
            finishGame={finishGame}
            dailyCharacter={dailyCharacter}
            mode={mode}
          />
        )}
        {!finishGame && (
          <GenshinGuesserSelector
            guessCharacter={guessCharacter}
            guessCharacterList={guessCharacterList}
          />
        )}
      </div>
      <div className="board_table">
        <GenshinGuesserTable guessCharacterList={guessCharacterList} />
      </div>
    </div>
  );
}
