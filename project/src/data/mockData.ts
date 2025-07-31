export const techLogos = [
  { name: 'Docker', icon: '🐳', color: 'bg-blue-500' },
  { name: 'Linux', icon: '🐧', color: 'bg-yellow-500' },
  { name: 'Jenkins', icon: '🔧', color: 'bg-red-500' },
  { name: 'Kubernetes', icon: '⚙️', color: 'bg-blue-600' },
  { name: 'Terraform', icon: '🏗️', color: 'bg-purple-500' },
  { name: 'Ansible', icon: '📋', color: 'bg-red-600' },
  { name: 'GitHub', icon: '🐙', color: 'bg-gray-800' },
  { name: 'GitHub Actions', icon: '🚀', color: 'bg-blue-700' },
  { name: 'AWS', icon: '☁️', color: 'bg-orange-500' },
  { name: 'Azure', icon: '🌐', color: 'bg-blue-600' },
  { name: 'GCP', icon: '🌟', color: 'bg-green-500' },
];

export const videoData = {
  docker: [
    { id: 1, title: 'Docker Basics', embedId: 'fqMOX6JJhGo', duration: '15:30' },
    { id: 2, title: 'Docker Compose', embedId: 'Qw9zlE3t8Ko', duration: '22:45' },
    { id: 3, title: 'Docker Swarm', embedId: 'x843GyFRIIY', duration: '18:20' },
  ],
  kubernetes: [
    { id: 1, title: 'Kubernetes Introduction', embedId: 'X48VuDVv0do', duration: '25:15' },
    { id: 2, title: 'Kubernetes Pods', embedId: 'azuwP6Z6ig8', duration: '19:30' },
    { id: 3, title: 'Kubernetes Services', embedId: 'T4Z7visMM4E', duration: '21:45' },
  ],
  jenkins: [
    { id: 1, title: 'Jenkins Basics', embedId: 'LFDrDnKPOTg', duration: '20:15' },
    { id: 2, title: 'Jenkins Pipeline', embedId: 'pMO26j2OUME', duration: '24:30' },
    { id: 3, title: 'Jenkins Blue Ocean', embedId: 'k_fVlU1FwP4', duration: '16:45' },
  ],
};

export const projectData = [
  {
    id: 1,
    title: 'Microservices with Docker',
    description: 'Build and deploy microservices architecture using Docker containers',
    difficulty: 'Intermediate',
    duration: '4 hours',
    tags: ['Docker', 'Microservices', 'API'],
  },
  {
    id: 2,
    title: 'CI/CD Pipeline with Jenkins',
    description: 'Create automated CI/CD pipeline for a web application',
    difficulty: 'Advanced',
    duration: '6 hours',
    tags: ['Jenkins', 'CI/CD', 'Git'],
  },
  {
    id: 3,
    title: 'Infrastructure as Code with Terraform',
    description: 'Provision AWS infrastructure using Terraform',
    difficulty: 'Intermediate',
    duration: '5 hours',
    tags: ['Terraform', 'AWS', 'IaC'],
  },
];

export const interviewQuestions = [
  {
    id: 1,
    question: 'What is Docker and how does it differ from virtual machines?',
    answer: 'Docker is a containerization platform that packages applications and their dependencies into lightweight, portable containers. Unlike VMs, containers share the host OS kernel, making them more efficient in terms of resource usage.',
    category: 'Docker',
    difficulty: 'Basic',
  },
  {
    id: 2,
    question: 'Explain the concept of Infrastructure as Code (IaC)',
    answer: 'IaC is the practice of managing and provisioning infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.',
    category: 'General',
    difficulty: 'Intermediate',
  },
];

export const scenarioQuestions = [
  {
    id: 1,
    scenario: 'Your production server is down and users cannot access the application',
    question: 'What steps would you take to diagnose and resolve this issue?',
    answer: 'Steps include: 1) Check server status and logs, 2) Verify network connectivity, 3) Check application logs, 4) Review recent deployments, 5) Implement rollback if necessary, 6) Monitor system recovery',
    category: 'Troubleshooting',
    difficulty: 'Advanced',
  },
];

export const mockInterviewData = [
  {
    id: 1,
    title: 'DevOps Engineer - Junior Level',
    duration: '30 minutes',
    questions: 15,
    topics: ['Docker', 'CI/CD', 'Git', 'Linux'],
  },
  {
    id: 2,
    title: 'DevOps Engineer - Senior Level',
    duration: '45 minutes',
    questions: 20,
    topics: ['Kubernetes', 'Terraform', 'Monitoring', 'Security'],
  },
];

export const testSeriesData = [
  {
    id: 1,
    title: 'Docker Fundamentals Quiz',
    questions: 20,
    duration: '30 minutes',
    difficulty: 'Beginner',
    category: 'Docker',
  },
  {
    id: 2,
    title: 'Kubernetes Intermediate Quiz',
    questions: 25,
    duration: '45 minutes',
    difficulty: 'Intermediate',
    category: 'Kubernetes',
  },

   {
    id: 3,
    title: 'Terraform Advanced Quiz',
    questions: 25,
    duration: '45 minutes',
    difficulty: 'Advanced',
    category: 'Terraform',
  },

];

export const quizQuestions = [
  {
    id: 1,
    question: 'What is the default port for Docker daemon?',
    options: ['2375', '2376', '8080', '3000'],
    correctAnswer: 1,
    explanation: 'Docker daemon listens on port 2376 by default when TLS is enabled.',
  },
  {
    id: 2,
    question: 'Which command is used to build a Docker image?',
    options: ['docker create', 'docker build', 'docker make', 'docker compile'],
    correctAnswer: 1,
    explanation: 'The docker build command is used to build Docker images from a Dockerfile.',
  },
];