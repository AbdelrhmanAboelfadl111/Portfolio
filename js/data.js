var frontEndSkills = [
    { name: "HTML", level: "Professional", img: "html-5_174854.png" },
    { name: "CSS", level: "Professional", img: "text_16020753.png" },
    { name: "JavaScript", level: "Professional", img: "js_5968292.png" },
    { name: "TypeScript", level: "Intermediate", img: "typescript_5968381.png" },
    { name: "Angular", level: "Intermediate", img: "programing.png" },
    { name: "Bootstrap", level: "Professional", img: "bootstrap-logo-shadow@2x.png" },
    { name: "Tailwind CSS", level: "Professional", img: "tailwindcss.png" },
    { name: "Sass", level: "Professional", img: "sass_5968358.png" },
    { name: "OOP ( TS )", level: "Intermediate", img: "program_14955773.png" },
    { name: "API", level: "Professional", img: "api_8297437.png" },
    { name: "jQuery", level: "Professional", img: "free-jquery-3d-icon-png-download-7578007.png" },
];
var basicLang = [
    { name: "C", level: "Basic", img: "icons8-c-programming-240.png" },
    { name: "C++", level: "Basic", img: "c_6132222.png" },
    { name: "Java", level: "Basic", img: "web_14062426.png" },
    { name: "Python", level: "Basic", img: "python_1387537.png" },
];
var softSkills = [
  { name: "Creative Problem Solving", img: "problem-solving_12209647.png" },
  { name: "Effective Communication", img: "communication_11532852.png" },
  { name: "Teamwork & Collaboration", img: "synergizing.png" },
  { name: "Fast Learning Ability", img: "fast-track_11316007.png" },
  { name: "Attention to Detail", img: "risk-assessment_16940818.png" },
  { name: "Project Management Skills", img: "multi-skill_18254805.png" },
];
var tools = [
  { name: "GitHub", level: "Professional", img: "github-logo.png" },
  { name: "Git", level: "Professional", img: "Git.png" },
  { name: "Cmd", level: "Basic", img: "cmd-logo-letter-design-vector-42535381.png" },
  { name: "Npm", level: "Professional", img: "npm-logo-png-transparent.png" },
  { name: "Angular CLI", level: "Basic", img: "programing.png" },
];
var projects1 = [
  { name: "A.O.T Book Store", id: "1", img: "p1.png" },
  { name: "DENAR Academy", id: "2", img: "p2.png" },
  { name: "SemiCode Academy", id: "3", img: "p13.png" },
];
var projects2 = [
  { name: "Delici", id: "4", img: "p3.png" },
  { name: "Nike Store", id: "5", img: "p4.png" },
  { name: "Elforkan", id: "6", img: "p5.png" },
];
var projects3 = [
  { name: "Dine Out", id: "7", img: "p6.png" },
  { name: "Kaffa", id: "8", img: "p7.png" },
  { name: "Farm Game", id: "9", img: "p8.png" },
];
var projects4 = [
  { name: "Wieder Gym", id: "10", img: "p9.png" },
  { name: "Fokir", id: "11", img: "p10.png" },
  { name: "Mealify", id: "12", img: "p1.png" },
];

var projectsDetails = [
  {
    name: "A.O.T Book Store",
    id: "1",
    img: "p1.png",
    languages: ["HTML", "Sass", "JavaScript", "Bootstrap"],
    description:
      "A.O.T STORE 🛒✨ Your ultimate digital hub for premium books, products, and creative content! 📚🔥 Fast, clean, and modern UI designed for the smoothest shopping experience 🚀💛 🔥 Features 🌀 Smooth animations & modern UI 🧩 Well-organized product categories ⚡ Fast performance 📱 Fully responsive on all devices 🛍️ Easy add-to-cart & checkout",
    cat: "E-commerce",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/A.O.T-Book-Store/",
    year: "2025",
  },
  {
    name: "DENAR Academy",
    id: "2",
    img: "p2.png",
    languages: ["HTML", "Sass", "JavaScript", "Bootstrap"],
    description:
      "DENAR Academy is an online learning platform that provides courses in web development and programming.",
    cat: "Education",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/Denar-Academy/",
    year: "2026",
  },
  {
    name: "SemiCode Academy",
    id: "3",
    img: "p13.png",
    languages: ["HTML", "Sass", "JavaScript", "Bootstrap"],
    description:
      "🚀✨ Build smarter, faster, and better with SemiCode 💡 Turn your ideas into real web applications using the power of AI 🧠 No complexity, no limits — just pure creativity ⚡ Design, develop, and deploy all in one place 💻 Create modern UI & powerful backend with ease 🔧 Fully customizable and developer-friendly 🌍 Perfect for beginners, developers",
    cat: "Education",
    type: "Team Project",
    url: "https://www.semicode.tech/",
    year: "2026",
  },
  {
    name: "Delici",
    id: "4",
    img: "p3.png",
    languages: ["HTML", "Sass", "JavaScript", "Bootstrap"],
    description:
      "🍽️ DELICI – Delicious Restaurant Website  Welcome to DELICI — a mouthwatering, visually stunning restaurant website crafted by Abdo Fadl. 😋🎨 This project brings together inviting hero banners, a clean layout, illustrations of tempting dishes, and a smooth user experience for exploring menu items, our story, and booking a table.  🔍 What you’ll f",
    cat: "Food & Beverage",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/DELICI/",
    year: "2025",
  },
  {
    name: "Nike Store",
    id: "5",
    img: "p4.png",
    languages: ["HTML", "Sass", "JavaScript", "Bootstrap"],
    description:
      " 👟 NIKE STORE – Your Ultimate Sneaker Destination!  Welcome to the NIKE STORE, a sleek and modern e-commerce website designed by Abdo Fadl. 🛒✨ Explore a wide range of Nike products with a clean, user-friendly interface that makes shopping for your favorite sneakers and apparel a breeze.  🔍 What you’ll find:  - Stunning hero banners showcasing the latest Nike releases - A well-organized product catalog with smooth navigation - Engaging animations and interactive elements for an immersive shopping experience - Fully responsive design for seamless browsing on any device  Whether you’re a sneakerhead or just looking for stylish sportswear, the NIKE STORE has everything you need to step up your game! 🚀💛",
    cat: "E-commerce",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/Nike-Store/",
    year: "2025",
  },
  {
    name: "Elforkan",
    id: "6",
    img: "p5.png",
    languages: ["HTML", "Sass", "JavaScript", "Bootstrap"],
    description:
      "Elforkan is a c🏛️ Maktabat ElFurkan | The Holy Qur’an Library 📚 A curated collection of the Qur’an with the voices of top‑reciters 🎙️ Featuring renowned reciters like عبدالباسط عبد الصمد, محمد صديق المنشاوي & محمود خليل الحصري 📥 Download or listen online — easy access, anytime 🌐 Responsive experience, designed for both desktop & mobileontent management system for creating and managing digital content.",
    cat: "Education",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/Maktapt-Elforkan/",
    year: "2025",
  },
  {
    name: "Dine Out",
    id: "7",
    img: "p6.png",
    languages: ["HTML", "Css", "JavaScript", "Bootstrap"],
    description:
      "Dine Out is a 🍴 Dine-Out | Your Ultimate Food Hub 🌟 Explore delicious meals with a modern, interactive design 👨‍🍳 Featuring chefs, cooks & patissiers creating a variety of dishes 🍔 Menus include burgers, pizzas, chicken, and more — with clear sizes & prices 📱 Fully responsive for both desktop & mobile, smooth user experience 🕒 Restauran t review and reservation application.",
    cat: "Food & Beverage",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/Dine-Out/",
    year: "2025",
  },
  {
    name: "Kaffa",
    id: "8",
    img: "p7.png",
    languages: ["HTML", "Css", "JavaScript", "Bootstrap"],
    description:
      "☕️ Kaffa | Elite Coffee Brands Experience 🌍 Global-roasters, premium beans — handcrafted for true coffee fans 💻 Built with HTML, CSS & JavaScript — clean UI, responsive design 📖 Sections: About · Services · Menu · Beans / Coffee Book 🎯 Explore a wide variety: hot & iced coffees, caramel range, fruit coolers, chocolate specialties",
    cat: "Food & Beverage",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/Kaffa/",
    year: "2025",
  },
  {
    name: "Farm Game",
    id: "9",
    img: "p8.png",
    languages: ["HTML", "Sass", "JavaScript", "Bootstrap"],
    description:
      "🎮 Farm Game | Grow & Harvest Adventure 🌱 Step into the fields and plant your crops! 🚜 Manage your farm, harvest the yield, and build your little farming empire 💻 Developed with HTML, CSS & JavaScript — responsive for mobile & desktop 🖤 Created by Abdelrahman AboElfadl | Front‑End Developer",
    cat: "Entertainment",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/Farm-Game/",
    year: "2025",
  },
  {
    name: "Wieder Gym",
    id: "10",
    img: "p9.png",
    languages: ["HTML", "Css", "JavaScript", "Bootstrap"],
    description:
      "🏋️‍♂️ Wieder Gym | Your Personal Fitness Companion 🏋️‍♀️ Track your workouts, monitor your progress, and achieve your fitness goals 💻 Built with HTML, CSS & JavaScript — clean UI, responsive design 📊 Sections: Dashboard · Workouts · Progress · Nutrition 🎯 Stay motivated and reach new heights!",
    cat: "Health & Fitness",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/Wieder-Gym/",
    year: "2025",
  },
  {
    name: "Fokir",
    id: "11",
    img: "p10.png",
    languages: ["HTML", "Css", "JavaScript", "Bootstrap"],
    description:
      "Fokir is a 🌐 Fokir | Creative Portfolio Website 🎨 Showcasing innovative design and development work 💻 Built with HTML, CSS & JavaScript — clean UI, responsive design 📷 Sections: About · Services · Portfolio · Contact 🎯 Highlight your talents and attract new opportunities!",
    cat: "Portfolio",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/Fokir/",
    year: "2025",
  },
  {
    name: "Mealify",
    id: "12",
    img: "p11.png",
    languages: ["HTML", "Css", "JavaScript", "Bootstrap"],
    description:
      "Mealify is a 🍽️ Meal Planning and Recipe Management Application 📅 Organize your meals, discover new recipes, and manage your nutrition effortlessly 💻 Built with HTML, CSS & JavaScript — clean UI, responsive design 📷 Sections: Dashboard · Recipes · Meal Plan · Nutrition 🎯 Simplify your cooking and eating experience!",
    cat: "Health & Fitness",
    type: "Solo Project",
    url: "https://abdelrhmanaboelfadl111.github.io/Mealify/",
    year: "2025",
  },
];