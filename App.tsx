import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Host from './components/Host';
import BookingPlatforms from './components/BookingPlatforms';
import Location from './components/Location';
import Footer from './components/Footer';
import { TRANSLATIONS } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('it');

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLang') as Language;
    if (savedLang && ['it', 'en', 'es', 'fr'].includes(savedLang)) {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('selectedLang', newLang);
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-primary-100 selection:text-primary-900">
      <Navbar lang={lang} setLang={handleSetLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Rooms t={t} />
        <Services t={t} />
        <Host t={t} />
        <BookingPlatforms t={t} />
        <Location t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default App;