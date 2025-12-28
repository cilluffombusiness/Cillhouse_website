import React from 'react';
import { Translation } from '../types';

interface BookingPlatformsProps {
  t: Translation;
}

const BookingPlatforms: React.FC<BookingPlatformsProps> = ({ t }) => {
  return (
    <section id="booking" className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">{t.platforms.title}</h2>
        <p className="text-primary-100 mb-12 text-lg md:text-xl opacity-80">{t.platforms.subtitle}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8">
          <a 
            href="https://www.airbnb.it/h/cillhouse" 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 bg-[#FF5A5F] text-white py-6 rounded-2xl font-bold text-xl hover:bg-[#e04a4f] transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-1"
          >
            <span className="text-2xl">A</span>
            {t.platforms.airbnb}
          </a>
          
          <a 
            href="https://www.booking.com/hotel/it/cill-house.it.html" 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 bg-[#003580] text-white py-6 rounded-2xl font-bold text-xl hover:bg-[#002b66] transition-all shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-1"
          >
             <span className="text-2xl font-serif">B.</span>
            {t.platforms.booking}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingPlatforms;