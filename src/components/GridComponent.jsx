import React from "react";
import Loader from "../components/Loader";
import SingleCard from "../components/SingleCard";

export default function GridComponent(props) {
  return !props.loading ? (
    props.currenteData.length ? (
      <ul className="starwarsData-grid">
        {props.currenteData.map((item) => (
          <SingleCard
            name={item.name ? item.name : item.title}
            people={props.people}
            eye_color={item.eye_color}
            skin_color={item.skin_color}
            hair_color={item.hair_color}
            gender={item.gender}
            planets={props.planets}
            climate={item.climate}
            terrain={item.terrain}
            gravity={item.gravity}
            diameter={item.diameter}
            films={props.films}
            episode_id={item.episode_id}
            release_date={item.release_date}
            producer={item.producer}
            director={item.director}
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
