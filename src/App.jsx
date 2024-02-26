import {useEffect, useState} from "react";
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
    const [showReset, setShowReset] = useState(false);
    const [totalClicks, setTotalClicks ] = useState(false);
    const [showTotalClicks, setShowTotalClicks] = useState(false);
    const [positivePercentage, setPositivePercentage] = useState(0);
    const updateFeedback = feedbackType => {
        setClicks(prevState => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1
        }));
        setTotalClicks(prevTotalclicks => prevTotalclicks + 1)
        settotalFeedback(true)
        setShowReset(true);
        setShowTotalClicks(true);
    }

    const resetFeedback = () => {
        setClicks({
            good: 0,
            neutral: 0,
            bad: 0,
        })
        setTotalClicks(0)
        settotalFeedback(false)
        setShowReset(false);
        setShowTotalClicks(false);
        setPositivePercentage(0);


    };
    useEffect(() => {
        if (totalFeedback > 0) {
            const positiveCount = clicks.good + clicks.neutral;
            const percentage = Math.round((positiveCount / totalFeedback) * 100);
            setPositivePercentage(percentage);
        }
    }, [clicks, totalFeedback]);

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} showReset={showReset} showTotalClicks={showTotalClicks}  />
            {totalFeedback > 0 ? <Feedback clicks={clicks} totalClicks={totalClicks} positivePercentage={positivePercentage} /> : <Notification />}
        </>
    );
};
export default App
