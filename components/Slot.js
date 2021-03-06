// Imports
import React, { useState } from "react";
import styles from "../stylesheet.css";
// Images
import BlankIcon from "./BlankIcon";
import CircleIcon from "./CircleIcon";
import CrossIcon from "./CrossIcon";

// Individual TTT slot (button)
function Slot(props) {
    // States
    const [mark, setMark] = useState();

    // Render
    return (
        <div>
            <button>
                <BlankIcon />
            </button>
        </div>
    );
}

export default Slot;
