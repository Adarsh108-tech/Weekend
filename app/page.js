import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Prizes from "./components/Prizes";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Particles />
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Prizes />
      <Register />
      <Footer />
    </>
  );
}
