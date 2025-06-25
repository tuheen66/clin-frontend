import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import CaseUse from "./components/CaseUse/CaseUse";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Solutions from "./components/Solutions/Solutions";
import SolutionsInAction from "./components/SolutionsInAction/SolutionsInAction";
import Technology from "./components/Technology/Technology";

function App() {
  return (
    <div>
      <Navbar />

      <section id="about">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="features">
        <Solutions />
      </section>

      <section id="solutions-in-action">
        <SolutionsInAction />
      </section>

      <section id="technology">
        <Technology />
      </section>

      <section id="benefits">
        <Benefits />
      </section>

      <section id="case-use">
        <CaseUse />
      </section>

      <section>
        <GetStarted />
      </section>
    </div>
  );
}

export default App;
