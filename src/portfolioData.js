const project = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project-Tracker',
    description:
      'The Project-Tracker is a simple web application for mindmapping. We built this project with the coders in mind. It provides a platform for organizing and project reference all in one place.',
    stack: ['Express', 'handlebars', 'MySQL2', 'Sequelize', 'Jest', 'Bootstrap', 'JSmind', 'Bcrypt', 'Cors'],
    sourceCode: 'https://github.com/4therealm/project-tracker-1#built-with',
    livePreview: 'https://project-tracker-app1.herokuapp.com/',
  },
  {
    name: 'e-commerce-backend',
    description:
      ' This project aims to demonstrate how to connect an Express.js API to a MySQL database using Sequelize, and how to perform basic CRUD (Create, Read, Update, Delete) operations using Insomnia.',
    stack: ['MySQL2', 'Express', 'Sequelize', 'dotenv', 'Nodejs'],
    sourceCode: 'https://github.com/4therealm/e-commerce-backend',
    livePreview: 'https://watch.screencastify.com/v/M05jhF47m1MvsfTmqdrj',
  },
  {
    name: 'social-media-api',
    description:
      'an API for my social network that uses a NoSQL database SO THAT my website can handle large amounts of unstructured data',
    stack: ['Express', 'MongoDB', 'Mongoose', 'Nodejs'],
    sourceCode: 'https://github.com/4therealm/social-media-api',
    livePreview: 'https://watch.screencastify.com/v/aSQbWggMF1lgIKdNBmf6',
  },
  {
    name: 'note-taker',
    description:
      'A note taking application where users can write, save and deletes notes.',
    stack: ['Express', 'Nodejs', 'JSON'],
    sourceCode: 'https://github.com/4therealm/note-taker',
    livePreview: 'https://note-application.herokuapp.com/',
  },
  {
    name: 'GuacBottom Recipe Emporium',
    description:
      'The purpose of GuacBottom is to provide busy coders like ourselves a website that gives healthy recipe options with a list of ingredients, directions for preparation, and nutritional information for all ingredients',
    stack: ['Javascript', 'CSS', 'JSON', 'Bootstrap', 'jQuery', 'API'],
    repo: 'https://github.com/4therealm/GuacBottom',
    live: 'https://4therealm.github.io/GuacBottom/',
  },
  {
    name: 'Weather Dashboard',
    description:
      'A weather forecast app with current weather, and next five days.',
    stack: ['Javascript', 'API', 'CSS', 'Bootstrap', 'jQuery'],
    sourceCode: 'https://github.com/4therealm/weather-dashboard',
    livePreview: 'https://4therealm.github.io/weather-dashboard/',
  },
]


const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'MongoDB',
  'Mongoose',
  'Mysql',
  'sequelize',
  'Express',
  'Nodejs',
  'OOP',
  'ORM',
  'jQuery',
  'Project Management',
  'Agile method',
  'Jest',
  'Critical thinking',
  'Googling'

]


const about = {

  name: 'Maxwell Walters',
  role: 'Full-stack Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}


export {about, project, skills}