import styles from "./footerInput.module.css";

const FooterInput = () => {
  return (
    <div className={styles.teste}>
      <input placeholder="Enter your email" type="text" />
      <button type="button"> Subscribe </button>
    </div>
  );
};

export default FooterInput;