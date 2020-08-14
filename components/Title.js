// Imports
import React from "react";
// Styles
import styles from "../styles/Title.css";

// Top level page title
function Title() {
    // Render
    return (
        <div>
            <h1>
                <mark class="blue">TIC-</mark>
                <mark class="orange">TAC-</mark>
                <mark class="blue">TOE</mark>
            </h1>

            <p>
                A small React.js tic-tac-toe game created by{" "}
                <a href="https://github.com/sharmavins23/tic-tac-toe">
                    @sharmavins23
                </a>
                .
            </p>
        </div>
    );
}

export default Title;
