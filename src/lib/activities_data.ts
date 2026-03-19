export interface Activity {
  day: number;
  title: string;
  date: string;
  description: string;
  details: string;
}

export const activities: Activity[] = [
  {
    day: 1,
    title: "Campus Tour & Uni Visit",
    date: "30 April 2026",
    description:
      "Join us for a Campus Tour at Universitas Ciputra and Universitas Negeri Surabaya (UNESA).",
    details:
      "Explore modern facilities, experience vibrant campus life, and learn about programs that prepare you for success. Don’t miss the opportunity to connect with these two prestigious universities",
  },
  {
    day: 2,
    title: "Seminar & Parallel Session",
    date: "1 May 2026",
    description:
      'Be part of an enlightening seminar exploring “Global Competitiveness and Collaboration Empowered by Artificial Intelligence.” Hear from experts and thought leaders as they discuss the transformative role of AI in shaping global progress.',
    details:
      "Throughout the day, selected participants whose abstracts have been accepted will also present their work in a series of parallel sessions. Don’t miss this opportunity to learn, connect, and grow.",
  },
  {
    day: 3,
    title: "Seminar & Parallel Session",
    date: "2 May 2026",
    description: 
      'Join us for an inspiring seminar centered on “The Emotional Quotient: Why Mental Health Matters in Leadership” Gain insights from expert speakers as they explore practical strategies, evidence-based approaches, and empowering perspectives for nurturing mental and emotional balance.',
    details:
      "The day will also feature parallel sessions delivered by selected participants whose abstracts have been reviewed and accepted. Be part of a transformative day that encourages reflection, connection and growth.",
  },
  {
    day: 3,
    title: "Gala Dinner",
    date: "2 May 2026",
    description: 
      "We warmly invite you to a special Gala Dinner, featuring wonderful performances and opportunities to connect with others.",
    details: 
      "Enjoy an evening of entertainment, delicious food and meaningful conversations that could lead to exciting collaborations. Join us in this special night of networking and celebration.",
  },
  {
    day: 4,
    title: "Discussion Panel",
    date: "3 May 2026",
    description: 
      "Join us on the final day for an engaging panel discussion centered on Leadership Development and Succession Planning.",
    details: 
      "Gain valuable insights from experts on cultivating future leaders, strengthening organizational resilience, and building sustainable leadership pipelines.",
  },
  {
    day: 4,
    title: "City Tour",
    date: "3 May 2026",
    description: 
      "You are invited to part in an exclusive tour of Surabaya, a city where rich cultural heritage blends with vibrant modernity.",
    details: 
      "With an in-depth knowledge of Surabaya's important place in Indonesia's history and development, this well-organized tour will take you through the city's popular monuments, historical sites, and busy cities.\n\nOn an interesting and unforgettable tour, experience the special beauty and culture of one of Indonesia's most prestigious cities.",
  }
];
