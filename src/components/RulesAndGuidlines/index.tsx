import styles from "./rules.module.scss";
import svg from "../../assets/woman-sitting.svg";
import radial from "../../assets/radial.png";
import Image from "../Image";

export default function RulesAndGuidelines() {
  return (
    <>
      <section className={styles.rules}>
        <div className={`container ${styles.container}`}>
          <Image src={radial} alt="radial" className={styles.radialOne} />
          <Image src={radial} alt="radial" className={styles.radialTwo} />
          <div className={styles.left}>
            <Image src={svg} alt="woman" className={styles.svg} />
          </div>
          <div className={styles.right}>
            <h2>
              Rules and <br /> <span>Guidelines</span>
            </h2>
            <p className={styles.text}>
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
