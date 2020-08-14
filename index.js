// Imports
import React from "react";
import ReactDOM from "react-dom";
// Components
import Title from "./components/Title";

// Styles

// Main container
function App() {
    // Render
    return (
        <div>
            <Title />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
