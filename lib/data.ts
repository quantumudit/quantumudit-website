import profileData from '@/data/profile.json';
import skillsData from '@/data/skills.json';
import projectsData from '@/data/projects.json';
import experienceData from '@/data/experience.json';
import educationData from '@/data/education.json';
import certificationsData from '@/data/certifications.json';

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
// EXPERIENCE DATA
// ============================================

export const getExperience = (): Experience[] => {
    return experienceData.experiences as Experience[];
};

export const getCurrentExperience = (): Experience | undefined => {
    return experienceData.experiences.find(exp => exp.current) as Experience | undefined;
};

// ============================================
// EDUCATION DATA
// ============================================

export const getEducation = (): Education[] => {
    return educationData.education as Education[];
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