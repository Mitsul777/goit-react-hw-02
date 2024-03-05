import React from 'react';

const Feedback = ({ feedback, positiveFeedback, totalFeedback }) => {
    return (
        <div>
            <p>Good:{feedback.good}</p>
            <p>Neutral:{feedback.neutral}</p>
            <p>Bad:{feedback.bad}</p>
            <p>Total:{totalFeedback}</p>
            <p>Positive:{positiveFeedback}%</p>
        </div>
    )
}

export default Feedback;