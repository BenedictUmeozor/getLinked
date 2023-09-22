import styles from "./bigidea.module.scss";
import bigIdeaImg from "../../assets/bulb.svg";
import star from "../../assets/purple-star.svg";
import Image from "../Image";

export default function BigIdea() {
  return (
    <>
      <section className={styles.bigidea}>
        <div className={`container ${styles.container}`}>
          <div className={styles.left}>
            <Image src={bigIdeaImg} className={styles.img} alt="Big idea" />
          </div>
          <div className={styles.right}>
            <div className={styles.heading}>
              <div className={styles.text}>
                <h2>Introduction to getlinked</h2>
                <h3>techHackathon 1.0</h3>
              </div>
              <Image src={star} alt="star" className={styles.star} />
            </div>
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
