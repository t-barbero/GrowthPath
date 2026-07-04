// Mock data per la piattaforma di apprendimento

export interface Story {
  id: number;
  title: string;
  preview: string;
  author: string;
  category: string;
  comments: number;
  avatar: string;
}

export interface ForumThread {
  id: number;
  title: string;
  category: string;
  replies: number;
  isHighlighted?: boolean;
  author: string;
  timestamp: string;
}

export interface Webinar {
  id: number;
  title: string;
  date: string;
  time: string;
  speaker: string;
  image: string;
  isUpcoming: boolean;
}

export interface Badge {
  id: number;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface Mentor {
  id: number;
  name: string;
  expertise: string;
  rating: number;
  availability: string;
  avatar: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "Da licenziamento a CEO: il mio percorso",
    preview: "Dopo essere stata licenziata dalla mia azienda, ho deciso di trasformare quella delusione in energia per creare la mia startup...",
    author: "Maria Rossi",
    category: "Carriera",
    comments: 23,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    title: "Il fallimento del mio primo prodotto",
    preview: "Ho investito tutto in un'idea che sembrava perfetta. Quando è fallita, ho imparato la lezione più importante della mia vita...",
    author: "Luca Bianchi",
    category: "Imprenditoria",
    comments: 45,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    title: "Bocciato all'esame: ora sono docente",
    preview: "Non superare quell'esame mi ha fatto ripensare completamente il mio approccio allo studio e alla didattica...",
    author: "Sara Ferrari",
    category: "Studio",
    comments: 17,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

export const forumThreads: ForumThread[] = [
  {
    id: 1,
    title: "Come superare la paura di condividere i propri errori?",
    category: "Vulnerabilità",
    replies: 87,
    isHighlighted: true,
    author: "Giovanni Verdi",
    timestamp: "2 giorni fa"
  },
  {
    id: 2,
    title: "Strategie per trasformare feedback negativi in opportunità",
    category: "Crescita",
    replies: 52,
    author: "Anna Neri",
    timestamp: "1 giorno fa"
  },
  {
    id: 3,
    title: "Il mio team non accetta i fallimenti, come comunicare meglio?",
    category: "Leadership",
    replies: 3,
    author: "Marco Blu",
    timestamp: "2 ore fa"
  },
  {
    id: 4,
    title: "Consigli per ricominciare dopo un grande insuccesso",
    category: "Motivazione",
    replies: 0,
    author: "Chiara Viola",
    timestamp: "5 ore fa"
  }
];

export const webinars: Webinar[] = [
  {
    id: 1,
    title: "Trasformare l'insuccesso in innovazione",
    date: "2026-02-28",
    time: "18:00",
    speaker: "Dr. Alessandro Monti - Innovation Expert",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
    isUpcoming: true
  },
  {
    id: 2,
    title: "La psicologia del fallimento: come crescere",
    date: "2026-03-05",
    time: "19:00",
    speaker: "Prof.ssa Elena Conti - Psicologa",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop",
    isUpcoming: false
  },
  {
    id: 3,
    title: "Leadership resiliente: storie dal mondo startup",
    date: "2026-03-12",
    time: "17:30",
    speaker: "Roberto Mancini - Serial Entrepreneur",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    isUpcoming: false
  }
];

export const badges: Badge[] = [
  {
    id: 1,
    name: "Prima Storia",
    description: "Hai condiviso la tua prima storia di insuccesso",
    icon: "📖",
    unlocked: true
  },
  {
    id: 2,
    name: "Supporto Attivo",
    description: "Hai commentato 10 storie di altri membri",
    icon: "💬",
    unlocked: true
  },
  {
    id: 3,
    name: "Pioniere",
    description: "Hai completato il tuo primo corso",
    icon: "🎓",
    unlocked: true
  },
  {
    id: 4,
    name: "Vulnerabilità",
    description: "Hai condiviso un insuccesso particolarmente difficile",
    icon: "💪",
    unlocked: false
  },
  {
    id: 5,
    name: "Mentor",
    description: "Hai aiutato 5 membri con consigli personalizzati",
    icon: "🌟",
    unlocked: false
  }
];

export const mentors: Mentor[] = [
  {
    id: 1,
    name: "Francesca Lombardi",
    expertise: "Career Coaching",
    rating: 4.9,
    availability: "Disponibile questa settimana",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Stefano Ricci",
    expertise: "Business Strategy",
    rating: 4.8,
    availability: "Prossima disponibilità: 3 marzo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Laura Galli",
    expertise: "Mindset & Growth",
    rating: 5.0,
    availability: "Disponibile questa settimana",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
  }
];

export const currentUser = {
  name: "Mario",
  avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  progress: 65,
  currentCourse: "Resilienza e leadership"
};