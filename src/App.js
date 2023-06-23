import "./App.css";
import Palette from "./Palette";
import seedPalettes from "./seedColors";
import PalleteList from "./PalleteList";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import { Component } from "react";
import seedColors from "./seedColors";
class App extends Component {
  findPalette(id) {
    return seedPalettes.find(function (palette) {
      console.log(palette.id === id);
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PalleteList palettes={seedColors} />}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <>
              <Palette palette={this.findPalette(routeProps.match.params.id)} />
              <Footer />
            </>
          )}
        />
        <Route exact render={() => <h1>ERROR 404</h1>} />
      </Switch>
    );
  }
}

export default App;
