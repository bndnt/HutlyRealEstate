import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Purpose from "./components/Purpose/Purpose";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";
import Start from "./components/Start/Start";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  AOS.refresh();
  return (
    <div className="page">
      <Navigation />
      <main>
        <section data-aos="fade-up" data-aos-duration="900">
          <Hero />
        </section>
        <section data-aos="fade-up" data-aos-duration="900">
          <Purpose />
        </section>
        <section data-aos="fade-up" data-aos-duration="900">
          <Reviews />
        </section>
        <section data-aos="fade-up" data-aos-duration="900">
          <Services />
        </section>
        <section data-aos="fade-up" data-aos-duration="900">
          <Start />
        </section>
      </main>
    </div>
  );
}

export default App;
