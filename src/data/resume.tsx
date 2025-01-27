import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Godfred Entsie",
  initials: "GE",
  url: "https://godfred-entsie.vercel.app/",
  location: "Accra, Ghana",
  locationLink: "#",
  description:
    "Frontend Developer. I create accessible, flawless digital experiences for the web.",
  summary:
    "I'm a developer driven by a passion for creating accessible, flawless user interfaces that seamlessly combine thoughtful design with solid engineering. I thrive at the crossroads of design and development, building experiences that are not only visually appealing but also optimized for performance and user-friendliness. ",
  avatarUrl: "/jay.jpg",
  skills: [
    "React",
    "Javascript",
    "Node.js",
    "CSS",
    "HTML",
    "Tailwind",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   
  ],
  contact: {
    email: "godfredentsie8@gmail.com",
    tel: "+233240536268",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jayfaculty-design",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/godfred-entsie-952a69223/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:godfredentsie8@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Nanti Systems",
      href: "https://www.nantisys.com/",
      badges: [],
      location: "Onsite",
      title: "Frontend Developer",
      logoUrl: "/nanti.png",
      start: "April 2021",
      end: "June 2022",
      description:
        "In April 2021, I embarked on a frontend development internship at Nanti Systems in Accra, Ghana, which lasted until June 2022. During this time, I gained hands-on experience in building and optimizing user interfaces, collaborating with a team to develop web solutions, and enhancing my skills in HTML, CSS, JavaScript, and responsive design. This internship provided valuable insights into professional development practices and reinforced my passion for creating user-centric digital experiences.",
    },
    {
      company: "Jay Webs",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/JayWebs.png",
      start: "July 2022",
      end: "present",
      description:
        "Since July 2022, I have been working as a freelance Front-End Developer, delivering tailored web solutions for clients across various industries. My work involves creating responsive, user-friendly interfaces, ensuring accessibility compliance, and optimizing performance for seamless user experiences. This role has allowed me to hone my technical skills, collaborate with diverse clients, and manage projects independently, fostering a strong sense of ownership and professionalism in my work.",
    },
    
  ],
  education: [
    {
      school: "Pentecost University",
      href: "https://pentvars.edu.gh/",
      degree: "Bsc. Information Technology",
      logoUrl: "/pentvars.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "University Practice Senior High",
      href: "https://upshs.school/",
      degree: "General Arts in Information Technology",
      logoUrl: "/upshs.png",
      start: "2016",
      end: "2019",
    },
    
   
  ],
  projects: [
    {
      title: 'Fashoo Corner',
      href: "https://fashoo-corner.vercel.app/shop",
      dates: "December 2024 - Present",
      active: true,
      description:'•	I developed a shopping cart application using React.js, Tailwind CSS and Framer Motion designed to provide a seamless and intuitive user experience. The project includes features like product selection, dynamic cart updates, dynamics favorite items updates and responsive design, demonstrating my ability to build functional and visually appealing web applications.',
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href:"https://fashoo-corner.vercel.app/shop",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/fashoo-corner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/fashoo.PNG", 
      video: "",
      
      
      
    },
    {
      title: "Coffee Shop",
      href: "https://coffee-shop-opal.vercel.app/all-products",
      dates: "January 2025 - Present",
      active: true,
      description:
        "I created a responsive and interactive Coffee Shop website using React.js. The website allows users to browse and purchase coffee beverages, showcasing a clean and user-friendly design.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        'Framer Motion'
      ],
      links: [
        {
          type: "Website",
          href:"https://coffee-shop-opal.vercel.app/all-products",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/coffee-shop",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Coffee.PNG",
      video: "",
    },
    {
      title: "IP Address Tracker",
      href: "https://jay-ip-tracker.vercel.app/",
      dates: "November 2024 - November 2024",
      active: true,
      description:
        "I developed an IP Address Tracker application using React.js, the [Geolocation API](https://geo.ipify.org/), and the [Leaflet.js API](https://leafletjs.com/). This project allows users to track IP addresses and view location data on an interactive map, combining powerful APIs to provide a seamless and informative experience.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href:"https://jay-ip-tracker.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/IP-Address-Tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ip.PNG",
      video: "",
    },
    {
      title: "Shopping Cart",
      href: "https://jay-shoprite.netlify.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "I developed a shopping cart application using React.js and Tailwind CSS, designed to provide a seamless and intuitive user experience. The project includes features like product selection, dynamic cart updates, and responsive design, demonstrating my ability to build functional and visually appealing web applications.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://jay-shoprite.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/shopping-cart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shop.PNG",
      video: "",
    },
    {
      title: "School Library",
      href: "https://books-labz.vercel.app/",
      dates: "March 2024 - April 2024",
      active: true,
      description: "I built a book library application using React and Tailwind CSS, integrating the Open Library API for dynamic book data and Framer Motion for smooth animations. This project combines functionality, aesthetics, and interactivity to create an engaging user experience.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        "Framer Motion",
        "Open Library API",
      ],
      links: [
        {
          type: "Website",
          href: "https://books-labz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/Book-Library",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/library.PNG",
      video: "",
    },
    
    {
      title: "Kobby Memory Card",
      href: "https://kobby-memory.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "I created a memory card web game using React.js and Tailwind CSS, leveraging the [Marvel API](https://developer.marvel.com/) to dynamically generate images. This project combined interactive gameplay with visually appealing design, showcasing my ability to integrate APIs and craft engaging user experiences.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://kobby-memory.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/kobby-memory",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/memory.PNG",
      video:
        "",
    },
    {
      title: "Library",
      href: "https://jay-library.vercel.app/",
      dates: "July 2023 - present",
      active: true,
      description:
        "I developed a library management application using HTML, CSS, and JavaScript. The app allows users to add books with details such as title, author, pages, and read status, which are displayed as interactive cards. Users can also delete books, providing a simple yet effective tool for organizing a personal library.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://jay-library.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/library",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/lib.PNG",
      video: "",
    },
    {
      title: "Portfolio",
      href: "https://godfred-entsie.vercel.app/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "I built a responsive portfolio website using React.js and Tailwind CSS. The portfolio showcases my skills, projects, and experience in a visually appealing and user-friendly manner.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
        "MagicUi"
      ],
      links: [
        {
          type: "Website",
          href: "https://godfred-entsie.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/jay-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio.PNG",
      video: "",
    },
    {
      title: "Advice Generator",
      href: "https://advice-generatorrr.vercel.app/",
      dates: "September 2024 - Present",
      active: true,
      description:
        "I created an advice generator application using React.js and Tailwind CSS, leveraging the [Advice Slip API](https://api.adviceslip.com/) to fetch and display random pieces of advice. This project highlights my ability to integrate APIs and design simple, user-friendly interfaces. ",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://advice-generatorrr.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/Advice-Genereator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Advice.PNG",
      video: "",
    },
    {
      title: "Contact form",
      href: "https://jay-form.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "This project is a responsive and interactive Contact Form built using React.js. The form allows users to input their details such as name, email, query seletion and message.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://jay-form.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/contact-form",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/contact.PNG",
      video: "",
    },
    
    {
      title: "Newsletter Sign Up",
      href: "https://jay-newsletter.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "I created a simple newsletter sign-up form using React.js, focusing on functionality and user experience. The project includes form validation, dynamic feedback for users, and a clean, responsive design, showcasing my skills in building straightforward and effective React components.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://jay-newsletter.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/newsletter-sign-up",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/news.PNG",
      video:
        "",
    },
    {
      title: "Calculator",
      href: "https://jay-calculator.vercel.app/",
      dates: "March 2023 - March 2023",
      active: true,
      description:
        "I built a calculator app that performs basic arithmetic operations with a clean and responsive user interface. This project highlights my ability to create functional and user-friendly applications using modern web development technologies.",
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://jay-calculator.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/Jay-Calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/calcus.PNG",
      video: "",
    },
    {
      title: "Rock Paper Scissors",
      href: "https://jay-rps.vercel.app/",
      dates: "February 2023 - March 2023",
      active: true,
      description:
        "I created a responsive Rock, Paper, Scissors game using Vanilla JS. The game allows users to play against the computer and provides dynamic feedback based on their choices.",
      technologies: [
       "HTML" ,
       "CSS",
       "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://jay-rps.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/Rock-Paper-Scissors",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rps.PNG",
      video: "",
      
    },
    {
      title: "Age Calculator",
      href: "https://jay-age-calculator.vercel.app/",
      dates: "February 2023 - March 2023",
      active: true,
      description:
        "I developed an age calculator application that allows users to input their date of birth and instantly calculates their exact age in years, months, and days. The project showcases my ability to create interactive and user-friendly tools using modern web development technologies."
      ,
      technologies: [
        "React.js",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://jay-age-calculator.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jayfaculty-design/jay-age-calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/age.PNG",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
