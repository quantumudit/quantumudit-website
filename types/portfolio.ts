// ============================================
// PROFILE TYPES
// ============================================

export interface Profile {
    name: string;
    title: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    bio: string;
    avatar: string;
    resumeUrl: string;
    social: SocialLinks;
    availability: Availability;
}

export interface SocialLinks {
    linkedin: string;
    github: string;
    twitter: string;
    email: string;
    website: string;
}

export interface Availability {
    status: "open" | "busy" | "closed";
    message: string;
}

// ============================================
// SKILLS TYPES
// ============================================

export interface SkillsData {
    categories: SkillCategory[];
}

export interface SkillCategory {
    id: number;
    category: string;
    icon: string;
    items: string[];
}

// ============================================
// PROJECTS TYPES
// ============================================

export interface ProjectsData {
    projects: Project[];
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    technologies: string[];
    image: string;
    github: string | null;
    demo: string | null;
    highlights: string[];
    metrics: ProjectMetrics;
    featured: boolean;
    category: ProjectCategory;
    startDate: string;
    endDate: string;
    status: ProjectStatus;
}

export interface ProjectMetrics {
    [key: string]: string | undefined;  // Dynamic keys, optional string values
}

export type ProjectCategory =
    | "machine-learning"
    | "visualization"
    | "nlp"
    | "optimization"
    | "etl"
    | "other";

export type ProjectStatus =
    | "completed"
    | "in-progress"
    | "planned"
    | "template";

// ============================================
// EXPERIENCE TYPES
// ============================================

export interface ExperienceData {
    experiences: Experience[];
}

export interface Experience {
    id: number;
    company: string;
    position: string;
    location: string;
    type: EmploymentType;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
}

export type EmploymentType =
    | "Full-time"
    | "Part-time"
    | "Contract"
    | "Freelance"
    | "Internship";

// ============================================
// EDUCATION TYPES
// ============================================

export interface EducationData {
    education: Education[];
}

export interface Education {
    id: number;
    institution: string;
    degree: string;
    field: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;  // Optional field
    description: string;
    coursework: string[];
    achievements: string[];
}

// ============================================
// CERTIFICATIONS TYPES
// ============================================

export interface CertificationsData {
    certifications: Certification[];
}

export interface Certification {
    id: number;
    name: string;
    issuer: string;
    date: string;
    expiryDate: string | null;
    credentialId: string;
    credentialUrl: string;
    status: CertificationStatus;
    description: string;
    skills: string[];
}

export type CertificationStatus = "active" | "expired";

