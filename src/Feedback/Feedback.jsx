const Feedback = ({ feedback, positiveFeedback }) => {
    return (
        <div>
            <p>Good:{feedback.good}</p>
            <p>Neutral:{feedback.neutral}</p>
            <p>Bad:{feedback.bad}</p>
            <p>Total:{feedback.total}</p>
            <p>Positive:{positiveFeedback}%</p>
        </div>
    )
}
export default Feedback