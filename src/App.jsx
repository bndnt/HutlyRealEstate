import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Purpose from "./components/Purpose/Purpose";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import Start from "./components/Start/Start";

function App() {
  return (
    <div className="page">
      <Navigation />
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Purpose />
        </section>
        <section>
          <Reviews />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <Start />
        </section>
      </main>
    </div>
  );
}

export default App;
