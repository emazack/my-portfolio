import '../styles/index.scss';

import Header from '@/components/Sections/Header/Header';
import Hero from '@/components/Sections/Hero/Hero';
import Projects from '@/components/Sections/Projects/Projects';
import Contact from '@/components/Sections/Contact/Contact';
import Footer from '@/components/Sections/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
