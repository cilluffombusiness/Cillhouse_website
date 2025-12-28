export type Language = 'it' | 'en' | 'es' | 'fr';

export interface Room {
  id: string;
  title: string;
  description: string;
  features: string[];
  images: string[];
  maxGuests: number;
}

export interface Review {
  id: string;
  text: string;
  author: string;
  date: string;
  rating: number;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    rooms: string;
    services: string;
    reviews: string;
    location: string;
    book: string;
  };
  hero: {
    title: string;
    subtitle: string;
    location: string;
    cta: string;
  };
  about: {
    title: string;
    feature1: string;
    feature2: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  rooms: {
    title: string;
    subtitle: string;
    items: Room[];
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  host: {
    title: string;
    name: string;
    bio: string;
    whatsapp: string;
  };
  platforms: {
    title: string;
    subtitle: string;
    airbnb: string;
    booking: string;
  };
  reviews: {
    title: string;
    items: Review[];
  };
  location: {
    title: string;
    subtitle: string;
    description: string;
    distancesTitle: string;
    points: {
      port: string;
      center: string;
      shopping: string;
      cathedral: string;
      erice: string;
      egadi: string;
      beach: string;
    };
  };
  footer: {
    desc: string;
    privacy: string;
    cookie: string;
  };
}