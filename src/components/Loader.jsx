import React from "react";
import {Spinner} from "react-bootstrap";

export default function Loader() {
  return (
    <div>
      <Spinner animation="grow" variant="secondary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
