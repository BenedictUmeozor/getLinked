import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { v4 as uuidv4 } from "uuid";
import menuBar from "../../assets/menubar.svg";
import closeBtn from "../../assets/close.svg";
import { useState } from "react";
import Image from "../Image";

const links = [
  {
    id: uuidv4(),
    name: "Timeline",
    path: "/",
  },
  {
    id: uuidv4(),
    name: "Overview",
    path: "/",
  },
  {
    id: uuidv4(),
    name: "FAQs",
    path: "/",
  },
  {
    id: uuidv4(),
    name: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <Link to="/" className={styles.logo}>
            <h1>
              get<span>linked</span>
            </h1>
          </Link>
          <nav className={`${open && styles.open}`}>
            <ul>
              {links.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} onClick={() => setOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link onClick={() => setOpen(false)} to="/register">
              <button>Register</button>
            </Link>
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
