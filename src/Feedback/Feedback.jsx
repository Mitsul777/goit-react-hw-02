const Feedback = ({feedback, totalFeedback }) => {
    return (
        <div>
            <p>Good:{feedback.good}</p>
            <p>Neutral:{feedback.neutral}</p>
            <p>Bad:{feedback.bad}</p>
            <p>Total:{totalFeedback.total}</p>
            {/*<p>Positive</p>*/}
        </div>
    )
}
export default Feedback