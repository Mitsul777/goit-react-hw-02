const Feedback = ({clicks, totalClicks, positivePercentage}) => {
    return (
        <div>
            <p>Good: {clicks.good}</p>
            <p>Neutral: {clicks.neutral}</p>
            <p>Bad: {clicks.bad}</p>
            <p>Total: {totalClicks}</p>
            <p>Positive: {positivePercentage}%</p>
        </div>
    )
}
export default Feedback