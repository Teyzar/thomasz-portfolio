const person = {
    firstName: 'Thomas',
    lastName:  'Zaragoza',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'FullStack Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Manila',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Tagalog']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Teyzar',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/zaragozathomasandrew/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:zaragozathomasandrew@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Hi, I'm Thomas ✨</>,
    subline: <>I'm a passionate FullStack Developer who loves bringing ideas to life through code.<br/>Whether it's exploring new technologies or crafting creative solutions, I'm always excited to build something amazing.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Thomas is a Computer Engineering graduate from Bacolod City who has evolved into a skilled FullStack Developer. He specializes in Laravel for robust backend solutions and Flutter for cross-platform mobile development. With a passion for clean code and efficient solutions, he transforms complex technical challenges into seamless user experiences.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'G.O Green Enterprises Inc.',
                timeframe: '2023 - Present',
                role: 'Web Developer',
                achievements: [
                    <>Built a product catalog editor for users, allowing them to add categories, upload images, and edit content.</>,
                    <>Developed an admin dashboard to manage products, users, and access permissions.</>,
                    <>Implemented search features in the admin panel for easier content management.</>,
                    <>Fixed frontend issues, enhancing the user experience and interface stability with JavaScript and CSS improvements</>,
                    <>Maintained and added multiple modules across different websites and third-party platforms.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/plumbersstock/plumbersstock-01.png',
                        alt: 'PlumbersStock',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/adamsandco/adamsandco-01.png',
                        alt: 'Adams and Co',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/swplumbing/swplumbing-01.png',
                        alt: 'SW Plumbing',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'AdvancePro Technologies',
                timeframe: '2022 - 2024',
                role: 'Flutter Developer',
                achievements: [
                    <>Frontend Developer Specializing in cross-platform applications for Android, iOS, and macOS.</>,
                    <>Created RESTful APIs and developed stored procedures for the backend and integrated them with the frontend.</>,
                    <>Implemented customer-requested inventory reports and delivered them on time with high accuracy.</>,
                    <>Used Git for version control and collaboration with the team.</>
                ],
                images: [
                    {
                        src: '/images/projects/aptx/aptx-01.png',
                        alt: 'APTX',
                        width: 16,
                        height: 9
                    }
                 ]
            },
            {
                company: 'Cloversoft Solutions',
                timeframe: '2021',
                role: 'Flutter Developer',
                achievements: [
                    <>Modular Design: Easy integration into diverse projects, regardless of API complexity.</>,
                    <>Configurability: Customizable settings for different APIs, including endpoints and authentication.</>,
                    <>Data Transformation: Adapting data formats to match API and application requirements.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'University of Saint La Salle Bacolod',
                description: <>Bachelor of Science in Computer Engineering</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Flutter',
                description: <>Developed cross-platform mobile applications using Flutter, focusing on performance and user experience.</>,
                images: []
            },
            {
                title: 'Laravel',
                description: <>Built scalable and secure web applications using Laravel framework.</>,
                images: []
            },
            {
                title: 'ASP.NET Core',
                description: <>Developed web API using ASP.NET Core, focusing on RESTful architecture and scalability.</>,
                images: []
            },
            {
                title: 'Next.js',
                description: <>Developed modern web applications with Next.js, focusing on performance optimization, server-side rendering, and exceptional user experiences.</>,
                images: []
            }
        ]
    }
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

export { person, social, home, about, work };