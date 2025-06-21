import { useEffect, useState } from "react";
import { GenshinGuesserSelector } from "./GenshinGuesserSelector";
import { DailyCharacter } from "./DailyCharacter";
import { GenshinGuesserTable } from "./GenshinGuesserTable";

export function GenshinGuesser() {

  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [guessCharacterList, setGuessCharacterList] = useState<any[]>([]);
  const [finishGame, setFinishGame] = useState(false);

  useEffect(() => {
    if(guessCharacterList.length > 0 && !finishGame) {
      console.log("Resetting game...");
      setCurrentCharacter(null);
      setGuessCharacterList([]);
    }
  }, [finishGame]);

  const guessCharacter = (character: any) => {
    if(character === null || character === undefined) {
        return;
    }
    console.log("You have choose : " + character.name);
    if(guessCharacterList.some(c => c.id === character.id)) {
      console.log("Character already guessed: " + character.name);
      return; // Character already guessed
    }
    setCurrentCharacter(character);
    setGuessCharacterList(prevList => [...prevList, character]);
  }

  return (
    <div>
      <DailyCharacter currentCharacter = {currentCharacter} finishGame={finishGame} setFinishGame={setFinishGame}/>
      <GenshinGuesserSelector guessCharacter = {guessCharacter} guessCharacterList={guessCharacterList} finishGame={finishGame}/>
      <GenshinGuesserTable guessCharacterList={guessCharacterList}/>
    </div>
  );
}
