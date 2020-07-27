import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <div className="center-align">
      <Spinner animation="grow" variant="secondary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
