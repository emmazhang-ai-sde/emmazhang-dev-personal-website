// All site content lives here — edit this file, not the components.

export const profile = {
  name: 'Emma Zhang',
  greeting: "Hello, I'm",
  tagline: 'I build AI-powered products end to end.',
  // Target roles, rendered as chips under the tagline. `primary: true` gets the
  // filled mint treatment — exactly one role should carry it.
  roles: [
    { label: 'AI Engineer', primary: true },
    { label: 'Full-Stack Software Engineer' },
    { label: 'Software Development Engineer' },
  ],
  subtitle:
    "Across internships and freelance work I've owned the whole path to production: the AI layer, the services behind it, and the cloud infrastructure it runs on.",
  email: 'sz94@illinois.edu',
  location: 'Champaign, IL',
  // Drop the PDF into /public and update this path when ready
  resumeUrl: null,
  links: [
    { label: 'GitHub', url: 'https://github.com/emmazhang-ai-sde' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shuyangzhang-ai-sde/' },
  ],
}

export const experience = [
  {
    company: 'GlobiFYE',
    descriptor: 'AI-powered business outsourcing',
    role: 'AI Engineer Intern',
    dates: 'May 2026 – Oct 2026',
    location: 'Atlanta, GA · Remote',
    bullets: [
      "Designed and implemented an AI Sales Intelligence Platform for sales reps to analyze caller intent and deal signals across the full sales funnel using RAG, LangChain, Next.js, TypeScript, and PostgreSQL, orchestrating automated inbound/outbound routing to an AI voice agent or human rep, live transcription, and post-call semantic analysis for sales coaching",
      "Developed a two-pass Automatic Speech Recognition: real-time streaming transcription for live captioning, followed by a batch re-transcription for improving accuracy, archiving transcripts and call audio to AWS S3",
      "Architected a real-time phone-call voice agent that retrieved relevant data from company-specific RAG knowledge bases and caller history to identify the current sales funnel stage and generate context-aware responses",
      "Built a post-call analysis pipeline using an LLM to refine speech-to-text transcripts and generate structured insights on key topics, customer hesitation, objections, and coaching opportunities, with OpenSearch for persistent storage",
      "Instrumented MLOps observability via Prometheus, Grafana, and LangSmith to monitor LLM cost, latency and error rates.",
    ],
    stack: ['RAG', 'LangChain', 'Next.js', 'TypeScript', 'PostgreSQL', 'OpenSearch', 'AWS'],
  },
  {
    company: 'Tang Matcha House',
    descriptor: 'Local business, full build',
    role: 'Freelance Software Engineer',
    dates: 'Dec 2025 – Jan 2026',
    location: "Xi'an, China",
    bullets: [
      "Developed and deployed a React based Single Page Application (SPA) for a local matcha house that streamlined customers experience for order placement, tracking, and payment processing",
      "Built RESTful APIs using API Gateway and AWS Lambda for order management, covering order creation, real-time tracking, history retrieval, and pick-up QR code generation, with DynamoDB as persistent storage",
      "Utilized AWS CDK with TypeScript to construct service infrastructure via CloudFormation, implementing infrastructure as code and streamlining CI/CD pipelines via Docker, integrated API integration tests, accelerating rollout efficiency by 60%",
      "Improved recent order query performance with Redis as cache layer, achieving a Redis cache hit rate of 60%, and reducing repeated MySQL queries by over 70%",
      "Built automated test suite using TypeScript and Vitest, with unit tests for core business logic and Supertest-based integration tests covering authorization, payment, pickup verification, and security attack paths.",
    ],
    stack: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'CDK', 'Redis', 'Vitest'],
  },
  {
    // One company, two consecutive roles — rendered as a single card with a
    // rule between the roles. `roles` replaces the top-level role/bullets/
    // stack; `dates` stays the overall span, which drives the timeline axis.
    company: 'Chongqing Jingkai Trading',
    descriptor: 'B2B cross-border commerce',
    dates: 'May 2025 – Aug 2025',
    location: 'Chongqing, China',
    roles: [
      {
        role: 'Full-Stack Software Engineer Intern',
        dates: 'Jul 2025 – Aug 2025',
        bullets: [
          "Designed and implemented a microservice-based platform for a crystal jewelry client using Spring Boot and Spring Cloud, enabling modular service registration, discovery, and inter-service communication via OpenFeign",
          "Optimized high-concurrency scenarios for Prime Day by integrating Redis caching with LUA script for inventory control via Distributed Lock, reducing overselling and improving throughput under heavy load",
          "Implemented an Event-driven architecture using RocketMQ for a decoupled and asynchronous transaction management",
          "Configured microservices with Spring Cloud Gateway, Consul, and OpenFeign, deployed application, integrated with Load Balancer and AWS AutoScaling group on multiple Linux-based EC2 instances, made service open to public with high availability.",
        ],
        stack: ['Java', 'Spring Boot', 'Spring Cloud', 'Redis', 'RocketMQ', 'AWS EC2'],
      },
      {
        role: 'AI Engineer Intern',
        dates: 'May 2025 – Jun 2025',
        bullets: [
          'Built a multilingual AI email assistant for cross-border sellers using Python (FastAPI), LangChain, and OpenAI/Claude APIs, automating email triage, quote retrieval, and bilingual reply generation',
          'Designed a RAG pipeline using PGVector for embedding computation and ElasticSearch for vector storage, surfacing product descriptions, pricing, and policy data in-context; reduced quote preparation time by 60%',
          'Architected scalable backend infrastructure with Docker and EKS (Kubernetes), routing inbound email responses through AWS SES with metadata persisted in OpenSearch; sustained P95 latency under 800ms at thousands of emails per day',
          'Instrumented MLOps observability via Prometheus, Grafana, and LangSmith to monitor LLM cost, latency, and draft quality; enforced AES-GCM encryption and RBAC with JWT for data privacy compliance.',
        ],
        stack: ['Python', 'FastAPI', 'LangChain', 'RAG', 'PGVector', 'Elasticsearch', 'Docker', 'EKS'],
      },
    ],
  },
]

// Side projects — placeholder details, edit freely.
export const sideProjects = [
  {
    name: 'UIUC Housing',
    descriptor: 'Apartment hunting for UIUC students',
    status: 'In progress',
    dates: '2026',
    description:
      'A housing search app for UIUC students — browse off-campus apartments, compare by commute and price, and ask questions in plain English instead of digging through listing sites.',
    stack: ['RAG', 'React', 'FastAPI', 'PostgreSQL', 'AWS'],
    links: [
      { label: 'Live', url: 'https://uiuc-housing-ai.com/about' },
    ],
  },
  {
    name: 'CS 427 Notes & Quizzes',
    descriptor: 'Study site for UIUC software engineering',
    status: 'Shipped',
    dates: '2026',
    stars: 20,
    forks: 3,
    description:
      'A static study site for CS 427 — weekly notes with topic tabs, embedded mind maps, and interactive quizzes, all in vanilla JavaScript with no build step.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    links: [
      { label: 'GitHub', url: 'https://github.com/emmazhang-ai-sde/uiuc-26sp-cs427-notes-quizzes' },
    ],
  },
]

// Collections — a small library of links with short takes, not a blog.
// Placeholder items: replace with your own picks and one-line comments.
// Empty for now — the overlay shows a "coming soon" state until this is filled.
// Restore entries in this shape when curation is ready:
//   { title, chip: 'chip--blue' | 'chip--purple' | 'chip--amber',
//     items: [{ title, url, note }] }
export const collections = []

// Technical Skills, ordered and worded exactly as the résumé lists them.
export const skills = [
  {
    category: "Languages/Framework",
    items: ["Java", "Python", "C#", "C++", "TypeScript/JavaScript", "React.js", "Next.js"],
  },
  {
    // Not on the résumé — added so the markup layer is represented
    category: 'Frontend',
    items: ['React', 'Vue.js', 'HTML', 'CSS'],
  },
  {
    category: "Backend & APIs",
    items: [
      "Spring Boot",
      "Spring Cloud",
      "Node.js/Express",
      "FastAPI/Flask",
      "Django",
      "REST",
      "gRPC",
      "WebSockets",
      "Kafka/Flink",
      "JWT",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL/NoSQL schema design", "PostgreSQL", "MongoDB", "Redis", "DynamoDB", "ElasticSearch"],
  },
  {
    category: "Cloud & DevOps",
    // two lines, matching the résumé's semicolon: cloud/containers, then tooling
    groups: [
      {
        items: [
          "AWS",
          "EC2",
          "S3",
          "Lambda",
          "DynamoDB",
          "RDS",
          "SES",
          "CloudWatch",
          "EventBridge",
          "AutoScaling",
          "CloudFormation/CDK",
          "Azure",
          "Docker",
          "Kubernetes",
        ],
      },
      { items: ["Git", "GitHub Actions", "CI/CD", "Prometheus", "Grafana"] },
    ],
  },
  {
    category: "Methodologies",
    items: [
      "Agile/Scrum",
      "Distributed Systems Design",
      "Code Review",
      "Unit Testing (JUnit, Mockito)",
      "Integration Testing",
      "SDLC",
    ],
  },
  {
    // Not on the résumé's skills block, but the work behind the AI Engineer claim
    category: 'AI / ML',
    items: ['RAG', 'LangChain', 'LangGraph', 'LangSmith', 'MLOps'],
  },
  {
    // Not on the résumé — the tools I actually work with day to day
    category: 'AI Tools',
    groups: [
      { items: ['Codex', 'Claude Code', 'Angular'] },
      { items: ['Figma', 'Open Design', 'Stitch'] },
    ],
  },
]

export const education = {
  school: 'University of Illinois Urbana-Champaign',
  degree: 'B.S. Mathematics · Minor in Computer Science',
  gpa: '3.71 / 4.0',
  location: 'Champaign, IL',
  // Two columns, rendered in array order — first entry sits on the left.
  // Both are framed cards with the same border and shadow; the one marked
  // `lead: true` carries the focus through heavier row ink and its accent.
  // Listed intro → advanced, so each column reads as a progression.
  // Rows may pair two courses: '&' joins courses that share a subject
  // (Calculus II & III), '/' separates two different subjects.
  coursework: [
    {
      category: 'Mathematics',
      accent: 'ink',
      items: [
        'Calculus II & III',
        'Discrete Mathematics',
        'Non-Euclidean Geometry',
        'Combinatorics / Statistics & Probability',
        'Applied & Abstract Linear Algebra',
        'Differential Equations',
        'Real Analysis',
      ],
    },
    {
      category: 'Computer Science',
      // `accent` picks the column's colour: 'mint' | 'ink' (no hue) |
      // 'purple' | 'blue' | 'amber'
      accent: 'mint',
      lead: true,
      items: [
        'Data Structures',
        'Algorithms',
        'Computer Systems',
        'Database Systems',
        'Software Engineering',
      ],
    },
  ],
}
