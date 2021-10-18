import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/global.css";
import Header from "./components/module/Header/Header";
import { Exception } from "./components/views/Exception/Exception";
import { Home } from "./components/views/Home/Home";
import { Footer } from "./components/module/Footer/Footer";
import { Location } from "./components/views/Location/Location";
import React from "react";
import { DaoLocation } from "./types/DaoLocation";
import { Dbal } from "./model/Dbal";
import { About } from "./components/views/About/About";
import { ErrorBoundary } from "./ErrorBoundary";

type State = {
  locations: DaoLocation[];
  locationSelected?: DaoLocation;
  isLoading: boolean;
  error?: string;
};
export default class App extends React.Component<{}, State> {
  state: State = {
    locations: [],
    locationSelected: undefined,
    isLoading: true,
    error: undefined,
  };

  componentDidMount() {
    new Dbal()
      .getLocations()
      .then((loc) => {
        this.setState({
          locations: loc,
          isLoading: false,
        });
      })
      .catch((err) =>
        this.setState({
          isLoading: false,
          error: err,
        })
      );
  }

  render() {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home locations={this.state.locations}></Home>
            </Route>
            <Route exact path="/location">
              {!this.state.isLoading ? (
                <Location locations={this.state.locations}></Location>
              ) : null}
            </Route>
            <Route exact path="/about" component={About} />
            <Route>
              <Exception
                code={404}
                error={"Oups! La page que vous demandez n'éxiste pas."}
              ></Exception>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}
