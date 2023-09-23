import BigIdea from "./components/BigIdea";
import Criteria from "./components/Criteria";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PartnersAndSponsors from "./components/PartnersAndSponsors";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PrizesAndRewards from "./components/PrizesAndRewards";
import RulesAndGuidelines from "./components/RulesAndGuidlines";
import Timeline from "./components/Timeline";

function App() {
  return (
    <main>
      <Hero />
      <BigIdea />
      <RulesAndGuidelines />
      <Criteria />
      <FAQ />
      <Timeline />
      <PrizesAndRewards />
      <PartnersAndSponsors />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}

export default App;
