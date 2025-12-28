import React, { useState } from 'react';
import { Translation, Room } from '../types';
import { Users, Check, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface RoomsProps {
  t: Translation;
}

const RoomCard: React.FC<{ room: Room }> = ({ room }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (room.images.length > 1) {
      setCurrentImgIndex((prev) => (prev + 1) % room.images.length);
    }
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (room.images.length > 1) {
      setCurrentImgIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors z-10 pointer-events-none" />
        
        {/* Image */}
        <img 
          src={room.images[currentImgIndex]} 
          alt={room.title}
          className="w-full h-full object-cover transform transition-transform duration-700"
        />

        {/* Navigation Arrows (Only if multiple images) */}
        {room.images.length > 1 && (
          <>
            <button 
              onClick={prevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
              {room.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full shadow-sm ${idx === currentImgIndex ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Max Guests Badge */}
        {room.maxGuests > 0 && (
          <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 text-sm font-semibold text-primary-800 shadow-sm">
            <Users size={14} />
            <span>Max {room.maxGuests}</span>
          </div>
        )}
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{room.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">{room.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {room.features.map((feature, idx) => (
            <span 
              key={idx} 
              className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
            >
              <Check size={12} className="text-primary-600" />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Rooms: React.FC<RoomsProps> = ({ t }) => {
  return (
    <section id="rooms" className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">{t.rooms.title}</h2>
          <p className="text-xl text-gray-600">{t.rooms.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.rooms.items.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;