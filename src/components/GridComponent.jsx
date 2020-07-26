import React from "react";
import Loader from "../components/Loader";
import SingleCard from "../components/SingleCard";
import { splitId } from "../utils";
export default function GridComponent(props) {
  return !props.loading ? (
    props.currenteData.length ? (
      <ul className="starwarsData-grid">
        {props.currenteData.map((item) => (
          <SingleCard
            people={props.people}
            entety={item}
            planets={props.planets}
            films={props.films}
            entetyCategory={props.entetyCategory}
            ClickHandler={() => {
              props.history.push(
                `/${props.entetyCategory}/${splitId(item.url)}`
              );
            }}
          />
        ))}
      </ul>
    ) : (
      "no people"
    )
  ) : (
    <Loader />
  );
}
