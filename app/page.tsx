import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar"
import Steps from "./components/Steps";

export default function Home() {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <Intro />
      <Steps />
    </div>
    
    </>
  );
}
