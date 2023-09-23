import styles from "./register.module.scss";
import img from "../../assets/sitting-man.svg";
import man from "../../assets/man.png";
import woman from "../../assets/woman.png";
import Image from "../../components/Image";

export default function Register() {
  return (
    <section className={styles.register}>
      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
          <Image src={img} alt="img" />
        </div>
        <div className={styles.right}>
          <h2>Register</h2>
          <div className={styles.movement}>
            <p>Be part of this movement!</p>
            <div className={styles.images}>
              <Image src={man} alt="image" />
              <Image src={woman} alt="image" />
            </div>
          </div>
          <h3>CREATE YOUR ACCOUNT</h3>
          <form>
            <div className={styles.field}>
              <p>
                <label>Team's name</label>
                <input type="text" placeholder="Enter the name of your group" />
              </p>
              <p>
                <label>Phone</label>
                <input type="text" placeholder="Enter your phone number" />
              </p>
            </div>
            <div className={styles.field}>
              <p>
                <label>Email</label>
                <input type="text" placeholder="Enter your email address" />
              </p>
              <p>
                <label>Project topic</label>
                <input
                  type="text"
                  placeholder="What is your group project topic"
                />
              </p>
            </div>
            <div className={styles.field}>
              <p>
                <label>Category</label>
                <select className={styles.select}>
                  <option value="Select your category">
                    Select your category
                  </option>
                </select>
              </p>
              <p>
                <label>Group size</label>
                <select className={styles.select}>
                  <option value="Select your category">Select</option>
                </select>
              </p>
            </div>
            <div className={styles.review}>
              <p>Please review your registration details before submitting</p>
              <div className={styles.check}>
                <input type="checkbox" />
                <p>
                  I agreed with the event terms and conditions and privacy
                  policy
                </p>
              </div>
            </div>
            <button>Register now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
