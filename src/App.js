import React from "react";
import "./App.css";
import People from "./containers/People";
import Films from "./containers/Films";
import Vehicles from "./containers/Vehicles";
import Planets from "./containers/Planets";
import Species from "./containers/Species";
import Starships from "./containers/Starships";
import Main from "./containers/Main";
import Navigation from "./components/Navbar.jsx";
import {Switch, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import EntetyInfo from "./containers/EntetyInfo.jsx"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation>
          <Nav.Link href="/">Main</Nav.Link>
          <Nav.Link href="/people">People</Nav.Link>
          <Nav.Link href="/planets">Planets</Nav.Link>
          <Nav.Link href="/films">Films</Nav.Link>
          <Nav.Link href="/vehicles">Vehicles</Nav.Link>
          <Nav.Link href="/species">Species</Nav.Link>
          <Nav.Link href="/starships">Starships</Nav.Link>
        </Navigation>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/people/" exact component={People} />
          <Route path="/:entetyCategory/:id" component={EntetyInfo} />
          <Route path="/planets/" exact component={Planets} />
          <Route path="/films/" exact component={Films} />
          <Route path="/vehicles/" exact component={Vehicles} />
          <Route path="/species/" exact component={Species} />
          <Route path="/starships/" exact component={Starships} />

        </Switch>
      </div>
    );
  }
}
export default (App);
