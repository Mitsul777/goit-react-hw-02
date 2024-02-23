const Options = ({updateFeedback }) => {
    return (

        <div>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            <button onClick={() => updateFeedback("Reset")}>Reset</button>
        </div>
    )
}
export default Options