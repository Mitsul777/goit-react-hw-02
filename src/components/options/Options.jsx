
const Options = ({updateFeedback, resetFeedback, showReset }) => {
    return (

        <div>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            {showReset && <button onClick={() => resetFeedback("Reset")}>Reset</button>}
        </div>
    )
}
export default Options