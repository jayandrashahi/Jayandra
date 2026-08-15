/**
 * content.js
 * ------------------------------------------------------------------
 * Single source of truth for everything personal on this site.
 * Update names, links, notes, and copy here — nothing else in the
 * codebase should hardcode this information twice.
 * ------------------------------------------------------------------
 */

const CONTENT = {
  person: {
    name: "Jayandra Shahi",
    location: "Nepal",
    education: "+2 PCMB Student",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    roles: ["Student", "Athlete", "Creator", "Explorer"],
    tagline: "I train my body, create things, learn new ideas, and keep moving.",
    heroQuote: "Small steps still move you forward.",
    photo: "assets/photo-current.jpg",
  },

  social: {
    instagram: {
      handle: "@jayandra__02",
      url: "https://instagram.com/jayandra__02",
      note: "Photos, moments & life",
    },
    tiktok: {
      handle: "@jayandra_shahi_",
      url: "https://tiktok.com/@jayandra_shahi_",
      note: "Short videos & ideas",
    },
    facebook: {
      handle: "@jayandra.shahi.2025",
      url: "https://facebook.com/jayandra.shahi.2025",
      note: "Updates & connections",
    },
  },

  nav: [
    { id: "home", label: "Home" },
    { id: "room", label: "My Room" },
    { id: "what-i-do", label: "What I Do" },
    { id: "my-day", label: "My Day" },
    { id: "mindset", label: "Mindset" },
    { id: "learning", label: "Learning" },
    { id: "work", label: "Work" },
    { id: "connect", label: "Connect" },
  ],

  // "Poke Around My Room" — interactive desk objects
  room: [
    {
      id: "laptop",
      label: "Laptop",
      hoverNote: "MAKE SOMETHING",
      title: "Editing & Creating",
      body: "Where raw footage turns into something worth watching. Most late nights end here.",
      tag: "creator",
    },
    {
      id: "notebook",
      label: "Notebook",
      hoverNote: "WRITE IT DOWN",
      title: "Ideas & Planning",
      body: "Video ideas, workout plans, half-finished thoughts — this is where they all start.",
      tag: "planner",
    },
    {
      id: "books",
      label: "Books",
      hoverNote: "OPEN ME",
      title: "Learning",
      body: "Books on mindset, money, and ideas that push back on how I already think.",
      tag: "learner",
    },
    {
      id: "dumbbell",
      label: "Dumbbell",
      hoverNote: "GET STRONGER",
      title: "Calisthenics",
      body: "Bodyweight training, consistency over intensity. Strength I can actually feel.",
      tag: "athlete",
    },
    {
      id: "camera",
      label: "Camera",
      hoverNote: "CAPTURE THIS",
      title: "Content Creation",
      body: "Capturing the everyday stuff and turning it into short-form content.",
      tag: "creator",
    },
    {
      id: "phone",
      label: "Phone",
      hoverNote: "SCROLL LATER",
      title: "Social Media",
      body: "Where the content actually goes, and where I study what other creators do well.",
      tag: "creator",
    },
    {
      id: "headphones",
      label: "Headphones",
      hoverNote: "TUNE IN",
      title: "Music & Editing",
      body: "Every edit has a soundtrack. Headphones on means don't interrupt me.",
      tag: "creator",
    },
    {
      id: "backpack",
      label: "Backpack",
      hoverNote: "TO SCHOOL",
      title: "Student Life",
      body: "Physics, Chemistry, Maths, Biology — the +2 PCMB grind, every single day.",
      tag: "student",
    },
  ],

  // "What I Do" — paper cards
  whatIDo: [
    {
      title: "Content Creator",
      accent: "orange",
      body: "I create content that entertains, shares ideas, and reflects what I'm learning.",
    },
    {
      title: "Video Editor",
      accent: "blue",
      body: "Turning raw clips into stories that connect with people.",
    },
    {
      title: "Calisthenics Athlete",
      accent: "green",
      body: "Training strength, skills, consistency and discipline.",
    },
    {
      title: "Book Explorer",
      accent: "yellow",
      body: "Books that challenge how I think.",
    },
    {
      title: "Money / Finance Learner",
      accent: "lavender",
      body: "Learning about money, mindset, investing and financial freedom.",
    },
    {
      title: "Gamer",
      accent: "red",
      body: "Gaming, competition and fun — mostly Free Fire.",
    },
  ],

  // "A Day in My Life" — timeline strip
  day: [
    { time: "06:00 AM", label: "Training", note: "Bodyweight session before the day gets loud." },
    { time: "08:00 AM", label: "School", note: "Physics, Chemistry, Maths, Biology." },
    { time: "04:00 PM", label: "Editing", note: "Cutting the day's footage into something." },
    { time: "06:30 PM", label: "Content / Sports", note: "Filming, posting, or just moving." },
    { time: "08:30 PM", label: "Reading", note: "A few pages before the noise settles." },
    { time: "10:00 PM", label: "Planning", note: "Tomorrow's list, written by hand." },
  ],

  // Mindset — sticky / journal notes
  mindset: [
    { text: "Small steps still move you forward.", color: "yellow", rotate: -3 },
    { text: "Discipline beats waiting for motivation.", color: "blue", rotate: 2 },
    { text: "Learn something. Train something. Create something.", color: "green", rotate: -1 },
    { text: "Your mindset today shapes your tomorrow.", color: "orange", rotate: 3 },
    { text: "Consistency is louder than intensity.", color: "lavender", rotate: -2 },
  ],

  // Currently Exploring
  learning: [
    { topic: "PCMB Studies", note: "Physics is finally starting to click.", icon: "atom" },
    { topic: "Money & Finance", note: "Reading about how compounding actually works.", icon: "coin" },
    { topic: "Mindset", note: "Trying to react less, think more.", icon: "brain" },
    { topic: "Video Editing", note: "Learning pacing — not just effects.", icon: "film" },
    { topic: "Calisthenics", note: "Working toward a clean muscle-up.", icon: "muscle" },
    { topic: "Books", note: "One idea book, one story book, always both.", icon: "book" },
  ],

  // Work / Content gallery — placeholders, easy to replace later
  work: [
    { title: "Morning Training Reel", type: "video", tag: "Calisthenics", placeholder: true },
    { title: "A Day As a +2 Student", type: "video", tag: "Content", placeholder: true },
    { title: "Editing Timelapse", type: "video", tag: "Editing", placeholder: true },
    { title: "Free Fire Highlights", type: "video", tag: "Gaming", placeholder: true },
    { title: "Book Notes — Page 1", type: "photo", tag: "Books", placeholder: true },
    { title: "Study Desk Setup", type: "photo", tag: "Student Life", placeholder: true },
  ],

  easterEggs: [
    { trigger: "star", message: "you found something." },
    { trigger: "dumbbell-clicks", message: "Okay... that's enough reps.", threshold: 5 },
    { trigger: "notebook-click", message: "Today's thought: keep going." },
    { trigger: "controller", message: "One more game?" },
  ],

  footer: {
    thanks: "Thanks for being here.",
    line: "Keep learning. Keep creating. Keep moving.",
    signature: "— Jayandra",
  },

  contact: {
    heading: "Leave a Note",
    sub: "Write something. It'll get pinned right here.",
    ctaLabel: "PIN IT",
  },
};
