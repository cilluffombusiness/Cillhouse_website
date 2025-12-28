import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Translation } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Icone bandiere SVG per compatibilità universale
  const flagUrls: Record<Language, string> = {
    it: 'https://flagcdn.com/w40/it.png',
    en: 'https://flagcdn.com/w40/gb.png',
    es: 'https://flagcdn.com/w40/es.png',
    fr: 'https://flagcdn.com/w40/fr.png'
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#rooms', label: t.nav.rooms },
    { href: '#services', label: t.nav.services },
    { href: '#location', label: t.nav.location },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className={`font-elegant text-4xl font-normal tracking-wide transition-colors ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
            Cill House
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className={`text-sm font-medium transition-colors hover:text-primary-500 cursor-pointer ${
                      isScrolled ? 'text-gray-700' : 'text-white/90'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
                  <Globe size={18} />
                  <span className="flex items-center gap-2 uppercase text-sm font-bold">
                    <img src={flagUrls[lang]} alt={lang} className="w-5 h-auto rounded-sm shadow-sm" />
                    <span>{lang}</span>
                  </span>
                </button>
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right border border-gray-100 scale-95 group-hover:scale-100">
                  {(['it', 'en', 'es', 'fr'] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm uppercase hover:bg-gray-50 transition-colors ${
                        lang === l ? 'font-bold text-primary-600 bg-primary-50/50' : 'text-gray-700'
                      }`}
                    >
                      <img src={flagUrls[l]} alt={l} className="w-5 h-auto rounded-sm shadow-sm" />
                      <span>{l === 'en' ? 'English' : l === 'it' ? 'Italiano' : l === 'es' ? 'Español' : 'Français'}</span>
                    </button>
                  ))}
                </div>
              </div>

              <a 
                href="#booking" 
                onClick={(e) => handleScrollToSection(e, '#booking')}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 cursor-pointer ${
                  isScrolled 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-white text-primary-900 hover:bg-gray-100'
                }`}
              >
                {t.nav.book}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
                onClick={() => {
                   const langs: Language[] = ['it', 'en', 'es', 'fr'];
                   const currentIndex = langs.indexOf(lang);
                   const nextIndex = (currentIndex + 1) % langs.length;
                   setLang(langs[nextIndex]);
                }}
                className={`uppercase text-sm font-bold flex items-center gap-2 px-3 py-1.5 rounded-full border border-current ${isScrolled ? 'text-gray-700' : 'text-white'}`}
             >
                <img src={flagUrls[lang]} alt={lang} className="w-5 h-auto rounded-sm" />
                <span>{lang}</span>
             </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-gray-900' : 'text-white'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-gray-800 font-medium text-lg py-2 border-b border-gray-100 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#booking" 
            onClick={(e) => handleScrollToSection(e, '#booking')}
            className="bg-primary-600 text-white text-center py-3 rounded-xl font-bold cursor-pointer"
          >
            {t.nav.book}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;