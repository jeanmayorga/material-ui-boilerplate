import React from "react";
import { Layout } from "../../components/Layout";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

import {
  PhoneAndroidOutlined,
  CallMadeOutlined,
  CellWifiOutlined,
} from "@material-ui/icons";

import "../../styles/Dashboard.scss";

const data = [
  {
    name: "Name 1",
    calories: 15,
    fat: 15,
    carbs: "aer",
    protein: "Cool Protein",
  },
  {
    name: "Name 0",
    calories: 135,
    fat: 5415,
    carbs: "aesadr",
    protein: "Cool  sdf Protein",
  },
  {
    name: "Name 2",
    calories: 135,
    fat: 5415,
    carbs: "aesadr",
    protein: "Cool  sdf Protein",
  },
  {
    name: "Name 8",
    calories: 135,
    fat: 5415,
    carbs: "aesadr",
    protein: "Cool  sdf Protein",
  },
  {
    name: "Name 9",
    calories: 135,
    fat: 5415,
    carbs: "aesadr",
    protein: "Cool  sdf Protein",
  },
];

export function Dashboard() {
  return (
    <Layout>
      <div className="cards">
        <Card>
          <CardContent>
            <div className="icon-background">
              <PhoneAndroidOutlined />
            </div>
            <Typography variant="h5" component="h2">
              Llamadas de Hoy
            </Typography>
            <Typography color="textSecondary">25 Llamadas</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver Todas</Button>
          </CardActions>
        </Card>
        <Card>
          <CardContent>
            <div className="icon-background">
              <CellWifiOutlined />
            </div>
            <Typography variant="h5" component="h2">
              Llamadas de Ayer
            </Typography>
            <Typography color="textSecondary">2 Llamadas</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver Todas</Button>
          </CardActions>
        </Card>
        <Card>
          <CardContent>
            <div className="icon-background">
              <CallMadeOutlined />
            </div>
            <Typography variant="h5" component="h2">
              Llamadas de AnteAyer
            </Typography>
            <Typography color="textSecondary">29 Llamadas</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Ver Todas</Button>
          </CardActions>
        </Card>
      </div>
      <div className="stats">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
}
