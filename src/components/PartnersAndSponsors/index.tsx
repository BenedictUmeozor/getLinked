import styles from "./partners.module.scss";
import imgOne from "../../assets/liberty1.png";
import imgTwo from "../../assets/liberty2.png";
import imgThree from "../../assets/winwise3.png";
import imgFour from "../../assets/wisper4.png";
import imgFive from "../../assets/Paybox.png";
import imgSix from "../../assets/Vizual6.png";
import Image from "../Image";

export default function PartnersAndSponsors() {
  return (
    <section className={styles.partners}>
      <div className="container">
        <div className={styles.heading}>
          <h2>Partners and Sponsors</h2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.one}>
            <Image src={imgOne} alt="image" className={styles.img} />
            <div className={styles.lineOne}></div>
            <div className={styles.lineFour}></div>
          </div>
          <div className={styles.two}>
            <Image src={imgTwo} alt="image" className={styles.img} />
            <div className={styles.lineTwo}></div>
            <div className={styles.lineFour}></div>
          </div>
          <div className={styles.three}>
            <Image src={imgThree} alt="image" className={styles.img} />
            <div className={styles.lineThree}></div>
          </div>
          <div className={styles.four}>
            <Image src={imgFour} alt="image" className={styles.img} />
            <div className={styles.lineFour}></div>
          </div>
          <div className={styles.five}>
            <Image src={imgFive} alt="image" className={styles.img} />
            <div className={styles.lineFour}></div>
          </div>
          <div className={styles.six}>
            <Image src={imgSix} alt="image" className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
}
