import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={s.wrapper}>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      {totalFeedback > 0 && <li className={s.item}>Total: {totalFeedback}</li>}
      {totalFeedback > 0 && (
        <li className={s.item}>Positive: {positiveFeedback}%</li>
      )}
    </ul>
  );
};

export default Feedback;
