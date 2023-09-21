import styles from "./app.module.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
    </main>
  );
}

export default App;
