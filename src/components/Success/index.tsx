import styles from "./success.module.scss";
import successImg from "../../assets/congratulation.png";
import wink from "../../assets/wink.png";
import Image from "../Image";

type PropTypes = {
  onClose: () => void;
  text?: string;
};

export default function SuccessAlert({ onClose, text }: PropTypes) {
  return (
    <section className={styles.success}>
      <div className={`container ${styles.container}`}>
        <div className={styles.image}>
          <Image src={successImg} alt="image" />
        </div>
        {!text ? (
          <h2>
            Congratulations <br /> you have successfully{" "}
            <br className={styles.br} />
            Registered!
          </h2>
        ) : (
          <h2>{text}</h2>
        )}
        {!text && (
          <>
            <p>Yes it was easy and you did it!</p>
            <p className={styles.winkText}>
              Check out your next step <img src={wink} alt="wink" />
            </p>
          </>
        )}
        <button onClick={onClose}>Back</button>
      </div>
    </section>
  );
}
