import { Translation } from './types';

export const HERO_IMAGES = [
  'https://i.imgur.com/dLwCZ9g.jpeg?q=80&w=1920&auto=format&fit=crop',
  'https://i.imgur.com/7d8DW2G.jpeg?q=80&w=1920&auto=format&fit=crop',
  'https://i.imgur.com/Dc6hULL.jpeg?q=80&w=1920&auto=format&fit=crop',
  'https://i.imgur.com/mf3sJCG.jpeg?q=80&w=1920&auto=format&fit=crop',
  'https://i.imgur.com/PJojg8e.jpeg?q=80&w=1920&auto=format&fit=crop'
];

export const IMAGES = {
  about: '/images/about.jpg',
  host: 'https://i.imgur.com/10Zck62.jpeg',
  rooms: {
    double: ['https://i.imgur.com/wxdlJTG.jpeg', 'https://i.imgur.com/ceazV9l.jpeg'],
    bunk: ['https://i.imgur.com/AQ5wLT0.jpeg'], 
    living: ['https://i.imgur.com/BfjFhXq.jpeg', 'https://i.imgur.com/kZnkwja.jpeg'],
    kitchen: ['https://i.imgur.com/eKLANGL.jpeg', 'https://i.imgur.com/XWEdD30.jpeg'],
    bath: ['https://i.imgur.com/pvD7vnI.jpeg', 'https://i.imgur.com/qMDIkaI.jpeg'],
    outside: ['https://i.imgur.com/W4pugtN.jpeg']
  }
};

export const TRANSLATIONS: Record<string, Translation> = {
  it: {
    nav: {
      home: "Home",
      about: "L'Appartamento",
      rooms: "Gli Spazi",
      services: "Servizi",
      reviews: "Recensioni",
      location: "Posizione",
      book: "Prenota",
    },
    hero: {
      title: "Cill House",
      subtitle: "Il tuo rifugio esclusivo nel cuore di Trapani",
      location: "Via Badiella 28, Trapani - Centro Storico",
      cta: "Vedi Disponibilità",
    },
    about: {
      title: "Benvenuti nella Trapani Autentica",
      feature1: "Posizione Strategica",
      feature2: "Comfort Totale",
      p1: "Scoprite il fascino autentico di Trapani nel nostro accogliente appartamento situato nel cuore del centro storico, in via Badiella 28.",
      p2: "Tra le strade ricche di storia della città del sale, del sole e del vento, potrete perdervi ad ammirare le bellezze che racchiudono i palazzi storici.",
      p3: "A soli 6 minuti a piedi dal porto e nel cuore delle vie dello shopping.",
      p4: "Ospita comodamente fino a 3 persone ed è completamente attrezzata.",
    },
    rooms: {
      title: "I Nostri Spazi",
      subtitle: "Comfort e design per il tuo relax",
      items: [
        {
          id: 'r1',
          title: "Camera Matrimoniale",
          description: "Spaziosa camera con letto matrimoniale, arredata con cura per garantire il massimo riposo.",
          features: ["Letto matrimoniale", "Balconcino", "Armadio spazioso", "Max 2 persone"],
          images: IMAGES.rooms.double,
          maxGuests: 2
        },
        {
          id: 'r2',
          title: "Camera Singola",
          description: "Camera intima e riservata dotata di letto a castello (uso singolo).",
          features: ["Letto singolo", "Privacy", "Comfort", "Max 1 persona"],
          images: IMAGES.rooms.bunk,
          maxGuests: 1
        },
        {
          id: 'r3',
          title: "Soggiorno Relax",
          description: "Ampio soggiorno perfetto per rilassarsi e socializzare.",
          features: ["Area relax", "Divano", "Smart TV", "Tavolo da pranzo"],
          images: IMAGES.rooms.living,
          maxGuests: 0
        },
        {
          id: 'r4',
          title: "Cucina Attrezzata",
          description: "Cucina completa di tutto il necessario per i vostri pasti.",
          features: ["Piano cottura", "Forno", "Frigorifero", "Stoviglie complete"],
          images: IMAGES.rooms.kitchen,
          maxGuests: 0
        },
        {
          id: 'r5',
          title: "Bagno Moderno",
          description: "Bagno curato nei minimi dettagli, con doccia spaziosa.",
          features: ["Box doccia", "Asciugacapelli", "Kit cortesia", "Biancheria inclusa"],
          images: IMAGES.rooms.bath,
          maxGuests: 0
        },
        {
          id: 'r6',
          title: "Vista dal Balcone",
          description: "Godetevi l'atmosfera unica del centro storico dai nostri balconcini.",
          features: ["Balcone", "Vista città", "Aria fresca", "Luce naturale"],
          images: IMAGES.rooms.outside,
          maxGuests: 0
        }
      ]
    },
    services: {
      title: "Servizi Premium",
      subtitle: "Tutto ciò di cui hai bisogno per sentirti a casa",
      items: [
        { title: "Kit di Benvenuto", desc: "Macchinetta del caffè con cialde incluse" },
        { title: "Biancheria Fresca", desc: "Tris asciugamani e lenzuola pulite" },
        { title: "WiFi Gratuito", desc: "Connessione fibra in tutto l'appartamento" },
        { title: "Aria Condizionata", desc: "Climatizzatore per il massimo comfort" },
        { title: "Lavatrice", desc: "A disposizione per soggiorni più lunghi" },
        { title: "Cucina Completa", desc: "Pentole e stoviglie incluse" },
      ]
    },
    host: {
      title: "Il Tuo Host",
      name: "Marcello Cilluffo",
      bio: "Ciao, sono Marcello! Sarò felice di ospitarvi nella mia casa e darvi i migliori consigli per vivere Trapani come un locale. Contattatemi pure su WhatsApp per qualsiasi informazione.",
      whatsapp: "Chatta su WhatsApp"
    },
    platforms: {
      title: "Prenota Online",
      subtitle: "Scegli la tua piattaforma preferita per prenotare",
      airbnb: "Airbnb",
      booking: "Booking.com"
    },
    reviews: {
      title: "Recensioni",
      items: []
    },
    location: {
      title: "Posizione Strategica",
      subtitle: "Nel Cuore di Trapani",
      description: "Via Badiella si trova nel centro storico di Trapani.",
      distancesTitle: "Distanze da Cill House",
      points: {
        port: "6 min a piedi",
        center: "Nel cuore",
        shopping: "2 min a piedi",
        cathedral: "5 min a piedi",
        erice: "10 min in auto",
        egadi: "6 min a piedi",
        beach: "15 min in auto",
      }
    },
    footer: {
      desc: "Il vostro rifugio nel cuore della Sicilia occidentale",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "Apartment",
      rooms: "Spaces",
      services: "Services",
      reviews: "Reviews",
      location: "Location",
      book: "Book",
    },
    hero: {
      title: "Cill House",
      subtitle: "Your exclusive retreat in the heart of Trapani",
      location: "Via Badiella 28, Trapani - Historic Center",
      cta: "Check Availability",
    },
    about: {
      title: "Welcome to Authentic Trapani",
      feature1: "Strategic Location",
      feature2: "Total Comfort",
      p1: "Discover the authentic charm of Trapani in our cozy apartment.",
      p2: "Surrounded by the history of the city of salt, sun, and wind.",
      p3: "Just 6 minutes walk from the port.",
      p4: "It comfortably accommodates up to 3 people.",
    },
    rooms: {
      title: "Our Spaces",
      subtitle: "Comfort and design",
      items: [
        {
          id: 'r1',
          title: "Double Room",
          description: "Spacious room with a double bed.",
          features: ["Double bed", "Balcony", "Wardrobe", "Max 2 guests"],
          images: IMAGES.rooms.double,
          maxGuests: 2
        },
        {
          id: 'r2',
          title: "Single Room",
          description: "Intimate and private room.",
          features: ["Single bed", "Privacy", "Comfort", "Max 1 guest"],
          images: IMAGES.rooms.bunk,
          maxGuests: 1
        },
        {
          id: 'r3',
          title: "Living Room",
          description: "Spacious living room perfect for relaxing.",
          features: ["Relax area", "Sofa", "Smart TV", "Dining table"],
          images: IMAGES.rooms.living,
          maxGuests: 0
        },
        {
          id: 'r4',
          title: "Kitchen",
          description: "Full kitchen with everything needed.",
          features: ["Stovetop", "Oven", "Fridge", "Utensils"],
          images: IMAGES.rooms.kitchen,
          maxGuests: 0
        },
        {
          id: 'r5',
          title: "Bathroom",
          description: "Modern bathroom with spacious shower.",
          features: ["Shower box", "Hairdryer", "Toiletries", "Towels"],
          images: IMAGES.rooms.bath,
          maxGuests: 0
        },
        {
          id: 'r6',
          title: "View",
          description: "Enjoy the unique atmosphere from our balconies.",
          features: ["Balcony", "City view", "Fresh air", "Natural light"],
          images: IMAGES.rooms.outside,
          maxGuests: 0
        }
      ]
    },
    services: {
      title: "Services",
      subtitle: "Everything you need",
      items: [
        { title: "Welcome Kit", desc: "Coffee machine included" },
        { title: "Linen", desc: "Fresh towels and sheets" },
        { title: "WiFi", desc: "High-speed connection" },
        { title: "A/C", desc: "Climate control" },
        { title: "Laundry", desc: "Washing machine available" },
        { title: "Kitchen", desc: "Fully equipped" },
      ]
    },
    host: {
      title: "Your Host",
      name: "Marcello Cilluffo",
      bio: "Hi, I'm Marcello! I'll be happy to host you and give you the best tips. Text me on WhatsApp.",
      whatsapp: "Chat on WhatsApp"
    },
    platforms: {
      title: "Book Online",
      subtitle: "Choose your favorite booking platform",
      airbnb: "Airbnb",
      booking: "Booking.com"
    },
    reviews: {
      title: "Reviews",
      items: []
    },
    location: {
      title: "Location",
      subtitle: "Heart of Trapani",
      description: "Via Badiella is in the old town.",
      distancesTitle: "Distances from Cill House",
      points: {
        port: "6 min walk",
        center: "Heart",
        shopping: "2 min walk",
        cathedral: "5 min walk",
        erice: "10 min drive",
        egadi: "6 min walk",
        beach: "15 min drive",
      }
    },
    footer: {
      desc: "Your retreat in the heart of western Sicily",
      privacy: "Privacy Policy",
      cookie: "Cookie Policy"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Apartamento",
      rooms: "Espacios",
      services: "Servicios",
      reviews: "Opiniones",
      location: "Ubicación",
      book: "Reservar",
    },
    hero: {
      title: "Cill House",
      subtitle: "Tu refugio exclusivo en el corazón de Trapani",
      location: "Vía Badiella 28, Trapani - Centro Histórico",
      cta: "Ver Disponibilidad",
    },
    about: {
      title: "Bienvenidos",
      feature1: "Ubicación",
      feature2: "Confort",
      p1: "Descubre el encanto de Trapani en nuestro apartamento.",
      p2: "Rodeado de historia y cultura.",
      p3: "A 6 minutos a pie del puerto.",
      p4: "Capacidad para 3 personas.",
    },
    rooms: {
      title: "Espacios",
      subtitle: "Confort y relax",
      items: [
        {
          id: 'r1',
          title: "Habitación Doble",
          description: "Habitación espaciosa con cama doble.",
          features: ["Cama doble", "Balcón", "Armario", "Máx 2 pers."],
          images: IMAGES.rooms.double,
          maxGuests: 2
        },
        {
          id: 'r2',
          title: "Habitación Individual",
          description: "Habitación íntima y privada.",
          features: ["Cama individual", "Privacidad", "Confort", "Máx 1 pers."],
          images: IMAGES.rooms.bunk,
          maxGuests: 1
        },
        {
          id: 'r3',
          title: "Sala de Estar",
          description: "Sala de estar perfecta para relajarse.",
          features: ["Zona relax", "Sofá", "Smart TV", "Mesa"],
          images: IMAGES.rooms.living,
          maxGuests: 0
        },
        {
          id: 'r4',
          title: "Cocina",
          description: "Cocina completa con todo lo necesario.",
          features: ["Fogones", "Horno", "Nevera", "Utensilios"],
          images: IMAGES.rooms.kitchen,
          maxGuests: 0
        },
        {
          id: 'r5',
          title: "Baño",
          description: "Baño moderno con ducha amplia.",
          features: ["Ducha", "Secador", "Aseo", "Toallas"],
          images: IMAGES.rooms.bath,
          maxGuests: 0
        },
        {
          id: 'r6',
          title: "Vistas",
          description: "Disfruta del ambiente único desde el balcón.",
          features: ["Balcón", "Vistas", "Aire fresco", "Luz"],
          images: IMAGES.rooms.outside,
          maxGuests: 0
        }
      ]
    },
    services: {
      title: "Servicios",
      subtitle: "Todo lo que necesitas",
      items: [
        { title: "Kit Bienvenida", desc: "Café incluido" },
        { title: "Ropa limpia", desc: "Sábanas y toallas" },
        { title: "WiFi", desc: "Alta velocidad" },
        { title: "A/C", desc: "Climatizador" },
        { title: "Lavadora", desc: "Para estancias largas" },
        { title: "Cocina", desc: "Equipada" },
      ]
    },
    host: {
      title: "Tu Anfitrión",
      name: "Marcello Cilluffo",
      bio: "¡Hola! Soy Marcello. Estaré encantado de recibirte. WhatsApp para info.",
      whatsapp: "WhatsApp"
    },
    platforms: {
      title: "Reserva Online",
      subtitle: "Elige tu plataforma favorita",
      airbnb: "Airbnb",
      booking: "Booking.com"
    },
    reviews: {
      title: "Opiniones",
      items: []
    },
    location: {
      title: "Ubicación",
      subtitle: "Centro de Trapani",
      description: "Vía Badiella está en el casco antiguo.",
      distancesTitle: "Distancias desde Cill House",
      points: {
        port: "6 min a pie",
        center: "Centro",
        shopping: "2 min a pie",
        cathedral: "5 min a pie",
        erice: "10 min coche",
        egadi: "6 min a pie",
        beach: "15 min coche",
      }
    },
    footer: {
      desc: "Tu refugio en el corazón de Sicilia",
      privacy: "Privacidad",
      cookie: "Cookies"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "Appartement",
      rooms: "Espaces",
      services: "Services",
      reviews: "Avis",
      location: "Localisation",
      book: "Réserver",
    },
    hero: {
      title: "Cill House",
      subtitle: "Votre refuge au cœur de Trapani",
      location: "Via Badiella 28, Trapani - Centre Historique",
      cta: "Disponibilité",
    },
    about: {
      title: "Bienvenue",
      feature1: "Position",
      feature2: "Confort",
      p1: "Découvrez le charme de Trapani.",
      p2: "Histoire et culture.",
      p3: "À 6 min du port.",
      p4: "Max 3 personnes.",
    },
    rooms: {
      title: "Espaces",
      subtitle: "Confort et relax",
      items: [
        {
          id: 'r1',
          title: "Chambre Double",
          description: "Grande chambre avec lit double.",
          features: ["Lit double", "Balcon", "Armoire", "Max 2 pers."],
          images: IMAGES.rooms.double,
          maxGuests: 2
        },
        {
          id: 'r2',
          title: "Chambre Simple",
          description: "Chambre intime et privée.",
          features: ["Lit simple", "Privé", "Confort", "Max 1 pers."],
          images: IMAGES.rooms.bunk,
          maxGuests: 1
        },
        {
          id: 'r3',
          title: "Salon",
          description: "Parfait pour se détendre.",
          features: ["Détente", "Canapé", "TV", "Table"],
          images: IMAGES.rooms.living,
          maxGuests: 0
        },
        {
          id: 'r4',
          title: "Cuisine",
          description: "Équipée pour vos repas.",
          features: ["Plaque", "Four", "Frigo", "Ustensiles"],
          images: IMAGES.rooms.kitchen,
          maxGuests: 0
        },
        {
          id: 'r5',
          title: "Bain",
          description: "Moderne avec douche.",
          features: ["Douche", "Sèche-cheveux", "Kit", "Linge"],
          images: IMAGES.rooms.bath,
          maxGuests: 0
        },
        {
          id: 'r6',
          title: "Vue",
          description: "Atmosphère unique.",
          features: ["Balcon", "Vue", "Air", "Lumière"],
          images: IMAGES.rooms.outside,
          maxGuests: 0
        }
      ]
    },
    services: {
      title: "Services",
      subtitle: "Tout le confort",
      items: [
        { title: "Bienvenue", desc: "Café inclus" },
        { title: "Linge", desc: "Draps et serviettes" },
        { title: "WiFi", desc: "Gratuit" },
        { title: "A/C", desc: "Climatisation" },
        { title: "Lave-linge", desc: "Disponible" },
        { title: "Cuisine", desc: "Équipée" },
      ]
    },
    host: {
      title: "Votre Hôte",
      name: "Marcello Cilluffo",
      bio: "Bonjour! Je suis Marcello. Contactez-moi sur WhatsApp.",
      whatsapp: "WhatsApp"
    },
    platforms: {
      title: "Réserver en ligne",
      subtitle: "Choisissez votre plateforme",
      airbnb: "Airbnb",
      booking: "Booking.com"
    },
    reviews: {
      title: "Avis",
      items: []
    },
    location: {
      title: "Position",
      subtitle: "Cœur de Trapani",
      description: "Via Badiella est au centre.",
      distancesTitle: "Distances de Cill House",
      points: {
        port: "6 min à pied",
        center: "Centre",
        shopping: "2 min à pied",
        cathedral: "5 min à pied",
        erice: "10 min voiture",
        egadi: "6 min à pied",
        beach: "15 min voiture",
      }
    },
    footer: {
      desc: "Votre refuge en Sicile",
      privacy: "Confidentialité",
      cookie: "Cookies"
    }
  }
};