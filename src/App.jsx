import { useState, useEffect } from 'react';
import './App.css';
import Feedback from "./Feedback/Feedback.jsx";
import Options from "./Options/Options.jsx";
import Description from "./Description/Description.jsx";
import Notification from "./Notification/Notification.jsx";

function App() {
    const [feedback, setFeedback] = useState(() =>{
        const savedFeedback = window.localStorage.getItem('saved-feedback');
        if (savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        }
        return {
            good: 0,
            neutral: 0,
            bad: 0
        };
    });

    useEffect(() => {
        window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
    }, [feedback]);


    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)

    const [feedbackGiven, setFeedbackGiven] = useState(false);

    const updateFeedback = (feedbackType) => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
        setFeedbackGiven(true);
    };

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0
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

