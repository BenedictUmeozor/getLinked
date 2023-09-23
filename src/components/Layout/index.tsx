import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import Header from "../Header";

export default function Layout() {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
    </main>
  );
}
