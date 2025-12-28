import React from 'react';
import { Translation } from '../types';
import { MapPin, Navigation } from 'lucide-react';

interface LocationProps {
  t: Translation;
}

const Location: React.FC<LocationProps> = ({ t }) => {
  const points = [
    { label: "Porto / Ferries", time: t.location.points.port },
    { label: "Corso Italia (Shopping)", time: t.location.points.shopping },
    { label: "Cattedrale San Lorenzo", time: t.location.points.cathedral },
    { label: "Funivia Erice", time: t.location.points.erice },
    { label: "Egadi Islands (Ticket)", time: t.location.points.egadi },
    { label: "Beach (Lido)", time: t.location.points.beach },
  ];

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-2">{t.location.title}</h2>
            <p className="text-xl text-primary-600 mb-6 font-medium">{t.location.subtitle}</p>
            <p className="text-gray-600 mb-8 leading-relaxed">{t.location.description}</p>

            <div className="bg-sand-50 rounded-2xl p-8 shadow-inner border border-sand-100">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Navigation size={20} className="text-primary-600" />
                {t.location.distancesTitle}
              </h3>
              <ul className="space-y-4">
                {points.map((point, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                    <span className="text-gray-700 font-medium">{point.label}</span>
                    <span className="text-primary-700 font-bold text-sm bg-primary-100 px-3 py-1 rounded-full">{point.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.704243190695!2d12.5053605!3d38.0163369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131b3d4c8df0b1f5%3A0x89c0cfec6e3b77e0!2sVia%20Badiella%2C%2028%2C%2091110%20Trapani%20TP%2C%20Italy!5e0!3m2!1sit!2sit!4v1717440000000!5m2!1sit!2sit" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Cill House Location"
            ></iframe>
            <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <a 
                    href="https://maps.app.goo.gl/trapani-cill-house" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-800"
                >
                    <MapPin size={16}/> Open in Maps
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;