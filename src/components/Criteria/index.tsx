import styles from "./criteria.module.scss";
import svg from "../../assets/criteria.svg";
import radial from "../../assets/radial.png";
import Image from "../Image";

const attributes = [
  {
    id: "1",
    point: "Innovation and Creativity",
    desc: " Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
  },
  {
    id: "2",
    point: "Functionality",
    desc: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    id: "3",
    point: "Impact and Relevance",
    desc: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    id: "4",
    point: "Technical Complexity",
    desc: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    id: "5",
    point: "Adherence to Hackathon Rules",
    desc: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];

export default function Criteria() {
  return (
    <>
      <section className={styles.criteria}>
        <div className={`container ${styles.container}`}>
          <Image src={radial} alt="radial" className={styles.radialOne} />
          <Image src={radial} alt="radial" className={styles.radialTwo} />
          <div className={styles.left}>
            <Image src={svg} alt="criteria" className={styles.svg} />
          </div>
          <div className={styles.right}>
            <h2>
              Judging criteria
              <br /> <span>Key attributes</span>
            </h2>
            <div>
              {attributes.map((attribute) => (
                <p key={attribute.id}>
                  <span>{attribute.point}</span> {attribute.desc}
                </p>
              ))}
            </div>
            <div className={styles.button}>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
