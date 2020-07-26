import React from "react";
import { Card } from "react-bootstrap";
import { splitId } from "../utils";
import { Link } from "react-router-dom";

export default function SingleCard(props) {
  const {
    entity: { url },
    clickHandler,
    renderEntity,
    renderTitle,
    entityCategory,
  } = props;
  const id = splitId(url);
  
  return (
    <Card
      bg="secondary"
      key="1"
      text="white"
      style={{ width: "18rem" }}
      className="mb-2"
      onClick={clickHandler}
    >
      <Card.Header>{renderTitle(props.entity)}</Card.Header>
      <Card.Body>
        <Card.Text>{renderEntity(props.entity)}</Card.Text>
      </Card.Body>
      <Link to={`/${entityCategory}/${id}`}>Details</Link>
    </Card>
  );
}
