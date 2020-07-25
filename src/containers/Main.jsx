import React from "react";
import { Image, Jumbotron, Container } from "react-bootstrap";

class Main extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Welcome to our awesome app! Join to StarWars Universe!</h1>
            <p>
              Star Wars is a science-fiction franchise comprising movies, books,
              comics, video games, toys, and animated shows. It is a fictional
              universe created by George Lucas. The Star Wars story employs
              archetypal motifs common to science fiction, political climax and
              classical mythology, as well as musical motifs of those aspects.
            </p>
            <Image
              src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg"
              fluid
            />
            <p>
              As one of the foremost examples of the space opera subgenre of
              science fiction, Star Wars has become part of mainstream popular
              culture, as well as being one of the highest-grossing series of
              all time. It is currently the second highest-grossing film series
              behind only the Marvel Cinematic Universe.[1] and also the second
              highest-grossing media franchise of all time (with only the
              Japanese franchise Pokémon outranking it)
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Main;
