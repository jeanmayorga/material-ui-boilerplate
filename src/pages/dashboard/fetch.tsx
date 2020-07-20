import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, CardHeader } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { Layout } from "../../components/Layout";

import "../../styles/Dashboard.scss";

interface Character {
  id: number;
  name: string;
  image: string;
  type: string;
}

export function DashboardFetch() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<Character[]>([]);

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
      <div className="cards-grid">
        {characters.map((item) => (
          <Card key={item.id}>
            <CardHeader title={item.name} />
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
