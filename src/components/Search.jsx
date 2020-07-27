import React from "react";

export default function Search(props) {
  return (
    <div className="center-align">
      <input
        type="search"
        onChange={props.handleInput}
        placeholder="Search..."
      />
    </div>
  );
}
