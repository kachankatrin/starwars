import React from "react";
import { Card } from "react-bootstrap";

export default function SingleCard(props) {
  return (
    <div>
      <Card
        bg="secondary"
        key="1"
        text="white"
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>{props.name}</Card.Header>
        <Card.Body>
          <Card.Title>{props.name} </Card.Title>
          {props.people ? (
            <Card.Text>
              <ul>
                <li>Eyecolor: {props.eye_color}</li>
                <li> Skincolor: {props.skin_color}</li>
                <li>Haircolor: {props.hair_color}</li>
                <li> Gender: {props.gender}</li>
              </ul>
            </Card.Text>
          ) : 
          props.planets ? (<Card.Text>
            <ul>
              <li>Climate: {props.climate}</li>
              <li>Terrain: {props.terrain}</li>
              <li>Gravity: {props.gravity}</li>
              <li>Diameter: {props.diameter}</li>
            </ul>
          </Card.Text>)
         : props.films ? (
            <Card.Text>
            <ul>
              <li>Episode: {props.episode_id}</li>
              <li>Producer: {props.producer}</li>
              <li>Release: {props.release_date}</li>
              <li>Director: {props.director}</li>
            </ul>
          </Card.Text>
          )
          : null}
        </Card.Body>
      </Card>
    </div>
  );
}


// 
