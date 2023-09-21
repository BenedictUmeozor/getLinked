import styles from "./header.module.scss";
import logo from "../../assets/logo.svg";
import { v4 as uuidv4 } from "uuid";

const links = [
  {
    id: uuidv4(),
    name: "Timeline",
    path: "#timeline",
  },
  {
    id: uuidv4(),
    name: "Overview",
    path: "#overview",
  },
  {
    id: uuidv4(),
    name: "FAQs",
    path: "#faqs",
  },
  {
    id: uuidv4(),
    name: "Contact",
    path: "#contact",
  },
];

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <a href="#">
          <img src={logo} alt="GetLinked logo" />
        </a>
        <nav className={styles.nav}>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
          <button>Register</button>
        </nav>
      </header>
    </>
  );
}
