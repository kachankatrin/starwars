import React from "react";
import { Card, Nav } from "react-bootstrap";
import { splitId } from "../utils";

export default function SingleCard(props) {
  console.log(props);
  const {
    entety: {
      name,
      producer,
      director,
      release_date,
      episode_id,
      eye_color,
      skin_color,
      hair_color,
      gender,
      diameter,
      gravity,
      climate,
      terrain,
      title,
      url,
    },
    ClickHandler,
    films,
    planets,
    people,
    entetyCategory,
  } = props;
  const id = splitId(url);
  return (
    <Card
      bg="secondary"
      key="1"
      text="white"
      style={{ width: "18rem" }}
      className="mb-2"
      onClick={ClickHandler}
    >
      <Card.Header>{name ? name : title}</Card.Header>
      <Card.Body>
        <Card.Title>{name} </Card.Title>
        {people ? (
          <Card.Text>
            <ul>
              <li>Eyecolor: {eye_color}</li>
              <li> Skincolor: {skin_color}</li>
              <li>Haircolor: {hair_color}</li>
              <li> Gender: {gender}</li>
            </ul>
          </Card.Text>
        ) : planets ? (
          <Card.Text>
            <ul>
              <li>Climate: {climate}</li>
              <li>Terrain: {terrain}</li>
              <li>Gravity: {gravity}</li>
              <li>Diameter: {diameter}</li>
            </ul>
          </Card.Text>
        ) : films ? (
          <Card.Text>
            <ul>
              <li>Episode: {episode_id}</li>
              <li>Producer: {producer}</li>
              <li>Release: {release_date}</li>
              <li>Director: {director}</li>
            </ul>
          </Card.Text>
        ) : null}
      </Card.Body>
      <Nav.Link href={`/${entetyCategory}/${id}`}>
        view info about hero
      </Nav.Link>
    </Card>
  );
}
