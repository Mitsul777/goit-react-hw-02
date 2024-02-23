import {useState} from "react";
import Description from "./components/description/Description.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Options from "./components/options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";


const App = () => {
    const [clicks, setClicks] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    const [totalFeedback, settotalFeedback] = useState(false);

    const updateFeedback = feedbackType => {
        setClicks(prevState => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1
        }));
        settotalFeedback(true);
    }

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback}  />
            {totalFeedback ? <Feedback clicks={clicks} /> : <Notification/>}
        </>
    );
};
export default App
