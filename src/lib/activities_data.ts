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
    title: "TBA",
    date: "2 May 2026",
    description: "Details for Day 3 will be announced soon. Stay tuned!",
    details: "To be announced.",
  },
  {
    day: 4,
    title: "TBA",
    date: "3 May 2026",
    description: "Details for Day 4 will be announced soon. Stay tuned!",
    details: "To be announced.",
  },
];
