import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Antoine Le Louët',
    photo: '/images/photo.jpg',
    photoBackEmoji: '👨‍💻',
    title: {
      en: 'Freelance Full-Stack Developer / Tech Lead (TypeScript · React · Next.js · Java)',
      fr: 'Développeur Full-Stack Freelance / Tech Lead (TypeScript · React · Next.js · Java)',
    },
    subtitle: {
      en: '8+ years of experience — delivery, architecture & scale-up',
      fr: '8+ ans d’expérience — delivery, architecture & montée en charge',
    },
    location: 'Forest, Belgium (Brussels area)',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Antoine Le Louët — Freelance Full-Stack / Tech Lead (TS · React · Next.js · Java)',
    description:
      'Interactive resume of Antoine Le Louët, freelance Full-Stack Developer / Tech Lead. TypeScript, React, Next.js, Node.js, Java — architecture, performance, maintainability, CI/CD.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [

    { type: 'linkedin', label: 'Antoine Le Louët', href: 'https://www.linkedin.com/in/antoine-le-lou%C3%ABt/' },
    { type: 'email', label: 'a.lelouet.freelance@gmail.com' },
    { type: 'phone', label: '+33 6 23 22 03 32' },
    { type: 'location', label: 'Forest, Belgium (Brussels)' },
    { type: 'website', label: 'Malt', href: 'https://www.malt.fr/profile/antoinelelouet' },
    { type: 'github', label: 'Github', href: 'https://github.com/dokor' },
    { type: 'website', label: 'lelouet.fr', href: 'https://lelouet.fr/' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' } },
        { name: { en: 'Spanish', fr: 'Espagnol' }, level: { en: 'Limited working', fr: 'Notions professionnelles' } },
      ],
    },
    {
      title: { en: 'Frontend', fr: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Tailwind CSS' },
      ],
    },
    {
      title: { en: 'Backend', fr: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'Java' },
        { name: 'Python' },
        { name: 'REST APIs' },
      ],
    },
    {
      title: { en: 'Databases & Search', fr: 'Bases de données & Search' },
      type: 'badges',
      items: [
        { name: 'PostgreSQL' },
        { name: 'MySQL' },
        { name: 'Microsoft SQL Server' },
      ],
    },
    {
      title: { en: 'DevOps & Cloud', fr: 'DevOps & Cloud' },
      type: 'badges',
      items: [
        { name: 'Docker' },
        { name: 'CI/CD' },
        { name: 'Vercel' },
        { name: 'Microsoft Azure' },
        { name: 'Google Cloud Platform' },
        { name: 'Nginx' },
        { name: 'Apache' },
      ],
    },
    {
      title: { en: 'Architecture & Practices', fr: 'Architecture & Pratiques' },
      type: 'text',
      items: [
        {
          name: {
            en: 'Tech leadership, architecture, maintainability, performance, code reviews, TDD, Agile/Scrum',
            fr: 'Leadership technique, architecture, maintenabilité, performance, code review, TDD, Agile/Scrum',
          },
        },
      ],
    },
    {
      title: { en: 'SEO & Web Performance', fr: 'SEO & Performance Web' },
      type: 'badges',
      items: [{ name: 'Lighthouse' }, { name: 'Google Search Console' }, { name: 'Semrush' }, { name: 'SSR' }],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'brico',
      company: { en: 'Brico', fr: 'Brico' },
      role: { en: 'Freelance Full-Stack Developer', fr: 'Développeur Full-Stack Freelance' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: 'Jan 2026 - Present', fr: 'Janv. 2026 - Présent' },
      description: {
        en: 'Autonomous maintenance and continuous improvements for jobs.brico.be (bug fixing, refactoring legacy code, UI tweaks, functional evolutions).',
        fr: 'Maintenance et évolutions de jobs.brico.be en autonomie (corrections de bugs, refactor legacy, ajustements UI, évolutions fonctionnelles).',
      },
      techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Ongoing maintenance & delivery-focused improvements on an existing platform with legacy code constraints.',
          fr: 'Maintenance continue et évolutions sur une plateforme existante avec contraintes legacy.',
        },
        tasks: {
          en: [
            'Continuous bug fixing (visual & functional) to ensure a consistent UX',
            'Legacy code refactoring to improve maintainability and readability',
            'UI adjustments and visual optimizations',
            'Functional evolutions based on business needs',
            'End-to-end ownership: prioritization, implementation, quality and follow-up',
          ],
          fr: [
            'Correction continue de bugs (visuels et fonctionnels) pour garantir une UX cohérente',
            'Refactorisation du code legacy (maintenabilité, lisibilité, pérennité)',
            'Optimisations visuelles et ajustements UI',
            'Évolutions fonctionnelles en réponse aux besoins métiers',
            'Gestion bout-en-bout : priorisation, dev, qualité et suivi',
          ],
        },
        env: {
          en: 'Next.js / React / TypeScript / Tailwind CSS',
          fr: 'Next.js / React / TypeScript / Tailwind CSS',
        },
      },
    },

    {
      id: 'roole-donnezvotrevoiture',
      company: { en: 'Roole', fr: 'Roole' },
      role: { en: 'Freelance Full-Stack Developer', fr: 'Développeur Full-Stack Freelance' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: 'Mar 2025 - Sep 2025', fr: 'Mars 2025 - Sept. 2025' },
      description: {
        en: 'Built DonnezVotreVoiture.org end-to-end as the sole developer: architecture, fullstack implementation, deployment and continuous improvements for a social-impact platform.',
        fr: "Développement complet de DonnezVotreVoiture.org en tant que développeur unique : architecture, implémentation fullstack, déploiement et amélioration continue (plateforme à impact).",
      },
      techs: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Airtable', 'Vercel'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Single-developer delivery: fast iterations with business stakeholders, with focus on UX and performance.',
          fr: 'Delivery en autonomie : itérations rapides avec les équipes métier, focus UX et performance.',
        },
        tasks: {
          en: [
            'Designed and implemented the fullstack architecture from scratch',
            'Built front/back flows and integrated Airtable as a lightweight database',
            'Deployed on Vercel (serverless) and ensured reliable releases',
            'Optimized UX and performance',
            'Tracked KPIs and delivered continuous improvements with stakeholders',
          ],
          fr: [
            'Conception technique et développement fullstack from scratch',
            'Mise en place des flux front/back et intégration Airtable',
            'Déploiement sur Vercel (serverless) et fiabilisation des releases',
            'Optimisation UX et performances',
            "Suivi KPI et amélioration continue avec les équipes métier",
          ],
        },
        env: {
          en: 'Next.js / React / TypeScript / Node.js / Airtable / Vercel',
          fr: 'Next.js / React / TypeScript / Node.js / Airtable / Vercel',
        },
      },
    },

    {
      id: 'robin-pandikian',
      company: { en: 'Robin Pandikian', fr: 'Robin Pandikian' },
      role: { en: 'Freelance Web Developer & SEO', fr: 'Développeur Web & SEO Freelance' },
      type: { en: 'Freelance', fr: 'Freelance' },
      period: { en: 'Dec 2023 - Present', fr: 'Déc. 2023 - Présent' },
      description: {
        en: 'Created a custom WordPress showcase website and grew online visibility through technical SEO and Google Ads campaigns.',
        fr: 'Création d’un site vitrine WordPress sur-mesure et accompagnement visibilité (SEO technique + campagnes Google Ads).',
      },
      techs: ['WordPress', 'SEO', 'Google Ads', 'Google Search Console', 'Semrush'],
      details: {
        context: {
          en: 'Crafted a brand-aligned website and continuously optimized acquisition and conversion.',
          fr: 'Site aligné avec l’image de marque, optimisation continue acquisition & conversion.',
        },
        tasks: {
          en: [
            'Built a custom WordPress theme tailored to the brand',
            'SEO improvements using Search Console and auditing tools (semantic research with Semrush)',
            'Set up and managed Google Ads campaigns with performance tracking',
            'Ongoing support: digital strategy, monitoring and conversion optimization',
          ],
          fr: [
            'Développement WordPress : template sur-mesure',
            'SEO : optimisations via Search Console + audit (étude sémantique avec Semrush)',
            'Google Ads : gestion des campagnes et suivi des performances',
            'Accompagnement : stratégie, suivi et optimisation des conversions',
          ],
        },
        env: {
          en: 'WordPress / SEO / Google Ads / Google Search Console / Semrush',
          fr: 'WordPress / SEO / Google Ads / Google Search Console / Semrush',
        },
      },
    },

    {
      id: 'coreoz-techlead',
      company: { en: 'Coreoz', fr: 'Coreoz' },
      role: { en: 'Full-Stack Engineer / Tech Lead', fr: 'Ingénieur Full-Stack / Tech Lead' },
      type: { en: 'Permanent', fr: 'CDI' },
      period: { en: 'Jan 2019 - Aug 2024', fr: 'Janv. 2019 - Août 2024' },
      description: {
        en: 'Delivered and led strategic projects: fullstack delivery, team leadership, architecture, DevOps, quality, SEO & performance.',
        fr: 'Conduite de projets stratégiques : delivery fullstack, leadership, architecture, DevOps, qualité, SEO & performance.',
      },
      techs: ['React', 'TypeScript', 'Java', 'Python', 'C#', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Elasticsearch'],
      isHighlighted: true,
      details: {
        context: {
          en: 'Consulting/agency environment with varied domains and strong delivery constraints.',
          fr: 'Contexte ESN/consulting : projets variés et forte exigence de delivery.',
        },
        tasks: {
          en: [
            'Built front-end apps with React and TypeScript',
            'Built scalable backend APIs (Java, Python, C#) and integrations',
            'Improved web performance and technical SEO with Search Console and Lighthouse',
            'Automated deployments with Docker, Kubernetes and CI/CD (GitLab)',
            'Implemented quality practices (TDD, E2E testing, code reviews)',
            'Designed evolutive and secure system architectures',
            'Led and mentored teams to ensure on-time delivery',
          ],
          fr: [
            'Développement front-end (React, TypeScript)',
            'Développement de services/API scalables (Java, Python, C#) et intégrations',
            'Optimisation performance web et SEO technique (Search Console, Lighthouse)',
            'Automatisation déploiement (Docker, Kubernetes, CI/CD GitLab)',
            'Mise en place qualité (TDD, tests E2E, code review)',
            "Conception d'architectures évolutives et sécurisées",
            'Encadrement et coordination d’équipes pour garantir la livraison',
          ],
        },
        env: {
          en: 'React / TypeScript / Java / Python / C# / SQL / Elasticsearch / Docker / Kubernetes / GitLab CI/CD',
          fr: 'React / TypeScript / Java / Python / C# / SQL / Elasticsearch / Docker / Kubernetes / GitLab CI/CD',
        },
      },
    },

    {
      id: 'coreoz-intern',
      company: { en: 'Coreoz', fr: 'Coreoz' },
      role: { en: 'Full-Stack Developer Intern', fr: 'Stagiaire Développeur Full-Stack' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'Jul 2018 - Dec 2018', fr: 'Juil. 2018 - Déc. 2018' },
      description: {
        en: 'Worked on web development projects and contributed to back-end and front-end performance improvements and API integrations.',
        fr: "Participation à des projets web : dev, optimisations de performance front/back et intégrations d’API.",
      },
      techs: ['Java', 'React', 'TypeScript', 'SQL'],
    },

    {
      id: 'airfrance-klm-ml',
      company: { en: 'Air France-KLM', fr: 'Air France-KLM' },
      role: { en: 'Software Developer (Machine Learning) — Intern', fr: 'Développeur Logiciel (Machine Learning) — Stage' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'May 2017 - Aug 2017', fr: 'Mai 2017 - Août 2017' },
      description: {
        en: 'Built an unsupervised email classification tool in Python (scikit-learn) to automate internal email handling via Outlook APIs.',
        fr: "Développement d’un outil de classification non supervisée d’emails en Python (scikit-learn) pour automatiser le traitement via APIs Outlook.",
      },
      techs: ['Python', 'scikit-learn'],
      details: {
        context:  {
          en: 'Python / scikit-learn / Microsoft Outlook API',
          fr: 'Python / scikit-learn / API Microsoft Outlook',
        },
        tasks: {
          en: [
            'Implemented unsupervised classification approach for email clustering',
            'Integrated with Microsoft Outlook APIs for automation',
            'Delivered productivity improvements through reduced manual triage',
          ],
          fr: [
            'Implémentation d’une approche non supervisée pour regrouper/classer des emails',
            'Intégration via APIs Microsoft Outlook pour automatisation',
            'Gain de productivité via réduction du tri manuel',
          ],
        },
        env: {
          en: 'Python / scikit-learn / Microsoft Outlook API',
          fr: 'Python / scikit-learn / API Microsoft Outlook',
        },

      },
    },

    {
      id: 'identicar-web',
      company: { en: 'Groupe Identicar', fr: 'Groupe Identicar' },
      role: { en: 'Web Developer — Intern', fr: 'Développeur Web — Stage' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'Sep 2015 - Oct 2015', fr: 'Sept. 2015 - Oct. 2015' },
      description: {
        en: 'Built an interactive website leveraging Google Maps API and a C# WebService (ASP.NET MVC).',
        fr: 'Développement d’un site interactif avec API Google Maps + WebService en C# (ASP.NET MVC).',
      },
      techs: ['C#', 'ASP.NET MVC', 'SQL'],
    },

    {
      id: 'identicar-analyst',
      company: { en: 'Groupe Identicar', fr: 'Groupe Identicar' },
      role: { en: 'Analyst-Developer — Intern', fr: 'Analyste-Développeur — Stage' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'Jul 2014 - Aug 2014', fr: 'Juil. 2014 - Août 2014' },
      description: {
        en: 'First professional experience: analysis and development of internal applications (ASP.NET MVC and SQL).',
        fr: 'Première immersion : analyse et développement d’applications internes (ASP.NET MVC et SQL).',
      },
      techs: ['C#', 'ASP.NET MVC', 'SQL'],
    },

    {
      id: 'gfi-support',
      company: { en: 'Gfi Informatique', fr: 'Gfi Informatique' },
      role: { en: 'IT Support Technician — Intern', fr: "Technicien d'assistance informatique — Stage" },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'Jul 2013', fr: 'Juil. 2013' },
      description: {
        en: 'Workstation fleet maintenance, troubleshooting and basic network configuration for multiple clients.',
        fr: 'Maintenance de parc, dépannage et configuration réseau de base pour divers clients.',
      },
      techs: ['IT Support'],
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: 'donnezvotrevoiture',
      title: { en: 'DonnezVotreVoiture.org', fr: 'DonnezVotreVoiture.org' },
      description: {
        en: 'Social-impact platform built end-to-end (Next.js, TypeScript, Airtable, Vercel).',
        fr: 'Plateforme à impact développée de bout en bout (Next.js, TypeScript, Airtable, Vercel).',
      },
      techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Strapi'],
      url: 'https://donnezvotrevoiture.org',
    },
    {
      id: 'jobs-brico',
      title: { en: 'TODO', fr: 'Site de recrutement de Brico.Be' },
      description: {
        en: 'Website maintenance and legacy code migration',
        fr: 'Maintenance du site et reprise du code legacy',
      },
      techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      url: 'https://jobs.brico.be/fr',
    },
    {
      id: 'robin-site',
      title: { en: 'Robin Pandikian — Website + SEO', fr: 'Robin Pandikian — Site + SEO' },
      description: {
        en: 'Custom WordPress website + technical SEO + Google Ads performance tracking.',
        fr: 'Site WordPress sur-mesure + SEO technique + suivi perf Google Ads.',
      },
      techs: ['WordPress', 'SEO', 'Google Ads'],
      url: 'https://robin-magicien.fr',
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'ESIEE Paris', fr: 'ESIEE Paris' },
      degree: { en: 'Engineering Degree in Computer Science', fr: "Diplôme d’ingénieur informatique" },
      specialty: { en: 'Information Systems & Cybersecurity', fr: "Systèmes d’information & Cybersécurité" },
      period: '2012 - 2018',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Open Source', fr: 'Open Source' },
    },
    {
      title: { en: 'Music (coding playlists)', fr: 'Musique (playlists pour coder)' },
    },
    {
      title: { en: 'Home lab', fr: 'Gestion d\'un homelab de 3 raspberrys' },
    },
  ],

  // ===== THEME =====
  theme: {
    preset: 'forest',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
