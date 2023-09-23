import styles from "./contact.module.scss";
import x from "../../assets/x.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
          <div>
            <h2>Get in touch</h2>
          </div>
          <div>
            <p>
              Contact
              <br />
              Information
            </p>
          </div>
          <div>
            <p>
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </p>
          </div>
          <div>
            <p>Call Us : 07067981819</p>
          </div>
          <div>
            <p>
              we are open from Monday-Friday
              <br />
              08:00am - 05:00pm
            </p>
          </div>
          <div className={styles.socials}>
            <h3>Share on</h3>
            <div className={styles.icons}>
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
          </div>
        </div>
        <div className={styles.right}>
          <h2>Questions or need assistance?</h2>
          <h2>Let us know about it!</h2>
          <form action="#">
            <div>
              <input type="text" placeholder="First Name" />
            </div>
            <div>
              <input type="email" placeholder="Mail" />
            </div>
            <div>
              <textarea placeholder="Message" id="" rows={8}></textarea>
            </div>
            <div className="button">
              <button>Submit</button>
            </div>
          </form>
          <div className={styles.socials}>
            <h3>Share on</h3>
            <div className={styles.icons}>
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
          </div>
          
        </div>
      </div>
    </section>
  );
}
