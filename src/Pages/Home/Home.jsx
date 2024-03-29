import SocialMedia from '../../Components/SocialMedia/SocialMedia'
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Project from '../../Components/Project/Project';
import Contact from '../../Components/Contact/Contact';
import MouseEffect from '../../Components/MouseEffect/MouseEffect';

function Home() {
  return (
    <main>
      <SocialMedia />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <MouseEffect />
    </main>
  )
}

export default Home;
