import {useState} from "react";
const Options = ({ clicks, setClicks }) => {
    const handleClick = (key) => {
        setClicks({
            ...clicks,
            [key]: clicks[key] + 1,
        });
    };

    return (

        <div>
            <button onClick={() => handleClick("good")}>Good</button>
            <button onClick={() => handleClick("neutral")}>Neutral</button>
            <button onClick={() => handleClick("bad")}>Bad</button>
        </div>
    )
}
export default Options