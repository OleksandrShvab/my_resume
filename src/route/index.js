// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================
var header = {
  name: {
    firstname: 'Taras',
    lastname: 'Bulba',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'місто Київ, Україна',
}
var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    LinkedIn: {
      text: 'LinkedIn',
      herf: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================
router.get('/', function (req, res) {
  res.render('index', {})
})
// ================================================================
router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})
// ================================================================
router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 8,
          isTop: false,
        },
        {
          name: 'Git',
          point: 7,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 7,
          isTop: false,
        },
        {
          name: 'NPM',
          point: 6,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Travel',
          isMain: true,
        },
        {
          name: 'Sport',
          isMain: false,
        },
        {
          name: 'Music',
          isMain: true,
        },
      ],
    },
    footer,
  })
})
// ================================================================
router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      educations: [
        {
          name: 'Bogomolets National Medical University',
          isEnd: true,
        },
        {
          name: 'Shupyk National Healthcare University of Ukraine',
          isEnd: true,
        },
        {
          name: 'Ukrainian Military Medical Academy',
          isEnd: true,
        },
        {
          name: 'IT-BRAINS, Full stack developer course',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'Диплом магістра',
          id: '123',
        },
        {
          name: 'Сертифікат лікаря з медицини невідкладних станів',
          id: '456',
        },
        {
          name: 'Військовий фах 91000',
          id: '789',
        },
      ],
    },
    footer,
  })
})
// ================================================================
router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior fullstack developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2023',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/',
              about: 'My hurd and soft skills',
              stacks: [
                {
                  name1: 'React.js',
                },
                {
                  name2: 'HTML / CSS',
                },
                {
                  name3: 'Node.js',
                },
              ],
              awards: [
                {
                  name1: 'Орден',
                },
                {
                  name2: 'Медалька',
                },
              ],
              stackAmoGnt: '6',
              awardAmoGnt: '8',
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

router.get('/person', function (req, res) {
  res.render('person', {
    layout: 'person',
    page: {
      title: 'Resume | Person',
    },

    person: {
      name: 'Emma Johnson',
      age: '32',
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: '2012',
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            {
              name1:
                'Developed new features for Google Maps',
            },
            {
              name2:
                'Worked on improving search algorithms',
            },
          ],
          year_founded: '1990',
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

module.exports = router
