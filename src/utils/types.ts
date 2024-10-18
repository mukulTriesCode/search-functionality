export interface CurrentWorkProps {
  currentWorkData: {
    title?: string;
    description?: string;
    links?: {
      url: string;
      name: string;
    }[];
  }[];
}

export interface HeaderData {
  title?: string;
  navLinks: { url: string; label: string }[];
}

export interface SkillData {
  label: string;
  data: {
    label: string;
    technologies: {
      label: string;
      logo: string;
    }[];
  }[];
}

export interface WorkData {
  title?: string;
  projects: {
    title?: string;
    description?: string;
  }[];
}
