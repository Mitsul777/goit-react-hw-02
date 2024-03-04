const Feedback = ({feedback, totalFeedback, positiveFeedback }) => {
    return (
        <div>
            <p>Good:{feedback.good}</p>
            <p>Neutral:{feedback.neutral}</p>
            <p>Bad:{feedback.bad}</p>
            <p>Total:{totalFeedback.total}</p>
            <p>Positive:{positiveFeedback}%</p>
        </div>
    )
}
export default Feedback