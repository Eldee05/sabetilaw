import { useEffect, useState } from "react";
import { getNews } from "./api";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import NewsSection from "./components/NewsSection";
import Help from "./components/Help";
import Team from "./components/Team";
import Immigration from "./components/Immigration";
import Contact from "./components/Contact";
import Complaint from "./components/Complaint";
import Footer from "./components/Footer";

export default function App() {
  const [news, setNews] = useState({ europe: [], immigration: [] });
  const [newsError, setNewsError] = useState(false);

  useEffect(() => {
    getNews()
      .then(setNews)
      .catch(() => setNewsError(true));
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <NewsSection
          id="alerts"
          band
          title={
            <>
              Crime <span>Briefings</span>: Europe
            </>
          }
          lead="Reading list from primary and specialist sources on organised crime, fraud and trafficking trends across the European Union."
          items={news.europe}
          error={newsError}
        />
        <Help />
        <Team />
        <Immigration items={news.immigration} error={newsError} />
        <Contact />
        <Complaint />
      </main>
      <Footer />
    </>
  );
}
