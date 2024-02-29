import { useState } from 'react'
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

    const [feedbackGiven, setFeedbackGiven] = useState(false); // Додайте стан для відстеження надання зворотного зв'язку

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

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} />
            <Notification/>
            {feedbackGiven && <Feedback feedback={feedback} totalFeedback={totalFeedback} />}
        </>
    );
}

export default App;

