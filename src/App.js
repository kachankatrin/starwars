import React from "react";
import People from "./containers/People";
import Films from "./containers/Films";
import Vehicles from "./containers/Vehicles";
import Planets from "./containers/Planets";
import Species from "./containers/Species";
import Starships from "./containers/Starships";
import Main from "./containers/Main";
import NavigationStarwars from "./components/Navbar.jsx";
import { Switch, Route, NavLink } from "react-router-dom";
import EntityInfo from "./containers/EntityInfo.jsx";

import "./App.css";

export default function App() {
  return (
    <div>
      <NavigationStarwars>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/people">People</NavLink>
        <NavLink to="/planets">Planets</NavLink>
        <NavLink to="/films">Films</NavLink>
        <NavLink to="/vehicles">Vehicles</NavLink>
        <NavLink to="/species">Species</NavLink>
        <NavLink to="/starships">Starships</NavLink>
      </NavigationStarwars>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:entityCategory/:id" component={EntityInfo} />
        <Route path="/people/" exact component={People} />
        <Route path="/planets/" exact component={Planets} />
        <Route path="/films/" exact component={Films} />
        <Route path="/vehicles/" exact component={Vehicles} />
        <Route path="/species/" exact component={Species} />
        <Route path="/starships/" exact component={Starships} />
      </Switch>
    </div>
  );
}
