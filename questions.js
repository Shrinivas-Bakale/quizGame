let questions = [
  {
    numb: 1,
    question:
      "Guess the country flag by its description: This flag is a red disk to represent the sun.",
    answer: "A. Japan",
    options: ["A. Japan", "B. China", "C. South Korea", "D. Nepal"],
  },
  {
    numb: 2,
    question: "Which bird's eye is bigger than its brain?",
    answer: "A. Ostrich",
    options: ["A. Ostrich", "B. Owl", "C. Eagle", "D. Albatross"],
  },
  {
    numb: 3,
    question: "Which is the largest state in India by area?",
    answer: "D. Rajasthan",
    options: [
      "A. Maharashtra",
      "B. Uttar Pradesh",
      "C. Madhya Pradesh",
      "D. Rajasthan",
    ],
  },
  {
    numb: 4,
    question: "What are the four metropolitan cities of India?",
    answer: "A. New Delhi, Mumbai, Bengaluru, Chennai",
    options: [
      "A. New Delhi, Mumbai, Bengaluru, Chennai",
      "B. Kolkata, Mumbai, Hyderabad, Chennai",
      "C. New Delhi, Pune, Bengaluru, Mumbai",
      "D. Ahmedabad, Mumbai, Hyderabad, Bengaluru",
    ],
  },
  {
    numb: 5,
    question: "Who was the first Indian woman to climb Mount Everest?",
    answer: "A. Bachendri Pal",
    options: [
      "A. Bachendri Pal",
      "B. Santosh Yadav",
      "C. Arunima Sinha",
      "D. Premlata Agarwal",
    ],
  },
  {
    numb: 6,
    question: "Which state of India has the longest coastline?",
    answer: "A. Gujarat",
    options: [
      "A. Gujarat",
      "B. Tamil Nadu",
      "C. Andhra Pradesh",
      "D. Maharashtra",
    ],
  },
  {
    numb: 7,
    question: "Hemophobia is the fear of what?",
    answer: "A. Fear of blood",
    options: [
      "A. Fear of blood",
      "B. Fear of heights",
      "C. Fear of water",
      "D. Fear of crowds",
    ],
  },
  {
    numb: 8,
    question: "Which animal has the largest ears?",
    answer: "A. African elephant",
    options: [
      "A. African elephant",
      "B. Fennec fox",
      "C. Indian elephant",
      "D. Rabbit",
    ],
  },
  {
    numb: 9,
    question: "What does a camel store in its hump?",
    answer: "A. Fat",
    options: ["A. Fat", "B. Water", "C. Food", "D. Energy"],
  },
  {
    numb: 10,
    question:
      "Guess the country flag by its description: This nation's flag is also known as the Five Star Red Flag.",
    answer: "A. China",
    options: ["A. China", "B. Vietnam", "C. North Korea", "D. Singapore"],
  },

  {
    numb: 11,
    question: "Which animal has a rectangular pupil?",
    answer: "A. Goat",
    options: ["A. Goat", "B. Horse", "C. Cat", "D. Sheep"],
  },
  {
    numb: 12,
    question: "Which country consumes the most chocolate per capita?",
    answer: "A. Switzerland",
    options: ["A. Switzerland", "B. Belgium", "C. Germany", "D. United States"],
  },
  {
    numb: 13,
    question: "Who plays Barbie in the 2023 movie of the same name?",
    answer: "A. Margot Robbie",
    options: [
      "A. Margot Robbie",
      "B. Emma Stone",
      "C. Jennifer Lawrence",
      "D. Gal Gadot",
    ],
  },
  {
    numb: 14,
    question: "What was Ross' pet monkey called in Friends?",
    answer: "A. Marcel",
    options: ["A. Marcel", "B. Max", "C. Milo", "D. Mason"],
  },
  {
    numb: 15,
    question: "How many sides does a heptadecagon have?",
    answer: "A. 17",
    options: ["A. 17", "B. 15", "C. 18", "D. 16"],
  },
  {
    numb: 16,
    question: "What is the heaviest organ in the human body?",
    answer: "A. The liver",
    options: ["A. The liver", "B. The brain", "C. The lungs", "D. The heart"],
  },
  {
    numb: 17,
    question: "What sport is played at The Oval?",
    answer: "A. Cricket",
    options: ["A. Cricket", "B. Football", "C. Rugby", "D. Tennis"],
  },
  {
    numb: 18,
    question: "Who won the 2022 F1 World Championship?",
    answer: "A. Max Verstappen",
    options: [
      "A. Max Verstappen",
      "B. Lewis Hamilton",
      "C. Charles Leclerc",
      "D. Sergio Perez",
    ],
  },
  {
    numb: 19,
    question: "How long did World War I go on for?",
    answer: "A. 4 years",
    options: ["A. 4 years", "B. 6 years", "C. 5 years", "D. 3 years"],
  },
  {
    numb: 20,
    question: "What is a female horse called?",
    answer: "A. Mare",
    options: ["A. Mare", "B. Filly", "C. Doe", "D. Cow"],
  },
  {
    numb: 21,
    question: "What colors are flamingos born?",
    answer: "A. Grey",
    options: ["A. Grey", "B. White", "C. Pink", "D. Brown"],
  },
  {
    numb: 22,
    question: "What is the name of the snake in The Jungle Book?",
    answer: "A. Kaa",
    options: ["A. Kaa", "B. Nagini", "C. Shere Khan", "D. Mowgli"],
  },
  {
    numb: 23,
    question: "What is Twitter now called?",
    answer: "A. X",
    options: ["A. X", "B. Titter", "C. Twit", "D. Bird"],
  },
  {
    numb: 24,
    question: "What year did the first Apple iPhone launch?",
    answer: "A. 2007",
    options: ["A. 2007", "B. 2008", "C. 2006", "D. 2009"],
  },
  {
    numb: 25,
    question: "What does JPEG stand for?",
    answer: "A. Joint Photographic Experts Group",
    options: [
      "A. Joint Photographic Experts Group",
      "B. Java Picture Editing Guide",
      "C. Java Program Expert Guide",
      "D. Joint Program Editing Guide",
    ],
  },
  {
    numb: 26,
    question: "What planet is the furthest from Earth?",
    answer: "A. Neptune",
    options: ["A. Neptune", "B. Uranus", "C. Pluto", "D. Saturn"],
  },
  {
    numb: 27,
    question: "What colors are the Nigerian flag?",
    answer: "A. Green and white",
    options: [
      "A. Green and white",
      "B. Red and white",
      "C. Blue and yellow",
      "D. Black and green",
    ],
  },
  {
    numb: 28,
    question: "What is the currency of Japan?",
    answer: "A. Japanese Yen",
    options: ["A. Japanese Yen", "B. Yuan", "C. Won", "D. Peso"],
  },
  {
    numb: 29,
    question: "Who is known as the 'Father of Modern Physics'?",
    answer: "A. Albert Einstein",
    options: [
      "A. Albert Einstein",
      "B. Isaac Newton",
      "C. Galileo Galilei",
      "D. Nikola Tesla",
    ],
  },
  {
    numb: 30,
    question: "What is the largest organ in the human body?",
    answer: "A. Skin",
    options: ["A. Skin", "B. Liver", "C. Brain", "D. Heart"],
  },
  {
    numb: 31,
    question: "In which year did the Titanic sink?",
    answer: "A. 1912",
    options: ["A. 1912", "B. 1911", "C. 1913", "D. 1910"],
  },
  {
    numb: 32,
    question: "Which is the correct spelling?",
    answer: "B) Separation",
    options: [
      "A) Seperation",
      "B) Separation",
      "C) Separetion",
      "D) Separeation",
    ],
  },
  {
    numb: 33,
    question: "What major global event is recognized annually on April 22nd?",
    answer: "A. Earth Day",
    options: [
      "A. Earth Day",
      "B. World Health Day",
      "C. Human Rights Day",
      "D. World Environment Day",
    ],
  },
  {
    numb: 34,
    question:
      "What type of batteries are most commonly used in electric vehicles?",
    answer: "C. Lithium-ion",
    options: [
      "A. Lead-acid",
      "B. Nickel-cadmium",
      "C. Lithium-ion",
      "D. Alkaline",
    ],
  },
  {
    numb: 35,
    question: "What does VR stand for?",
    answer: "B. Virtual Reality",
    options: [
      "A. Very Real",
      "B. Virtual Reality",
      "C. Visual Record",
      "D. Video Replay",
    ],
  },
  {
    numb: 36,
    question: "Which famous personality is nicknamed 'Nightingale of India'?",
    answer: "A) Sarojini Naidu",
    options: [
      "A) Sarojini Naidu",
      "B) Lata Mangeshkar",
      "C) Indira Gandhi",
      "D) Kasturba Gandhi",
    ],
  },
  {
    numb: 37,
    question: "What ship famously sank after hitting an iceberg in 1912?",
    answer: "B. Titanic",
    options: ["A. Lusitania", "B. Titanic", "C. Britannic", "D. Carpathia"],
  },
  {
    numb: 38,
    question: "Who is the Father of the nuclear bomb?",
    answer: "A. Dr. J. Robert Oppenheimer",
    options: [
      "A. Dr. J. Robert Oppenheimer",
      "B. Robert Downey Jr.",
      "C. Albert Einstein",
      "D. Michael Faraday",
    ],
  },
  {
    numb: 39,
    question: "Which was the first Indian satellite launched into space?",
    answer: "B. Aryabhata",
    options: ["A. Mangalyaan", "B. Aryabhata", "C. INSAT", "D. GSAT"],
  },

  {
    numb: 40,
    question:
      "Guess the country flag by its description: To represent the country's rich culture and diversity, this flag has six colors.",
    answer: "A. South Africa",
    options: ["A. South Africa", "B. India", "C. Brazil", "D. Mexico"],
  },
  {
    numb: 41,
    question: "The death anniversary of whom is observed as 'Martyr's Day'?",
    answer: "Mahatma Gandhi",
    options: [
      "Mahatma Gandhi",
      "Subhash Chandra Bose",
      "Bhagat Singh",
      "Sardar Vallabhbhai Patel",
    ],
  },
  {
    numb: 42,
    question: "Who is the CEO of Google?",
    answer: "A. Sundar Pichai",
    options: [
      "A. Sundar Pichai",
      "B. Satya Nadella",
      "C. Mark Zuckerberg",
      "D. Jeff Bezos",
    ],
  },
  {
    numb: 43,
    question: "Which country is the largest producer of coffee in the World?",
    answer: "a. Brazil",
    options: ["a. Brazil", "b. Columbia", "c. India", "d. Indonesia"],
  },
  {
    numb: 44,
    question: "Who is the first Indian woman to win a medal in the Olympics?",
    answer: "c. Karnam Malleshwari",
    options: [
      "a. P.T. Usha",
      "b. Mary Kom",
      "c. Karnam Malleshwari",
      "d. Saina Nehwal",
    ],
  },
  {
    numb: 45,
    question: "Which is the First AI Tool launched in the world?",
    answer: "Devin AI",
    options: ["Devin AI", "OpenAI", "IBM Watson", "ChatGPT"],
  },
  {
    numb: 46,
    question: "Which is the correct spelling?",
    answer: "A) Cooperation",
    options: [
      "A) Cooperation",
      "B) Cooporation",
      "C) Cooperaton",
      "D) Coopperation",
    ],
  },
  {
    numb: 47,
    question:
      "The first woman president of India, Pratibha Patil, was the first woman governor of which state?",
    answer: "(B) Rajasthan",
    options: ["(A) Maharashtra", "(B) Rajasthan", "(C) Gujarat", "(D) Goa"],
  },
  {
    numb: 48,
    question:
      "Which of these metals or non-metals is the main constituent of both brass and bronze?",
    answer: "(C) Copper",
    options: ["(A) Carbon", "(B) Lead", "(C) Copper", "(D) Silver"],
  },
  {
    numb: 49,
    question:
      "Which country launched the world's first successful space flight?",
    answer: "Soviet Union (Russia)",
    options: ["Soviet Union (Russia)", "United States", "Germany", "China"],
  },
  {
    numb: 50,
    question: "Which Indian state is known as the 'Land of the Five Rivers'?",
    answer: "A. Punjab",
    options: ["A. Punjab", "B. Haryana", "C. Uttar Pradesh", "D. Bihar"],
  },
  {
    numb: 51,
    question: "Which is the correct spelling?",
    answer: "b) vacuum",
    options: ["a) vaccum", "b) vacuum", "c) vaccuum", "d) vaccuumm"],
  },
  {
    numb: 52,
    question: "What is the official language of Egypt?",
    answer: "A. Arabic",
    options: ["A. Arabic", "B. Hebrew", "C. Persian", "D. English"],
  },
  {
    numb: 53,
    question:
      "Guess the movie in which this dialogue is used: 'Har baccha special hai'?",
    answer: "A) Taare Zameen Par",
    options: [
      "A) Taare Zameen Par",
      "B) 3 Idiots",
      "C) Dangal",
      "D) Chhichhore",
    ],
  },
  {
    numb: 54,
    question:
      "Guess the movie in which this dialogue is used: 'Atha majhi satakli'?",
    answer: "A) Singham",
    options: ["A) Singham", "B) Simmba", "C) Dabangg", "D) Sooryavanshi"],
  },
  {
    numb: 55,
    question: "Which famous personality is nicknamed 'Human Computer'?",
    answer: "A) Shakuntala Devi",
    options: [
      "A) Shakuntala Devi",
      "B) Homi Bhabha",
      "C) C.V. Raman",
      "D) Srinivasa Ramanujan",
    ],
  },
  {
    numb: 56,
    question: "What does 'www' stand for in a website address?",
    answer: "A. World Wide Web",
    options: [
      "A. World Wide Web",
      "B. Web World Wide",
      "C. Web Wide World",
      "D. World Web Wide",
    ],
  },
  {
    numb: 57,
    question:
      "It is a small red fruit, also found on a shoe polish. What is it?",
    answer: "A) Cherry",
    options: ["A) Cherry", "B) Apple", "C) Strawberry", "D) Cranberry"],
  },
  {
    numb: 58,
    question: "Amaze, Elevate, and City are all cars of which brand?",
    answer: "A) Honda",
    options: ["A) Honda", "B) Toyota", "C) Hyundai", "D) Ford"],
  },
  {
    numb: 59,
    question: "Which bird is used as a symbol of peace?",
    answer: "A) Dove",
    options: ["A) Dove", "B) Sparrow", "C) Pigeon", "D) Peacock"],
  },
  {
    numb: 60,
    question: "How many millions are there in a billion?",
    answer: "A) 1000",
    options: ["A) 1000", "B) 100", "C) 10,000", "D) 10"],
  },
];
