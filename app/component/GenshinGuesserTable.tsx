import axios from "axios";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type GenshinGuesserTableProps = {
  guessCharacterList: any[];
};

export function GenshinGuesserTable({ guessCharacterList }: GenshinGuesserTableProps) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
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
              <TableCell component="th" scope="row">
                {guessCharacter.name}
              </TableCell>
              <TableCell align="center">{guessCharacter.region}</TableCell>
              <TableCell align="center">{guessCharacter.vision}</TableCell>
              <TableCell align="center">{guessCharacter.weapon}</TableCell>
              <TableCell align="center">{guessCharacter.affiliation}</TableCell>
              <TableCell align="center">{guessCharacter.version}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
