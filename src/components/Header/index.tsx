import styles from "./header.module.scss";
import logo from "../../assets/logo.svg";
import { v4 as uuidv4 } from "uuid";
import menuBar from "../../assets/menubar.svg";
import closeBtn from "../../assets/close.svg";
import { useState } from "react";
import Image from "../Image";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <a href="#" className={styles.logo}>
            <Image src={logo} alt="GetLinked logo" />
          </a>
          <nav className={`${open && styles.open}`}>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
            <button>Register</button>
          </nav>
          <div className={styles.menuBar}>
            {open ? (
              <div onClick={() => setOpen(false)}>
                <Image src={closeBtn} alt="menu" />
              </div>
            ) : (
              <div onClick={() => setOpen(true)}>
                {" "}
                <Image src={menuBar} alt="menu" />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
