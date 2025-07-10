import axios from "axios";
import { useEffect, useState } from "react";
import { GenshinGuesserSelector } from "./GenshinGuesserSelector";
import { Button } from "@mui/material";

type DailyCharacterProps = {
  finishGame: boolean;
  dailyCharacter: any;
  mode: string;
};

export function DailyCharacter({
  finishGame,
  dailyCharacter,
  mode,
}: DailyCharacterProps) {
  return (
    <div>
      {dailyCharacter !== null && (
        <div className="text-black-700 dark:text-black-300 text-center">
          <div className="text-center">Current Mode : {mode}</div>
          {!finishGame && "Can you guess what character i have in mind?"}
          <div className="text-2xl font-bold text-center">
            {finishGame && "Correct! It is " + dailyCharacter.name}
          </div>
        </div>
      )}
    </div>
  );
}
