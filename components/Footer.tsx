import React from 'react';
import { Translation } from '../types';

interface FooterProps {
  t: Translation;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="font-serif text-3xl font-bold mb-6 tracking-tight">Cill House</div>
        
        <div className="space-y-2 mb-8">
            <p className="text-gray-400">Via Badiella 28, 91100 Trapani (TP)</p>
            <p className="text-gray-500 text-sm max-w-md mx-auto">{t.footer.desc}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mb-10 text-xs font-mono text-gray-500 uppercase tracking-widest bg-white/5 py-4 px-6 rounded-full w-fit mx-auto">
            <span>CIN: IT081021C2HZBSJLD8</span>
            <span className="hidden md:block">|</span>
            <span>CIR: 19081021C262025</span>
        </div>
        
        <div className="flex justify-center flex-wrap gap-8 mb-10">
          <a 
            href="https://www.iubenda.com/privacy-policy/34985296" 
            className="text-gray-400 hover:text-primary-400 text-sm transition-colors border-b border-gray-800 pb-1"
            title={t.footer.privacy}
          >
            {t.footer.privacy}
          </a>
          <a 
            href="https://www.iubenda.com/privacy-policy/34985296/cookie-policy" 
            className="text-gray-400 hover:text-primary-400 text-sm transition-colors border-b border-gray-800 pb-1"
            title={t.footer.cookie}
          >
            {t.footer.cookie}
          </a>
        </div>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mb-10"></div>
        
        <p className="text-[10px] text-gray-700 uppercase tracking-[0.2em]">
          Marcello Cilluffo &bull; Trapani Centro Storico
        </p>
      </div>
    </footer>
  );
};

export default Footer;