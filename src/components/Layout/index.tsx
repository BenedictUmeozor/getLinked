import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import Header from "../Header";
import axios from "axios";

export default function Layout() {
  axios.defaults.baseURL = "https://backend.getlinked.ai";

  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
    </main>
  );
}
