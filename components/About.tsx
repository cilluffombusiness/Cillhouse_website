import React from 'react';
import { Translation } from '../types';
import { Compass, Sun } from 'lucide-react';

interface AboutProps {
  t: Translation;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Trapani, Sicily</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {t.about.title}
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8 text-left">
                <div className="flex items-start gap-4 p-6 bg-sand-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-white rounded-full text-primary-600 shadow-sm">
                    <Compass size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{t.about.feature1}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{t.about.p3}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-primary-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-white rounded-full text-primary-600 shadow-sm">
                    <Sun size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{t.about.feature2}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{t.about.p4}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;