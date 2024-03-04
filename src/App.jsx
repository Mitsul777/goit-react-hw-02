import { useState, useEffect } from 'react'
import './App.css'
import Feedback from "./Feedback/Feedback.jsx";
import Options from "./Options/Options.jsx";
import Description from "./Description/Description.jsx";
import Notification from "./Notification/Notification.jsx";
function App() {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const [totalFeedback, setTotalFeedback ] = useState({
        total : 0
    });

    const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback.total) * 100)

    const [feedbackGiven, setFeedbackGiven] = useState(false);

    const updateFeedback = (feedbackType) => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }));

        setTotalFeedback(prevTotalFeedback => ({
            total: prevTotalFeedback.total + 1
        }));

        setFeedbackGiven(true);
    };
    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0
        });
        setTotalFeedback({
            total: 0
        });
        setFeedbackGiven(false);
        };
    const hasFeedback = totalFeedback.total > 0;

    useEffect(() => {
        localStorage.setItem('totalFeedback', JSON.stringify(totalFeedback))
    }, [totalFeedback]);

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback))
    }, [feedback]);



    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} hasFeedback={hasFeedback} positiveFeedback={positiveFeedback} />
            {feedbackGiven ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification />}
        </>
    );
}

export default App;

