// All site content lives here — edit this file, not the components.

export const profile = {
  name: 'Emma Zhang',
  greeting: "Hello, I'm",
  tagline: 'I build AI-powered products end to end.',
  subtitle:
    'Math student at the University of Illinois with a CS minor — shipping real-time voice agents, serverless backends, and the infrastructure underneath them.',
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
      'Built an AI sales intelligence platform that reads caller intent and deal signals across the full sales funnel, routing calls between an AI voice agent and human reps automatically',
      'Designed a two-pass speech recognition pipeline — real-time streaming for live captions, then batch re-transcription for accuracy — with transcripts and audio archived to S3',
      'Architected a real-time phone voice agent grounded in company-specific RAG knowledge bases and caller history to generate context-aware responses',
      'Instrumented LLM observability with Prometheus, Grafana, and LangSmith to track cost, latency, and error rates in production.',
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
      'Shipped a React single-page app covering the whole customer flow — ordering, live tracking, payment, and pickup',
      'Built serverless REST APIs on API Gateway, Lambda, and DynamoDB, including pickup QR code generation',
      'Defined the entire stack as code with AWS CDK; Docker-based CI/CD cut rollout time by 60%',
      'Added a Redis cache layer that cut repeated database queries by over 70%.',
    ],
    stack: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'CDK', 'Redis', 'Vitest'],
  },
  {
    company: 'Chongqing Jingkai Trading',
    descriptor: 'B2B cross-border commerce',
    role: 'Full-Stack Software Engineer Intern',
    dates: 'Jul 2025 – Aug 2025',
    location: 'Chongqing, China',
    bullets: [
      'Built a microservice platform for a cross-border jewelry client on Spring Boot and Spring Cloud',
      'Kept Prime Day traffic honest with Redis distributed locks and Lua scripts, preventing overselling under heavy load',
      'Moved transaction management to an event-driven architecture on RocketMQ',
      'Deployed behind a load balancer with AWS Auto Scaling across multiple EC2 instances for high availability.',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Cloud', 'Redis', 'RocketMQ', 'AWS EC2'],
  },
  {
    company: 'Chongqing Jingkai Trading',
    descriptor: 'Internal AI tooling',
    role: 'AI Engineer Intern',
    dates: 'May 2025 – Jun 2025',
    location: 'Chongqing, China',
    bullets: [
      'Built a multilingual AI email assistant for cross-border sellers using Python (FastAPI), LangChain, and OpenAI/Claude APIs, automating email triage, quote retrieval, and bilingual reply generation',
      'Designed a RAG pipeline using PGVector for embedding computation and ElasticSearch for vector storage, surfacing product descriptions, pricing, and policy data in-context; reduced quote preparation time by 60%',
      'Architected scalable backend infrastructure with Docker and EKS (Kubernetes), routing inbound email responses through AWS SES with metadata persisted in OpenSearch; sustained P95 latency under 800ms at thousands of emails per day',
      'Instrumented MLOps observability via Prometheus, Grafana, and LangSmith to monitor LLM cost, latency, and draft quality; enforced AES-GCM encryption and RBAC with JWT for data privacy compliance.',
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'RAG', 'PGVector', 'Elasticsearch', 'Docker', 'EKS'],
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

export const skills = [
  {
    category: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Vue'],
  },
  {
    category: 'Backend',
    items: ['Java', 'Python', 'C++', 'C#', 'Spring Boot', 'Spring Cloud', 'Node.js', 'FastAPI', 'Django', 'gRPC', 'WebSockets', 'Kafka'],
  },
  {
    category: 'AI / ML',
    items: ['RAG', 'LangChain', 'LangGraph', 'LangSmith'],
  },
  {
    category: 'Data & Storage',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'Elasticsearch', 'OpenSearch'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'AWS CDK', 'GitHub Actions', 'CI/CD'],
  },
]

export const education = {
  school: 'University of Illinois Urbana-Champaign',
  degree: 'B.S. in Mathematics, Minor in Computer Science',
  stats: [
    { value: '3.7 / 4.0', label: 'GPA' },
    { value: 'Dec 2026', label: 'Graduating' },
    { value: 'Math + CS', label: 'Focus' },
  ],
}
