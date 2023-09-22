import styles from "./hero.module.scss";
import underline from "../../assets/underline.png";
import title from "../../assets/Title.png";
import img from "../../assets/man-wearing-smart (1).svg";
import star from "../../assets/star.svg";
import ball from "../../assets/ball.svg";
import radial from "../../assets/radial.png";
import Image from "../Image";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.container}`}>
          <div className={styles.heading}>
            <Image className={styles.star} src={star} alt="star" />
            <h2>Igniting a Revolution in HR Innovation</h2>
            <Image src={underline} className={styles.underline} alt="image" />
          </div>
          <div className={styles.section}>
            <div className={styles.left}>
              <Image className={styles.radial} src={radial} alt="image" />
              <div className={styles.imageOne}>
                <Image src={title} alt="title" />
              </div>
              <p>
                Participate in getlinked tech Hackathon{" "}
                <br className={styles.brMobile} /> 2023 stand
                <br className={styles.br} /> a chance to win a Big prize
              </p>
              <button>Register</button>
              <div className={styles.countdown}>
                <div className={styles.zero}>
                  00
                  <span>H</span>
                </div>
                <div className={styles.zero}>
                  00
                  <span>M</span>
                </div>
                <div className={styles.zero}>
                  00
                  <span>S</span>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <Image src={img} className={styles.imageOne} alt="man with glasses" />
              <Image src={ball} alt="ball" className={styles.ball} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
