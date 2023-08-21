import styles from "./footerText.module.css"
const FooterText = ({ title, text }) => {
  return (
    <div className={styles.teste}>
      <h4 className={styles.title} >{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default FooterText;
