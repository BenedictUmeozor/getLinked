import styles from "./faq.module.scss";
import svg from "../../assets/man-sitting.svg";
import Image from "../Image";

const faqQuestions = [
  {
    id: 0,
    title: "Can I work on a project I started before the hackathon?",
  },
  {
    id: 1,
    title: "What happens if I need help during the hackathon?",
  },
  {
    id: 2,
    title: "What happens if I don't have an idea for a project?",
  },
  {
    id: 3,
    title: "Can I join a team or do I have to come with one?",
  },
  {
    id: 4,
    title: "What happens after the hackathon ends",
  },
  {
    id: 5,
    title: "Can I work on a project I started before the hackathon?",
  },
];

export default function FAQ() {
  return (
    <>
      <section id="faq" className={styles.faqs}>
        <div className={`container ${styles.container}`}>
          <div className={styles.left}>
            <h2>
              Frequently Ask <br /> <span>Question</span>
            </h2>
            <p>
              We got answers to the questions that you might want to ask about
              <span>getlinked Hackathon 1.0</span>
            </p>
            <div>
              {faqQuestions.map((faq) => (
                <div className={styles.faq} key={faq.id}>
                  <p className={styles.title}>{faq.title}</p>
                  <p className={styles.plus}>+</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <Image className={svg} src={svg} alt="man sitting" />
          </div>
        </div>
      </section>
    </>
  );
}
