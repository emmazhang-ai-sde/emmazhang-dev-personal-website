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
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
}

export const experience = [
  {
    company: 'GlobiFYE',
    descriptor: 'AI-powered business outsourcing',
    role: 'AI Engineer Intern',
    dates: 'May 2026 – Present',
    location: 'Atlanta, GA · Remote',
    bullets: [
      'Built an AI sales intelligence platform that reads caller intent and deal signals across the full sales funnel, routing calls between an AI voice agent and human reps automatically.',
      'Designed a two-pass speech recognition pipeline — real-time streaming for live captions, then batch re-transcription for accuracy — with transcripts and audio archived to S3.',
      'Architected a real-time phone voice agent grounded in company-specific RAG knowledge bases and caller history to generate context-aware responses.',
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
      'Shipped a React single-page app covering the whole customer flow — ordering, live tracking, payment, and pickup.',
      'Built serverless REST APIs on API Gateway, Lambda, and DynamoDB, including pickup QR code generation.',
      'Defined the entire stack as code with AWS CDK; Docker-based CI/CD cut rollout time by 60%.',
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
      'Built a microservice platform for a cross-border jewelry client on Spring Boot and Spring Cloud.',
      'Kept Prime Day traffic honest with Redis distributed locks and Lua scripts, preventing overselling under heavy load.',
      'Moved transaction management to an event-driven architecture on RocketMQ.',
      'Deployed behind a load balancer with AWS Auto Scaling across multiple EC2 instances for high availability.',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Cloud', 'Redis', 'RocketMQ', 'AWS EC2'],
  },
]

export const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['Java', 'Python', 'TypeScript', 'C++', 'C#', 'React', 'Next.js', 'Vue'],
  },
  {
    category: 'Backend & APIs',
    items: ['Spring Boot', 'Spring Cloud', 'Node.js', 'FastAPI', 'Django', 'gRPC', 'WebSockets', 'Kafka'],
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
  gpa: '3.7 / 4.0',
  dates: 'Aug 2024 – Dec 2026 (expected)',
}
