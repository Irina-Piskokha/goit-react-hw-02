import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedBack }) => {
  return (
    <div className={s.wrapper}>
      <button
        type="button"
        className={s.btn}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={s.btn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={s.btn}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" className={s.btn} onClick={resetFeedBack}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
