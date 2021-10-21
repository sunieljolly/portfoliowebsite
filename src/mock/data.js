import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Suniel Jolly', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Suniel Jolly',
  subtitle: "JS Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://github.com/sunieljolly', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sunieljolly@googlemail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    }, */
/*     {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
/*     {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sunieljolly',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
