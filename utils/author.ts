export interface Author {
  name: string;
  bio: string;
  shortBio: string;
  avatar?: string;
  website?: string;
  email?: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    youtube?: string;
  };
  credentials: {
    title?: string;
    company?: string;
    experience?: string;
    education?: string[];
    certifications?: string[];
    achievements?: string[];
  };
  expertise: string[];
  location?: string;
  joinDate?: string;
}

export const authorData: Author = {
  name: "CrimeLens",
  bio: "Main ek passionate writer aur researcher hoon jo real-life crimes aur unke peeche ke sach ko uncover karna pasand karta hoon. CrimeLens ke through main India ke true crime cases, real movie inspirations, aur unreported kahaniyon ko simple Hinglish me likhta hoon — taaki har reader tak sach bina filter ke pahunche.",
  shortBio: "True crime researcher and writer uncovering India’s real stories in Hinglish.",
  avatar: "https://ui-avatars.com/api/?name=Crime+Lens&background=000000&color=ffffff&size=200&bold=true",
  website: "https://crimelens.in",
  email: "contact@crimelens.in",
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
  credentials: {
    title: "True Crime Writer & Researcher",
    company: "CrimeLens Media",
    experience: "4+ years in journalism and crime research",
    education: [
      "Bachelor’s in Mass Communication & Journalism",
      "Diploma in Digital Media and Storytelling"
    ],
    certifications: [
      "Investigative Journalism Certification – Coursera",
      "Ethical Reporting & Digital Safety – Google News Initiative"
    ],
    achievements: [
      "Published 50+ verified true crime stories",
      "Featured by multiple indie media outlets",
      "Interviewed retired police officers for crime case studies",
      "Built one of India’s first Hinglish true-crime blogs"
    ]
  },
  expertise: [
    "True Crime Writing",
    "Investigative Research",
    "Content Strategy",
    "SEO Writing",
    "Digital Storytelling",
    "Fact-Checking",
    "Media Ethics",
    "Indian Legal Cases",
    "Psychological Profiling",
    "Blog Management"
  ],
  location: "India",
  joinDate: "2025"
};


export function getAuthorData(): Author {
  return authorData;
}

export function getAuthorSocialLinks(): Author['social'] {
  return authorData.social;
}

export function getAuthorCredentials(): Author['credentials'] {
  return authorData.credentials;
}

export function getAuthorExpertise(): string[] {
  return authorData.expertise;
}
