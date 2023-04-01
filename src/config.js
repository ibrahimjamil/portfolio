module.exports = {
  siteTitle: 'Ibrahim Jamil',
  siteDescription:
    'I am a full stack web developer with expertise in web, mobile, devops with skills in react-native, nestjs, mern',
  siteKeywords:
    'software engineer, web, mobile, react-native, reactjs, nestjs, nodejs, nextjs, devops, docker, kubernetes',
  siteUrl: 'https://yashitanamdeo.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ibrahim Jamil',
  location: 'Lahore, Pakistan',
  email: 'ibrahimjamil090@gmail.com',
  github: 'https://github.com/yashitanamdeo',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ibrahimjamil',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/muhammad-ibrahim-6933b9198/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ibrahimjamil11/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
