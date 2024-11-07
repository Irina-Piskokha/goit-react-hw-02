import "../index.css";
import Descriptions from "../components/Description/Description";
import Options from "../components/Options/Options";
import Feedback from "../components/Feedback/Feedback";
import Notification from "../components/Notification/Notification";
import { useEffect, useState } from "react";

function App() {
  // const [option, setOption] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  const [option, setOption] = useState(() => {
    const saveOption = window.localStorage.getItem("option");
    if (saveOption !== null) {
      return JSON.parse(saveOption);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    // if (feedbackType === "good") {
    //   setOption((prev) => ({ ...prev, good: prev.good + 1 }));
    // }
    // if (feedbackType === "neutral") {
    //   setOption((prev) => ({ ...prev, neutral: prev.neutral + 1 }));
    // }
    // if (feedbackType === "bad") {
    //   setOption((prev) => ({ ...prev, bad: prev.bad + 1 }));
    // }
    setOption((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const totalFeedback = option.good + option.bad + option.neutral;
  const positiveFeedback = Math.round(
    ((option.good + option.neutral) / totalFeedback) * 100
  );

  const resetFeedBack = () => {
    setOption({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem("option", JSON.stringify(option));
  }, [option]);

  return (
    <>
      <Descriptions />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedBack={resetFeedBack}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={option.good}
          bad={option.bad}
          neutral={option.neutral}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
