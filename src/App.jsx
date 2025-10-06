import "./App.css";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Purpose from "./components/Purpose/Purpose";
import Reviews from "./components/Reviews/Reviews";

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
      </main>
    </div>
  );
}

export default App;
