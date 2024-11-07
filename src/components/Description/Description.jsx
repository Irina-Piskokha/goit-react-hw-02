import s from "./Descriptions.module.css";

const Descriptions = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Sip Happens Café</h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Descriptions;
