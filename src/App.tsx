import styles from "./app.module.scss";
import BigIdea from "./components/BigIdea";
import Criteria from "./components/Criteria";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RulesAndGuidelines from "./components/RulesAndGuidlines";

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <BigIdea />
      <RulesAndGuidelines />
      <Criteria />
      <FAQ />
    </main>
  );
}

export default App;
