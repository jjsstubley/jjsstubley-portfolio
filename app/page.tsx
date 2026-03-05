import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { HistorySection } from "./components/HistorySection";
import { WorkSection } from "./components/WorkSection";
import { Skills } from "./components/Skills";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { ScrollSpyHash } from "./components/ScrollSpyHash";

export default function Home() {
  return (
    <>
      <ScrollSpyHash />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <HistorySection />
        <WorkSection />
        <Skills />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
