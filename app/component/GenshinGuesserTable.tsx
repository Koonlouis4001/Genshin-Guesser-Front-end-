import axios from "axios";
import { useEffect, useState } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

type GenshinGuesserTableProps = {
  guessCharacterList: any[];
};

export function GenshinGuesserTable({ guessCharacterList }: GenshinGuesserTableProps) {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  var delay = 0.25;

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="header_col" sx={{ width: 60}}>Image</TableCell>
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
              <TableCell className={`display_col ${guessCharacter.check?.status}`} style={{['--delay' as any] : `${delay * 1}s`}}><img src={`${BACKEND_URL}/genshin-characters/image/${guessCharacter.name}`}/></TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.status}`} style={{['--delay' as any] : `${delay * 2}s`}}>{guessCharacter.name}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.gender}`} style={{['--delay' as any] : `${delay * 3}s`}}>{guessCharacter.gender}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.region}`} style={{['--delay' as any] : `${delay * 4}s`}}>{guessCharacter.region}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.vision}`} style={{['--delay' as any] : `${delay * 5}s`}}>{guessCharacter.vision}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.weapon}`} style={{['--delay' as any] : `${delay * 6}s`}}>{guessCharacter.weapon}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.affiliation}`} style={{['--delay' as any] : `${delay * 7}s`}}>{guessCharacter.affiliation}</TableCell>
              <TableCell className={`display_col ${guessCharacter.check?.version == "correct" ? "correct" : "incorrect"}`} style={{['--delay' as any] : `${delay * 8}s`}}>
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
