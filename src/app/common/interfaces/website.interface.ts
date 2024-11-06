// Website Navigation
export interface INavigation {
    label: string;
    link: string;
}


// Projects
export interface IProject {
    link: string;
    url: string;
    title: string;
    desc: string;
}

// Services
export interface IService {
    icon: string;
    title: string;
    skills: string[];
}


// Education Details
export interface IEducationDetail {
    title: string;
    institution: string;
    description: string;
  }
