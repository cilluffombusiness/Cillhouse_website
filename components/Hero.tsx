import React, { useState, useEffect } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Translation } from '../types';
import { HERO_IMAGES } from '../constants';

interface HeroProps {
  t: Translation;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          {/* Questo overlay scurisce l'intera immagine per far leggere il testo bianco. Puoi abbassare il /20 a /10 se vuoi più luce */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* Slider Controls */}
      <button 
        onClick={prevImage}
        className="absolute left-4 z-20 text-white/50 hover:text-white transition-colors p-2 hidden md:block"
      >
        <ChevronLeft size={48} />
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-4 z-20 text-white/50 hover:text-white transition-colors p-2 hidden md:block"
      >
        <ChevronRight size={48} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-24 z-20 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 mt-16 flex flex-col items-center">
        {/* 
          PROPRIETÀ DA TESTARE:
          1. bg-black/5 -> Cambia l'opacità dello sfondo (da 0 a 100)
          2. backdrop-blur-[2px] -> Cambia la forza della sfocatura (sm, md, lg o valori precisi come [4px])
          3. border-white/10 -> Cambia la visibilità del bordino bianco
        */}
        <div className="bg-black/5 backdrop-blur-[2px] px-6 py-4 md:px-10 md:py-6 rounded-[2rem] border border-white/10 shadow-lg max-w-fit mx-auto mb-8">
          <h1 className="font-elegant text-6xl md:text-9xl text-white tracking-normal drop-shadow-xl leading-[0.9]">
            {t.hero.title}
          </h1>
          
          <p className="text-lg md:text-2xl text-white font-light max-w-md md:max-w-lg mx-auto leading-tight drop-shadow-md mt-2 md:mt-4">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Elementi esterni al box per non appesantire la visuale */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 shadow-md text-white">
            <MapPin size={18} />
            <span className="text-sm md:text-base font-medium">{t.hero.location}</span>
          </div>
        </div>

        <a 
          href="#booking"
          onClick={handleScrollToBooking}
          className="inline-block bg-white text-primary-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg md:text-xl transition-all transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
        >
          {t.hero.cta}
        </a>
      </div>
      
      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-10 rotate-180 pointer-events-none">
        <svg className="block w-full h-16 md:h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;