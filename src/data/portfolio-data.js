// Portfolio data - Easy to update without touching component code
export const personalInfo = {
  name: 'Vaibhavi Kulkarni',
  title: 'Data Engineer & Full-Stack Developer',
  location: 'Pune, India',
  graduation: 'Graduating 2026',
  email: 'vaiibhaviikulkarnii@gmail.com',
  phone: '+91 75179 76019',
  linkedin: 'https://linkedin.com/in/vaibhavi-kulkarni-vaik',
  github: '#', // Add your GitHub URL here
  resumeUrl: '/resume.pdf' // Place your resume.pdf in the /public folder
};

export const aboutMe = {
  intro: "I'm a results-driven MCA student with hands-on experience spanning the full spectrum of modern software development.",
  paragraphs: [
    "From building full-stack web applications with React and Firebase to implementing DevOps pipelines with Docker and Kubernetes, I bring both breadth and depth to technical challenges.",
    "Currently, I'm deepening my expertise in data engineering—learning to build scalable data pipelines, implement ETL/ELT processes, and work with modern tools like Apache Spark and Airflow. My background in data analytics helps me approach engineering problems with an insight-first mindset.",
    "I'm passionate about hackathons, collaborative problem-solving, and building solutions that bridge the gap between complex data and actionable insights."
  ],
  // stats: [
  //     // { number: '2+', label: 'Years Building' },
  //     // { number: '3', label: 'Major Projects' },
  //     // { number: '10+', label: 'Certifications' },
  //     // { number: '2', label: 'IBM Internships' },
  // ]
};

export const skills = {
  core: ['Python', 'JavaScript', 'SQL', 'ReactJS', 'Firebase', 'MySQL'],
  dataEngineering: ['Data Pipelines', 'ETL/ELT', 'Apache Spark', 'Airflow', 'Data Warehousing'],
  devops: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Git']
};

export const projects = [
  {
    name: 'RandomlyRight',
    year: '2024',
    category: 'Full-Stack Web App',
    description: 'Anonymous advice platform with real-time capabilities and complete DevOps pipeline',
    tech: ['ReactJS', 'Firebase', 'Docker', 'Jenkins', 'Kubernetes', 'SonarQube'],
    impact: [
      'User authentication & real-time data handling',
      'Automated CI/CD deployment',
      'Production-grade infrastructure'
    ],
    status: 'Live',
    link: 'https://randomlyright.vercel.app/' // Add your project URL
  },
  {
    name: 'BillCraftr',
    year: '2024',
    category: 'Business Tool',
    description: 'Professional invoice generation tool enabling businesses to create customized invoices',
    tech: ['ReactJS', 'Firebase', 'Bootstrap', 'Vercel'],
    impact: [
      'Intuitive form validation',
      'Data persistence layer',
      'Cross-device responsive design'
    ],
    status: 'Live',
    link: 'https://billcraftr.vercel.app/' // Add your project URL
  },
  {
    name: 'Stock Analysis Dashboard',
    year: '2025',
    category: 'Data Application',
    description: 'Interactive data-driven application for historical stock data analysis and visualization',
    tech: ['Python', 'ReactJS', 'SQL'],
    impact: [
      'Customizable dashboards',
      'Backend data pipelines',
      'Financial data transformation'
    ],
    status: 'In Development',
    link: '#' // Add your project URL
  }
];

export const experience = [
  {
    role: 'Data Analytics Intern',
    company: 'IBM SkillsBuild',
    period: 'June 2024 – August 2024',
    type: 'Remote',
    highlights: [
      'Comprehensive data analysis',
      'Data-driven reports & visualizations',
      'Statistical methods & trend analysis'
    ]
  },
  {
    role: 'Data Visualization Intern',
    company: 'IBM SkillsBuild',
    period: 'Dec 2023 – Jan 2024',
    type: 'Remote',
    highlights: [
      'Interactive dashboards',
      'AI-powered visualization tools',
      'Stakeholder presentations'
    ]
  }
];

export const education = [
  {
    degree: 'MCA -Master of Computer Applications',
    school: 'MES Institute of Management and Career Courses',
    year: '2024 – 2026'
  },
  {
    degree: 'BBA(CA) - Bachelor of Business Administration and Computer Applications',
    school: "St. Mira's College for Girls",
    year: '2021 – 2024'
  }
];

export const certifications = [
  {
    provider: 'Coursera',
    name: 'Professional Data Science Course',
    year: '2025',
    category: 'Data Science',
    description: 'Data science concepts, methodologies, and tools, including data collection, cleaning, and wrangling; exploratory data analysis; data visualization; statistical analysis; machine learning model building and evaluation; and working with Python, SQL, Jupyter Notebooks, and real-world datasets.'
  },
  {
    provider: 'IBM',
    name: 'Project Management Fundamentals',
    year: '2024',
    category: 'Management',
    description: 'Foundational project management skills, including planning, executing, and managing projects using key frameworks, processes, and deliverables across the full project lifecycle.'
  },
  {
    provider: 'IBM',
    name: 'Web Development Fundamentals',
    year: '2024',
    category: 'Development',
    description: 'Comprehensive knowledge of web development, including building, testing, and deploying websites using HTML, CSS, and JavaScript, along with awareness of industry roles and required skills.'
  },
  {
    provider: 'IBM',
    name: 'Getting Started with Artificial Intelligence',
    year: '2024',
    category: 'AI/ML',
    description: 'Foundational understanding of AI and generative AI, with practical experience in crafting and refining prompts using AI tools.'
  },
  {
    provider: 'IBM',
    name: 'Artificial Intelligence Fundamentals',
    year: '2024',
    category: 'AI/ML',
    description: 'Foundational knowledge of AI concepts, tools, ethics, and real-world applications, along with awareness of industry roles and skills in the field.'
  },
  {
    provider: 'Edureka',
    name: 'Salesforce Administrator and App Builder Certification',
    year: '2024',
    category: 'Salesforce',
    description: 'Understanding of Salesforce administration covering data modeling, security setup, automation processes, Sales Cloud and Service Cloud features, along with creating reports and dashboards and managing core platform components.'
  },
  {
    provider: 'Edureka',
    name: 'Salesforce Platform Developer 1 Certification',
    year: '2024',
    category: 'Salesforce',
    description: 'Working knowledge of Salesforce application development, including writing business logic and building customized applications using Apex and Visualforce on the Force.com platform, with an understanding of platform capabilities and development practices.'
  },
  {
    provider: 'DYDPU',
    name: 'Hackathon 2025 Participant',
    year: '2025',
    category: 'Achievement',
    description: 'Participated in the DYPDPU Hackathon (30+ hrs), gaining hands-on experience in developing solutions using emerging technologies such as Generative AI, AI/ML, Web/Blockchain, and IoT in a collaborative and time-constrained environment.'
  }
];

export const interests = [
  {
    icon: '🌱',
    title: 'Gardening',
    description: "There's something deeply satisfying about watching seeds transform into thriving plants. My balcony garden is my happy place—from herbs to succulents, each plant teaches me patience and the beauty of slow, steady growth.",
    tags: ['Plants', 'Patience', 'Growth']
  },
  {
    icon: '📚',
    title: 'Reading',
    description: 'Always have a book on the go. From tech blogs to fiction, reading fuels my curiosity and keeps my mind wandering to new ideas.',
    tags: ['Books', 'Learning', 'Fiction']
  },
  {
    icon: '📸',
    title: 'Photography',
    description: 'Capturing moments and finding beauty in everyday details. Every photo tells a story worth preserving.',
    tags: ['Moments', 'Stories', 'Art']
  },
  {
    icon: '🎵',
    title: 'Music',
    description: "Whether I'm playing an instrument or discovering new artists, music is my constant companion through code sessions and life.",
    tags: ['Instruments', 'Artists', 'Rhythm']
  },
  {
    icon: '✈️',
    title: 'Travel',
    description: 'Exploring new places, cultures, and cuisines. Every trip is a chance to step outside my comfort zone and gain fresh perspectives.',
    tags: ['Adventure', 'Cultures', 'Explore']
  },
  {
    icon: '🎨',
    title: 'Art & Design',
    description: 'From UI inspiration to visual storytelling, I love exploring the intersection of aesthetics and functionality.',
    tags: ['Design', 'Aesthetics', 'Creativity']
  },
  {
    icon: '🍳',
    title: 'Cooking',
    description: 'Experimenting with recipes and flavors. Cooking is like coding—creative problem-solving with delicious outcomes.',
    tags: ['Recipes', 'Flavors', 'Experiments']
  }
];