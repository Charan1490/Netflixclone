export const sampleMovies = [
  {
    id: 1,
    title: "Stranger Things",
    poster: "https://i.imgur.com/6JVlbXz.jpg",
    backdrop: "https://i.imgur.com/tAEcKw1.jpg",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
    category: "trending",
    year: 2023,
    rating: "TV-14"
  },
  {
    id: 2,
    title: "The Witcher",
    poster: "https://i.imgur.com/kKs7RFR.jpg",
    backdrop: "https://i.imgur.com/D8rU6cl.jpg",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world.",
    category: "trending",
    year: 2023,
    rating: "TV-MA"
  },
  {
    id: 3,
    title: "Breaking Bad",
    poster: "https://i.imgur.com/v9cVqGm.jpg",
    backdrop: "https://i.imgur.com/1fjfYbf.jpg",
    description: "A high school chemistry teacher turned methamphetamine manufacturer.",
    category: "top",
    year: 2022,
    rating: "TV-MA"
  },
  {
    id: 4,
    title: "Money Heist",
    poster: "https://i.imgur.com/rCQ8h4K.jpg",
    backdrop: "https://i.imgur.com/y6MqLFe.jpg",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery.",
    category: "trending",
    year: 2023,
    rating: "TV-MA"
  },
  {
    id: 5,
    title: "Dark",
    poster: "https://i.imgur.com/2I5dKdT.jpg",
    backdrop: "https://i.imgur.com/FgGvH3n.jpg",
    description: "A family saga with a supernatural twist, set in a German town.",
    category: "top",
    year: 2022,
    rating: "TV-MA"
  },
  {
    id: 6,
    title: "The Crown",
    poster: "https://i.imgur.com/qhVaXZj.jpg",
    backdrop: "https://i.imgur.com/p0o9kMb.jpg",
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign.",
    category: "top",
    year: 2023,
    rating: "TV-MA"
  },
  {
    id: 7,
    title: "Narcos",
    poster: "https://i.imgur.com/x8LV2Xt.jpg",
    backdrop: "https://i.imgur.com/bVZjVke.jpg",
    description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
    category: "action",
    year: 2022,
    rating: "TV-MA"
  },
  {
    id: 8,
    title: "Black Mirror",
    poster: "https://i.imgur.com/h7ezrIJ.jpg",
    backdrop: "https://i.imgur.com/gR5gPjm.jpg",
    description: "An anthology series exploring a twisted, high-tech multiverse.",
    category: "scifi",
    year: 2023,
    rating: "TV-MA"
  },
  {
    id: 9,
    title: "Peaky Blinders",
    poster: "https://i.imgur.com/VzXD1fS.jpg",
    backdrop: "https://i.imgur.com/8qL9B7R.jpg",
    description: "A gangster family epic set in 1900s England.",
    category: "action",
    year: 2022,
    rating: "TV-MA"
  },
  {
    id: 10,
    title: "Wednesday",
    poster: "https://i.imgur.com/KkN7vtW.jpg",
    backdrop: "https://i.imgur.com/4Tw5QmZ.jpg",
    description: "Follows Wednesday Addams' years as a student at Nevermore Academy.",
    category: "trending",
    year: 2023,
    rating: "TV-14"
  },
  {
    id: 11,
    title: "Squid Game",
    poster: "https://i.imgur.com/k4qpX8Y.jpg",
    backdrop: "https://i.imgur.com/H5F9s2v.jpg",
    description: "Hundreds of cash-strapped contestants accept an invitation to compete in children's games.",
    category: "trending",
    year: 2023,
    rating: "TV-MA"
  },
  {
    id: 12,
    title: "Ozark",
    poster: "https://i.imgur.com/5kGYw8m.jpg",
    backdrop: "https://i.imgur.com/jYpB4TS.jpg",
    description: "A financial adviser drags his family to the Missouri Ozarks for money laundering.",
    category: "top",
    year: 2022,
    rating: "TV-MA"
  }
];

export const getMoviesByCategory = (category) => {
  if (category === 'all') return sampleMovies;
  return sampleMovies.filter(movie => movie.category === category);
};

export const getFeaturedMovie = () => {
  return sampleMovies[0];
};
