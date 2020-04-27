import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import Home from "pages/Home";
import WithTheme from "WithTheme";
import Store from "./store";

function App() {
    return (
        <WithTheme>
            <Store>
                <Home />
            </Store>
        </WithTheme>
    );
}

export default App;
