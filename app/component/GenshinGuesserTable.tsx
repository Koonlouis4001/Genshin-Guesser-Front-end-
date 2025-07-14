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
              <TableCell className={`display_col ${guessCharacter.check?.status}`} style={{['--delay' as any] : `0.5s`}}>{guessCharacter.name}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.gender}`} style={{['--delay' as any] : `1s`}}>{guessCharacter.gender}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.region}`} style={{['--delay' as any] : `1.5s`}}>{guessCharacter.region}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.vision}`} style={{['--delay' as any] : `2s`}}>{guessCharacter.vision}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.weapon}`} style={{['--delay' as any] : `2.5s`}}>{guessCharacter.weapon}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.affiliation}`} style={{['--delay' as any] : `3s`}}>{guessCharacter.affiliation}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.version == "correct" ? "correct" : "incorrect"}`} style={{['--delay' as any] : `3.5s`}}>
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
