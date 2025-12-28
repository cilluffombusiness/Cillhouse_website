import React from 'react';
import { Translation } from '../types';
import { Star, Quote } from 'lucide-react';

interface ReviewsProps {
  t: Translation;
}

const Reviews: React.FC<ReviewsProps> = ({ t }) => {
  return (
    <section id="reviews" className="py-24 bg-primary-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-bold text-center mb-16">{t.reviews.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.items.map((review) => (
            <div key={review.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl relative border border-white/10 hover:bg-white/15 transition-colors">
              <Quote className="absolute top-6 left-6 text-primary-400 opacity-30" size={48} />
              
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-lg text-gray-100 mb-6 italic leading-relaxed">"{review.text}"</p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center font-bold text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{review.author}</div>
                  <div className="text-xs text-primary-200 uppercase tracking-wider">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;