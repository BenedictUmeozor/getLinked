import styles from "./privacy.module.scss";
import imgOne from "../../assets/manonpadlock.png";
import imgTwo from "../../assets/Vector.png";
import Image from "../Image";

export default function PrivacyPolicy() {
  return (
    <section className={styles.privacy}>
      <div className="container">
        <div className={styles.heading}>
          <h2>
            Privacy Policy and
            <br />
            <span>Terms</span>
          </h2>
          <span className={styles.span}>
            Last updated on September 12, 2023
          </span>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. <br /> it’s
            our aim to always take of our participant
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.text}>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className={styles.license}>
              <h3>Licensing Policy</h3>
              <p>Here are terms of our Standard License:</p>
              <ul>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="list terms">
                      <circle
                        id="Ellipse 3"
                        cx="8.5"
                        cy="8.5"
                        r="8.5"
                        fill="#2DE100"
                      />
                      <path
                        id="Vector 3"
                        d="M5 8L7 10.5L13.5 6"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>

                  <span>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </span>
                </li>
                <li>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="list terms">
                      <circle
                        id="Ellipse 3"
                        cx="8.5"
                        cy="8.5"
                        r="8.5"
                        fill="#2DE100"
                      />
                      <path
                        id="Vector 3"
                        d="M5 8L7 10.5L13.5 6"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </g>
                  </svg>

                  <span>
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </span>
                </li>
              </ul>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Image src={imgOne} alt="image" className={styles.imgOne} />
            <Image src={imgTwo} alt="image" className={styles.imgTwo} />
          </div>
        </div>
      </div>
    </section>
  );
}
