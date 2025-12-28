import React from 'react';
import { Translation } from '../types';
import { MessageCircle } from 'lucide-react';
import { IMAGES } from '../constants';

interface HostProps {
  t: Translation;
}

const Host: React.FC<HostProps> = ({ t }) => {
  return (
    <section id="host" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand-50 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
            <img 
              src={IMAGES.host} 
              alt={t.host.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <span className="text-primary-600 font-bold uppercase text-xs tracking-widest mb-2 block">
              {t.host.title}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.host.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.host.bio}
            </p>
            
            <a 
              href="https://wa.me/393279426593" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1fb355] transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={24} />
              {t.host.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Host;