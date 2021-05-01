import React from "react";
import {
    Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";

const history = createBrowserHistory();

const App = () => {
    return (
        <React.StrictMode>
            <Router history={history}>
                <div className="app__container">
                    <Switch>
                        <Route exact path="/">
                            <Pokedex />
                        </Route>

                        <Route exact path="/:pokemonId">
                            <Pokemon />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </React.StrictMode>
    );
};

export default App;