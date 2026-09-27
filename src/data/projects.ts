export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Marketplace' | 'Mini Project' | 'Company Website';
  typeBadge: string;
  summary: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights: string[];
  keyChallenges: string[];
  techStackDetailed: {
    category: string;
    items: string[];
  }[];
  features: string[];
}

export const projectsData: Project[] = [
  {
    slug: 'edusphere',
    title: 'EduSphere',
    subtitle: 'Learning Management System',
    category: 'Full Stack',
    typeBadge: 'Full Stack Platform',
    summary: 'A web-based learning management system with student and instructor portals, video lessons, dynamic quizzes, and course enrollments.',
    description: 'EduSphere is a full-stack learning platform built using React, Node.js, Express, and MongoDB. It allows instructors to publish courses with video content and quizzes, while students can browse courses, track progress, and complete assessments.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Multer'],
    githubUrl: 'https://github.com/mashroofmashru/Edusphere',
    liveUrl: 'https://edusphere-black-nine.vercel.app',
    architectureHighlights: [
      'MVC architecture separating controllers, data models, and API routes.',
      'JWT authentication with HTTP-only cookies and role-based access control (Student / Instructor).',
      'Centralized error handler for clean error messages and status codes.'
    ],
    keyChallenges: [
      'Configuring Multer file uploads for course thumbnail images and video lessons.',
      'Designing MongoDB schemas for structured course modules and quiz scoring.'
    ],
    techStackDetailed: [
      { category: 'Frontend', items: ['React.js (Vite)', 'Tailwind CSS', 'React Router'] },
      { category: 'Backend', items: ['Node.js', 'Express.js', 'JWT Auth', 'Multer'] },
      { category: 'Database', items: ['MongoDB', 'Mongoose'] },
      { category: 'Tools', items: ['Postman', 'Git & GitHub', 'Vercel'] }
    ],
    features: [
      'Separate student and instructor dashboards.',
      'JWT login and role-based route protection.',
      'Course video lesson player and thumbnail uploads.',
      'Interactive quiz module with automatic score calculation.',
      'Student course enrollment and progress tracking.'
    ]
  },
  {
    slug: 'carverse',
    title: 'Carverse',
    subtitle: 'Automotive Marketplace',
    category: 'Marketplace',
    typeBadge: 'Full Stack Web App',
    summary: 'A marketplace application for browsing, listing, and filtering cars with image uploads powered by Cloudinary.',
    description: 'Carverse is a full-stack automotive listing site where users can create vehicle listings with photos, specs, and price details. Buyers can search listings using brand, price, year, and location filters.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
    githubUrl: 'https://github.com/mashroofmashru/Carverse',
    // liveUrl: 'https://github.com/mashroofmashru/Carverse',
    architectureHighlights: [
      'Cloudinary API integration for offloading image storage and CDN delivery.',
      'MongoDB database indexing on brand, price, and year for search filtering.',
      'Protected API endpoints for creating, editing, and deleting car listings.'
    ],
    keyChallenges: [
      'Handling multi-image upload processing smoothly on the server.',
      'Connecting query parameter state to frontend filter components.'
    ],
    techStackDetailed: [
      { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'Axios'] },
      { category: 'Backend', items: ['Node.js', 'Express.js', 'Cloudinary SDK', 'Multer'] },
      { category: 'Database', items: ['MongoDB Atlas', 'Mongoose'] }
    ],
    features: [
      'Filter listings by price, brand, year, and fuel type.',
      'Seller dashboard to post, update, or remove car listings.',
      'Multiple image upload dropzone connected to Cloudinary.',
      'Responsive listing grid and search bar.'
    ]
  },
  {
    slug: 'portfolio-builder',
    title: 'PortfolioBuilder',
    subtitle: 'GitHub Portfolio Generator',
    category: 'Mini Project',
    typeBadge: 'Frontend Tool',
    summary: 'A web tool that fetches public GitHub profile and repository data to generate instant developer portfolio previews.',
    description: 'PortfolioBuilder allows users to enter any GitHub username to automatically fetch repository statistics, top languages, stars, and README details, rendering a customizable portfolio layout.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'GitHub REST API'],
    githubUrl: 'https://github.com/mashroofmashru/PortfolioBuilder',
    liveUrl: 'https://portfolio-builder-rho-gules.vercel.app/',
    architectureHighlights: [
      'Client-side REST API calls to GitHub user and repository endpoints.',
      'Normalized state mapping from raw GitHub response JSON to UI card components.'
    ],
    keyChallenges: [
      'Managing API rate-limiting gracefully when fetching user repos.'
    ],
    techStackDetailed: [
      { category: 'Frontend', items: ['React.js', 'Tailwind CSS', 'GitHub API'] }
    ],
    features: [
      'Instant portfolio generation from any public GitHub username.',
      'Repository highlights sorted by star count.',
      'Responsive design with theme preview options.'
    ]
  },
  {
    slug: 'aakiyo',
    title: 'Aakiyo',
    subtitle: 'Digital Agency Website',
    category: 'Company Website',
    typeBadge: 'Agency Platform',
    summary: 'A modern, high-performance web platform built for Aakiyo, serving as the agency’s official digital hub for creative services, client work, and career opportunities.',
    description: 'Aakiyo is the official website of a modern digital agency, designed to showcase the company’s services, portfolio, brand identity, and career opportunities. The platform provides visitors with an engaging way to explore Aakiyo’s capabilities, discover previous work, and learn about opportunities to join the team.',
    tags: [
      'React',
      'Vite',
      'Tailwind CSS',
      'JavaScript',
      'Vercel'
    ],
    githubUrl: 'https://github.com/mashroofmashru/Aakiyo-website',
    liveUrl: 'https://aakiyo.vercel.app/',
    architectureHighlights: [
      'Component-based frontend architecture for reusable sections and UI elements.',
      'Responsive layouts optimized for desktop, tablet, and mobile experiences.',
      'Production deployment configured through Vercel for fast global delivery.'
    ],
    keyChallenges: [
      'Creating a modern agency experience that balances visual design with performance.',
      'Structuring multiple sections such as services, portfolio, and career opportunities into a cohesive user journey.',
      'Building a responsive interface that maintains consistent branding across different screen sizes.'
    ],
    techStackDetailed: [
      {
        category: 'Frontend',
        items: [
          'React.js',
          'JavaScript',
          'Tailwind CSS'
        ]
      },
      {
        category: 'Build Tool',
        items: [
          'Vite'
        ]
      },
      {
        category: 'Deployment',
        items: [
          'Vercel'
        ]
      }
    ],
    features: [
      'Official digital presence for Aakiyo.',
      'Service showcase for the agency’s creative and technology offerings.',
      'Portfolio section for presenting client and agency work.',
      'Career section for displaying active job and internship opportunities.',
      'Responsive design across desktop, tablet, and mobile devices.',
      'Modern, performance-focused user interface.'
    ]
  }
];
