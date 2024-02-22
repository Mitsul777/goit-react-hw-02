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

    return (
        <>
            <Description />
            <Options clicks={clicks} setClicks={setClicks}  />
            <Feedback clicks={clicks} />
        </>
    );
};
export default App
