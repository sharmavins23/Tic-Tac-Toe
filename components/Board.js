// Imports
import React, { useState } from "react";
import Slot from "./Slot";
import styles from "../stylesheet.css";

// Board (container for individual TTT slot buttons)
function Board() {
    // States
    // 0: X's turn
    // 1: O's turn
    // 2: Draw
    const [gameState, setGameState] = useState(0);

    // Callback function to handle changing of gamestate
    function changeState(tableList) {
        if (gameState == 0) setGameState(1);
        else if (gameState == 1) setGameState(0);
    }

    // Helper function to check if gamestate is a win

    // Render
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <Slot />
                    </td>
                    <td>
                        <Slot />
                    </td>
                    <td>
                        <Slot />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Slot />
                    </td>
                    <td>
                        <Slot />
                    </td>
                    <td>
                        <Slot />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Slot />
                    </td>
                    <td>
                        <Slot />
                    </td>
                    <td>
                        <Slot />
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Board;
