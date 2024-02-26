import {useEffect, useState} from "react";
import Description from "./components/description/Description.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Options from "./components/options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";


const App = () => {
    const savedClicks = JSON.parse(window.localStorage.getItem("saved-clicks"));
    const [clicks, setClicks] = useState(savedClicks || {
        good: 0,
        neutral: 0,
        bad: 0
    });
    const [totalClicks, setTotalClicks] = useState(0);
    const [showReset, setShowReset] = useState(false);
    const [positivePercentage, setPositivePercentage] = useState(0);
    const updateFeedback = feedbackType => {
        setClicks(prevClicks => ({
            ...prevClicks,
            [feedbackType]: prevClicks[feedbackType] + 1
        }));
        setTotalClicks(prevTotalClicks => prevTotalClicks + 1);
        setShowReset(true);
    }

    const resetFeedback = () => {
        setClicks({
            good: 0,
            neutral: 0,
            bad: 0
        });
        setTotalClicks(0);
        setShowReset(false);
        setPositivePercentage(0);
    };

    useEffect(() => {
        if (totalClicks > 0) {
            const positiveCount = clicks.good + clicks.neutral;
            const percentage = Math.round((positiveCount / totalClicks) * 100);
            setPositivePercentage(percentage);
        }
    }, [clicks, totalClicks]);
    useEffect(() => {
        window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
    }, [clicks]);

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} showReset={showReset} />
            {savedClicks ? (<Feedback clicks={clicks} totalClicks={totalClicks} positivePercentage={positivePercentage} />) : (
                <Notification />
            )}        </>
    );
};
export default App
