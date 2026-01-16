import profileData from '@/data/portfolio/profile.json';
import skillsData from '@/data/portfolio/skills.json';
import projectsData from '@/data/portfolio/projects.json';
import experienceData from '@/data/portfolio/experience.json';
import educationData from '@/data/portfolio/education.json';
import certificationsData from '@/data/portfolio/certifications.json';

import type {
    Profile,
    SkillCategory,
    Project,
    Experience,
    Education,
    Certification
} from '@/types/portfolio';

// ============================================
// PROFILE DATA
// ============================================

export const getProfile = (): Profile => {
    return profileData as Profile;
};

// ============================================
// SKILLS DATA
// ============================================

export const getSkills = (): SkillCategory[] => {
    return skillsData.categories as SkillCategory[];
};

export const getSkillsByCategory = (categoryName: string): SkillCategory | undefined => {
    return skillsData.categories.find(
        cat => cat.category.toLowerCase() === categoryName.toLowerCase()
    ) as SkillCategory | undefined;
};

// ============================================
// ADVANCED SKILLS FUNCTIONS
// ============================================

/**
 * Get all skills as flat array
 */
export const getAllSkills = (): string[] => {
    return getSkills().flatMap(category => category.items);
};

/**
 * Get total skills count
 */
export const getSkillsCount = (): number => {
    return getAllSkills().length;
};

/**
 * Search skills by keyword
 */
export const searchSkills = (keyword: string): SkillCategory[] => {
    const searchTerm = keyword.toLowerCase();
    return getSkills()
        .map(category => ({
            ...category,
            items: category.items.filter(skill =>
                skill.toLowerCase().includes(searchTerm)
            )
        }))
        .filter(category => category.items.length > 0);
};

/**
 * Get skills by category name
 */
export const getSkillsInCategory = (categoryName: string): string[] => {
    const category = getSkillsByCategory(categoryName);
    return category ? category.items : [];
};

// ============================================
// PROJECTS DATA
// ============================================

export const getProjects = (): Project[] => {
    return projectsData.projects as Project[];
};

export const getFeaturedProjects = (): Project[] => {
    return projectsData.projects.filter(p => p.featured) as Project[];
};

export const getProjectBySlug = (slug: string): Project | undefined => {
    return projectsData.projects.find(p => p.slug === slug) as Project | undefined;
};

export const getProjectsByCategory = (category: string): Project[] => {
    return projectsData.projects.filter(
        p => p.category === category
    ) as Project[];
};

// ============================================
// ADVANCED PROJECT FUNCTIONS
// ============================================

/**
 * Get projects sorted by date (newest first)
 */
export const getProjectsSortedByDate = (): Project[] => {
    return getProjects().sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateB.getTime() - dateA.getTime(); // Descending order
    });
};

/**
 * Search projects by keyword in title or description
 */
export const searchProjects = (keyword: string): Project[] => {
    const searchTerm = keyword.toLowerCase();
    return getProjects().filter(project =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm) ||
        project.technologies.some(tech =>
            tech.toLowerCase().includes(searchTerm)
        )
    );
};

/**
 * Get projects by technology
 */
export const getProjectsByTechnology = (technology: string): Project[] => {
    return getProjects().filter(project =>
        project.technologies.some(tech =>
            tech.toLowerCase() === technology.toLowerCase()
        )
    );
};

/**
 * Get projects by status
 */
export const getProjectsByStatus = (status: string): Project[] => {
    return getProjects().filter(project => project.status === status);
};

/**
 * Get completed projects count
 */
export const getCompletedProjectsCount = (): number => {
    return getProjects().filter(p => p.status === 'completed').length;
};

/**
 * Get all unique technologies from projects
 */
export const getAllTechnologies = (): string[] => {
    const allTech = getProjects().flatMap(project => project.technologies);
    return [...new Set(allTech)].sort(); // Unique and sorted
};

/**
 * Get all unique project categories
 */
export const getAllCategories = (): string[] => {
    const categories = getProjects().map(project => project.category);
    return [...new Set(categories)].sort();
};

/**
 * Get project statistics
 */
export const getProjectStats = () => {
    const projects = getProjects();
    return {
        total: projects.length,
        completed: projects.filter(p => p.status === 'completed').length,
        inProgress: projects.filter(p => p.status === 'in-progress').length,
        featured: projects.filter(p => p.featured).length,
        technologies: getAllTechnologies().length,
        categories: getAllCategories().length
    };
};

// ============================================
// EXPERIENCE DATA
// ============================================

export const getExperience = (): Experience[] => {
    return experienceData.experiences as Experience[];
};

export const getCurrentExperience = (): Experience | undefined => {
    return experienceData.experiences.find(exp => exp.current) as Experience | undefined;
};

// ============================================
// ADVANCED EXPERIENCE FUNCTIONS
// ============================================

/**
 * Get years of experience (from earliest start date to now)
 */
export const getYearsOfExperience = (): number => {
    const experiences = getExperience();
    if (experiences.length === 0) return 0;

    const earliestDate = experiences.reduce((earliest, exp) => {
        const expDate = new Date(exp.startDate);
        return expDate < earliest ? expDate : earliest;
    }, new Date());

    const now = new Date();
    const years = (now.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(years);
};

/**
 * Get all companies worked at
 */
export const getAllCompanies = (): string[] => {
    return getExperience().map(exp => exp.company);
};

/**
 * Get experience sorted by date (newest first)
 */
export const getExperienceSortedByDate = (): Experience[] => {
    return getExperience().sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateB.getTime() - dateA.getTime();
    });
};

/**
 * Get all technologies used in experience
 */
export const getAllExperienceTechnologies = (): string[] => {
    const allTech = getExperience().flatMap(exp => exp.technologies);
    return [...new Set(allTech)].sort();
};


// ============================================
// EDUCATION DATA
// ============================================

export const getEducation = (): Education[] => {
    return educationData.education as Education[];
};

// ============================================
// ADVANCED EDUCATION FUNCTIONS
// ============================================

/**
 * Get highest degree
 */
export const getHighestDegree = (): Education | undefined => {
    const education = getEducation();
    if (education.length === 0) return undefined;

    const degreeHierarchy: { [key: string]: number } = {
        'PhD': 5,
        'Ph.D.': 5,
        'Doctorate': 5,
        'Master': 4,
        'M.S.': 4,
        'M.A.': 4,
        'MBA': 4,
        'Bachelor': 3,
        'B.S.': 3,
        'B.A.': 3,
        'Associate': 2,
        'Diploma': 1
    };

    return education.reduce((highest, edu) => {
        const highestRank = Math.max(...Object.keys(degreeHierarchy)
            .filter(key => highest.degree.includes(key))
            .map(key => degreeHierarchy[key]), 0);

        const currentRank = Math.max(...Object.keys(degreeHierarchy)
            .filter(key => edu.degree.includes(key))
            .map(key => degreeHierarchy[key]), 0);

        return currentRank > highestRank ? edu : highest;
    });
};

/**
 * Get all coursework as flat array
 */
export const getAllCoursework = (): string[] => {
    const allCourses = getEducation().flatMap(edu => edu.coursework);
    return [...new Set(allCourses)].sort();
};


// ============================================
// CERTIFICATIONS DATA
// ============================================

export const getCertifications = (): Certification[] => {
    return certificationsData.certifications as Certification[];
};

export const getActiveCertifications = (): Certification[] => {
    return certificationsData.certifications.filter(
        cert => cert.status === 'active'
    ) as Certification[];
};

// ============================================
// ADVANCED CERTIFICATIONS FUNCTIONS
// ============================================

/**
 * Get certifications sorted by date (newest first)
 */
export const getCertificationsSortedByDate = (): Certification[] => {
    return getCertifications().sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });
};

/**
 * Get certifications by issuer
 */
export const getCertificationsByIssuer = (issuer: string): Certification[] => {
    return getCertifications().filter(cert =>
        cert.issuer.toLowerCase().includes(issuer.toLowerCase())
    );
};

/**
 * Get expired certifications
 */
export const getExpiredCertifications = (): Certification[] => {
    const now = new Date();
    return getCertifications().filter(cert => {
        if (!cert.expiryDate) return false;
        const expiryDate = new Date(cert.expiryDate);
        return expiryDate < now;
    });
};

/**
 * Get all certification skills
 */
export const getAllCertificationSkills = (): string[] => {
    const allSkills = getCertifications().flatMap(cert => cert.skills);
    return [...new Set(allSkills)].sort();
};

// ============================================
// AGGREGATE FUNCTIONS
// ============================================

export const getAllData = () => {
    return {
        profile: getProfile(),
        skills: getSkills(),
        projects: getProjects(),
        experience: getExperience(),
        education: getEducation(),
        certifications: getCertifications(),
    };
};

// ============================================
// DASHBOARD & STATISTICS
// ============================================

/**
 * Get comprehensive portfolio statistics
 */
export const getPortfolioStats = () => {
    return {
        profile: {
            name: getProfile().name,
            title: getProfile().title,
            yearsOfExperience: getYearsOfExperience()
        },
        projects: getProjectStats(),
        skills: {
            total: getSkillsCount(),
            categories: getSkills().length
        },
        experience: {
            jobs: getExperience().length,
            currentCompany: getCurrentExperience()?.company || null,
            companies: getAllCompanies()
        },
        education: {
            degrees: getEducation().length,
            highest: getHighestDegree()?.degree || null
        },
        certifications: {
            total: getCertifications().length,
            active: getActiveCertifications().length,
            expired: getExpiredCertifications().length
        },
        technologies: {
            unique: getAllTechnologies().length,
            list: getAllTechnologies().slice(0, 10) // Top 10
        }
    };
};

/**
 * Get quick stats for homepage
 */
export const getQuickStats = () => {
    return {
        yearsExperience: getYearsOfExperience(),
        projectsCompleted: getCompletedProjectsCount(),
        skillsCount: getSkillsCount(),
        certificationsCount: getActiveCertifications().length
    };
};