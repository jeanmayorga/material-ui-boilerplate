import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Modal,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { Layout } from "../../components/Layout";

import "../../styles/Dashboard.scss";

interface Character {
  id: number;
  name: string;
  image: string;
  type: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export function DashboardFetch() {
  const classes = useStyles();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const selectCharacter = (char: Character) => {
    setSelectedCharacter(char);
    setShowModal(true);
  };

  useEffect(() => {
    const getCharacters = async () => {
      const request = await fetch("https://rickandmortyapi.com/api/character/");
      const response = await request.json();
      return response;
    };
    getCharacters().then((response) => {
      const results = response.results;
      setCharacters(results);
      setIsLoading(false);
    });

    return () => {
      setCharacters([]);
      setIsLoading(true);
    };
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="cards-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <Card key={item}>
              <CardContent>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </CardContent>
            </Card>
          ))}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className={classes.paper}
        >
          {selectedCharacter ? (
            <Card>
              <CardHeader title={selectedCharacter.name} />
              <CardMedia
                image={selectedCharacter.image}
                title={selectedCharacter.name}
                style={{ paddingTop: "56.25%" }}
              />
            </Card>
          ) : (
            <div>No has seleccionado ningun character</div>
          )}
        </div>
      </Modal>
      <div className="cards-grid">
        {characters.map((item: Character) => (
          <Card key={item.id} onClick={() => selectCharacter(item)}>
            <CardHeader title={item.name.substr(0, 12)} />
            <CardMedia
              image={item.image}
              title={item.name}
              style={{ paddingTop: "56.25%" }}
            />
          </Card>
        ))}
      </div>
    </Layout>
  );
}
