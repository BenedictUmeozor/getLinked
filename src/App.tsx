import styles from "./app.module.scss";
import BigIdea from "./components/BigIdea";
import Criteria from "./components/Criteria";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RulesAndGuidelines from "./components/RulesAndGuidlines";
import Timeline from "./components/Timeline";

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <BigIdea />
      <RulesAndGuidelines />
      <Criteria />
      <FAQ />
      <Timeline />
    </main>
  );
}

export default App;
