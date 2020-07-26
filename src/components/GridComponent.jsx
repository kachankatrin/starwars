import React from "react";
import Loader from "../components/Loader";
import SingleCard from "../components/SingleCard";
import { splitId } from "../utils";

export default function GridComponent(props) {
  return !props.loading ? (
    props.currentData && props.currentData.length ? (
      <ul className="starwarsData-grid">
        {props.currentData.map((item) => (
          <SingleCard
            entity={item}
            entityCategory={props.entityCategory}
            renderEntity={props.renderEntity}
            renderTitle={props.renderTitle}
            clickHandler={() => {
              props.history.push(
                `/${props.entityCategory}/${splitId(item.url)}`
              );
            }}
          />
        ))}
      </ul>
    ) : (
      `no ${props.entityCategory}`
    )
  ) : (
    <Loader />
  );
}
