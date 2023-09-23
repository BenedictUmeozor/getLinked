import { Link } from "react-router-dom";
import styles from "./footer.module.scss";
import x from "../../assets/x.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import map from "../../assets/map.svg";
import phone from "../../assets/phone.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.first}>
            <div>
              <Link to="/">
                <h2>
                  get<span>linked</span>
                </h2>
              </Link>
              <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div>
              <p>
                <Link to="/">Terms of Use</Link> <span>|</span>{" "}
                <Link to="/">Privacy Policy</Link>
              </p>
            </div>
          </div>
          <div className={styles.second}>
            <h2>Useful links</h2>
            <ul>
              <li>
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/">Timeline</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li className={styles.li}>
                <p>Follow us</p>{" "}
                <div className={styles.socials}>
                  <div>
                    <img src={instagram} alt="icon" />
                  </div>
                  <div>
                    <img src={x} alt="icon" />
                  </div>
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Vector"
                        d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                  </div>
                  <div>
                    <img src={linkedin} alt="icon" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.third}>
            <h2>Contact us</h2>
            <ul>
              <li>
                <img src={phone} alt="icon" />
                <span>+234 6707653444</span>
              </li>
              <li>
                <img src={map} alt="icon" />
                <span>27,Alara Street Yaba 100012 Lagos State</span>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.copyright}>
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </footer>
  );
}
