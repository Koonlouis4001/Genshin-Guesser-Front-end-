import axios from "axios";
import { useEffect, useState } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

type GenshinGuesserTableProps = {
  guessCharacterList: any[];
};

export function GenshinGuesserTable({ guessCharacterList }: GenshinGuesserTableProps) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Region</TableCell>
            <TableCell align="center">Vision</TableCell>
            <TableCell align="center">Weapon</TableCell>
            <TableCell align="center">Affiliation</TableCell>
            <TableCell align="center">Version</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {guessCharacterList.map((guessCharacter) => (
            <TableRow
              key={guessCharacter.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className={`display_col ${guessCharacter.check?.status}`}>{guessCharacter.name}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.region}`}>{guessCharacter.region}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.vision}`}>{guessCharacter.vision}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.weapon}`}>{guessCharacter.weapon}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.affiliation}`}>{guessCharacter.affiliation}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.version == "correct" ? "correct" : "incorrect"}`}>
                {guessCharacter.version}
                {guessCharacter.check?.version === "higher" && "▲"}
                {guessCharacter.check?.version === "lower" && "▼"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
