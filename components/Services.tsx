import React from 'react';
import { Translation } from '../types';
import { Wifi, Coffee, Shirt, Wind, Utensils, Droplets } from 'lucide-react';

interface ServicesProps {
  t: Translation;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const icons = [Coffee, Droplets, Wifi, Wind, Shirt, Utensils];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-8 left-0 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {t.services.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300">
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-4">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;