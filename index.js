// Imports
import React from "react";
import ReactDOM from "react-dom";
// Components
import Title from "./components/Title";
import Board from "./components/Board";

// Styles

// Main container
function App() {
    // Render
    return (
        <div>
            <Title />
            <Board />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
