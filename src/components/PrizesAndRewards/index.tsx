import styles from "./prizes.module.scss";
import trophyImg from "../../assets/trophy.png";
import rewardsImg from "../../assets/Rewards.png";
import Image from "../Image";

export default function PrizesAndRewards() {
  return (
    <section className={styles.prizes}>
      <div className="container">
        <div className={styles.heading}>
          <h2>
            Prizes and
            <br /> <span>Rewards</span>
          </h2>
          <p>
            Highlight of the prices or reward for winners and for participant
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <Image src={trophyImg} alt="trophy" className={styles.trophyImg} />
          </div>
          <div className={styles.right}>
            <Image
              src={rewardsImg}
              alt="trophy"
              className={styles.rewardsImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
