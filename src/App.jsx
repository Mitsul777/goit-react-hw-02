import { useState, useEffect } from 'react'
import './App.css'
import Feedback from "./Feedback/Feedback.jsx";
import Options from "./Options/Options.jsx";
import Description from "./Description/Description.jsx";
import Notification from "./Notification/Notification.jsx";
function App() {
    const [feedback, setFeedback] = useState(() =>{
        const savedFeedback = window.localStorage.getItem('saved-feedback');
        if (savedFeedback !== null) {
            return savedFeedback;
        }
        return {
            good: 0,
            neutral: 0,
            bad: 0,
            total : 0
        }
    })
    useEffect(() => {
        window.localStorage.setItem('saved-feedback', feedback);
    }, [feedback]);



    const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / feedback.total) * 100)

    const [feedbackGiven, setFeedbackGiven] = useState(false);

    const updateFeedback = (feedbackType) => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
            total: prevFeedback.total + 1 // Use prevFeedback to update total
        }));

        setFeedbackGiven(true);
    };

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
            total: 0
        });
        setFeedbackGiven(false);
    };
    const hasFeedback = feedback.total > 0;

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} hasFeedback={hasFeedback} positiveFeedback={positiveFeedback} />
            {feedbackGiven ? <Feedback feedback={feedback} positiveFeedback={positiveFeedback} /> : <Notification />}
        </>
    );
}

export default App;

