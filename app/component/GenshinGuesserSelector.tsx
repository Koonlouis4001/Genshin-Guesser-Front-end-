import { Autocomplete, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

type GenshinGuesserSelectorProps = {
  guessCharacter: (character: Object) => void;
  guessCharacterList: any[];
};

export function GenshinGuesserSelector({
  guessCharacter,
  guessCharacterList,
}: GenshinGuesserSelectorProps) {
  const [characters, setCharacters] = useState<any[]>([]);
  const [currentSelectCharacter, setCurrentSelectCharacter] = useState<any>(null);
  const [filterCharacters, setFilterCharacters] = useState<any[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/genshin-characters`
      );
      setCharacters(response.data);
    }
    fetchCharacters();
  }, []);

  useEffect(() => {
    if (!guessCharacterList || guessCharacterList.length == 0) {
      console.log("guessCharacterList : " + guessCharacterList);
      setFilterCharacters(characters);
      return;
    }
    const tempFilteredCharacters = characters.filter(
      (character) =>
        !guessCharacterList.some((guessed) => guessed.id === character.id)
    );
    console.log("Filtered characters: ", tempFilteredCharacters);
    setFilterCharacters(tempFilteredCharacters);
  }, [characters, guessCharacterList]);

  const selectCharacter = () => {
    console.log("Selected character: ", currentSelectCharacter);
    if (!currentSelectCharacter) {
      console.log("No character selected");
      return;
    }
    setValue("");
    guessCharacter(currentSelectCharacter);
    setCurrentSelectCharacter(null);
  };

  return (
    <div className="selector-board">
      <Autocomplete
        className="custom-selector"
        disablePortal
        options={filterCharacters}
        getOptionLabel={(option) => option.name}
        // sx={{ width: 300 }}
        renderInput={(params) => <TextField 
          sx={{
            '& .MuiOutlinedInput-root': {
              height: 50,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '& .MuiOutlinedInput-input': {
              height: '100%',
              padding: '0 14px',
              display: 'flex',
              alignItems: 'center',
            },
          }}
          {...params} 
          label="" />}
        value={currentSelectCharacter}
        onChange={(e,newValue) => {
          console.log("New value selected: ", newValue);
          setCurrentSelectCharacter(characters.find((character) => character.id == newValue.id));
        }}
      />
      {/*
      <select
        className="custom-selector"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setCurrentSelectCharacter(characters.find((character) => character.id == e.target.value));
        }}
      >
        <option value="">Please guess a character</option>
        
        {characters.length != 0 &&
          filterCharacters.map((character) => (
            <option
              key={character.id}
              value={character.id}
              className="text-black-700 dark:text-black-300"
            >
              {character.name}
            </option>
          ))} 
        
      </select>
      */}
      <Button variant="contained" className="guess-button" onClick={selectCharacter}>
        Guess
      </Button>
    </div>
  );
}
