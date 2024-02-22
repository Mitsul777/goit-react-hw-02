import {useState} from "react";
import Description from "./components/description/Description.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Options from "./components/options/Options.jsx";


const App = () => {
    const [clicks, setClicks] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });
    const updateFeedback = feedbackType => {
        setClicks(prevState => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1
        }));
    }

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} />
            <Feedback clicks={clicks} />
        </>
    );
};
export default App
