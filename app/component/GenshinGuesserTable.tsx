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
            <TableCell className="header_col">Name</TableCell>
            <TableCell className="header_col">Gender</TableCell>
            <TableCell className="header_col">Region</TableCell>
            <TableCell className="header_col">Vision</TableCell>
            <TableCell className="header_col">Weapon</TableCell>
            <TableCell className="header_col">Affiliation</TableCell>
            <TableCell className="header_col">Version</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {guessCharacterList.map((guessCharacter) => (
            <TableRow
              key={guessCharacter.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className={`display_col ${guessCharacter.check?.status}`}>{guessCharacter.name}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.gender}`}>{guessCharacter.gender}</TableCell>
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
