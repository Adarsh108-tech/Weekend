import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Prizes from "./components/Prizes";
import Register from "./components/Register";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Particles />
      <Navbar />
      <ScrollReveal animation="fade" duration={1000}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal animation="slide-up" duration={800}>
        <About />
      </ScrollReveal>
      <ScrollReveal animation="slide-up" duration={800}>
        <Events />
      </ScrollReveal>
      <Prizes />
      <Register />
      <ScrollReveal animation="fade" duration={600}>
        <Footer />
      </ScrollReveal>
    </>
  );
}
