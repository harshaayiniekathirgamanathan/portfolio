import ecommerceDashboard from '../assets/projects/ecommerce-dashboard.png';

export const projects = [
  {
    id: "ecommerce-etl",
    title: "E-commerce Sales Data Pipeline",
    badge: "Data Engineering",
    status: "Completed",
    isFeatured: true,
    github: "https://github.com/harshaayiniekathirgamanathan/ecommerce-etl-pipeline.git",
    summary: "A beginner-friendly E-Commerce Sales Data Pipeline built to demonstrate collecting, cleaning, transforming, analyzing, and visualizing sales data.",
    description: "Transforms raw sales data from the Online Retail dataset into meaningful business insights through Python data processing, SQL database analysis in PostgreSQL, and an interactive Power BI dashboard.",
    highlights: [
      "Extracted and ingested raw Online Retail transaction dataset.",
      "Cleaned and transformed data using Python and Pandas libraries.",
      "Structured and loaded clean records into a PostgreSQL relational database.",
      "Executed analytical SQL queries to compute sales metrics and customer patterns.",
      "Built an interactive Power BI dashboard for executive reporting and business insights."
    ],
    technologies: ["Python", "Pandas", "SQL", "PostgreSQL", "Power BI", "Git & GitHub"],
    pipelineFlow: [
      "Source Data",
      "Extract",
      "Transform",
      "Load",
      "Database",
      "Analysis"
    ],
    screenshot: null,
    screenshotCaption: "Power BI Executive Sales Performance & Insights Dashboard"
  },
  {
    id: "task-management",
    title: "Task Management System",
    badge: "Full-Stack Web Development",
    status: "Completed",
    isFeatured: false,
    github: "https://github.com/harshaayiniekathirgamanathan/Task-Management-Web-Project.git",
    liveDemo: "https://orange-mushroom-072c7d500.7.azurestaticapps.net",
    summary: "A full-stack web project for managing, organizing, and tracking tasks efficiently with secure API endpoints and responsive interface.",
    description: "Built with the MERN stack (MongoDB, Express, React, Node.js) featuring modular full-stack architecture, JWT authentication, task creation/updates, and cloud hosting on Azure Static Web Apps.",
    highlights: [
      "Developed interactive React frontend interface with state management.",
      "Designed RESTful API endpoints using Express and Node.js.",
      "Configured MongoDB database for scalable user and task storage.",
      "Deployed frontend client seamlessly to Azure Static Web Apps."
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Azure Static Web Apps"],
    pipelineFlow: null,
    screenshot: null
  },
  {
    id: "ai-healthcare-platform",
    title: "AI-Powered Healthcare Data Platform",
    badge: "Data / AI",
    status: "In Progress",
    isFeatured: false,
    github: "https://github.com/harshaayiniekathirgamanathan/AI-powered-healthcare-data-platform.git",
    summary: "An integrated healthcare data platform designed to process, transform, and analyze patient datasets for predictive disease insights.",
    description: "An ongoing data and machine learning project focused on building an end-to-end data pipeline to process patient records (Diabetes, Heart, Sleep datasets), store structured records in PostgreSQL, query health KPIs, and apply predictive analytics.",
    highlights: [
      "Building Python ETL pipeline (Extract, Clean, Transform, Merge) for CSV healthcare datasets.",
      "Designing relational PostgreSQL database tables for Patient, Diabetes, Heart, and Sleep data.",
      "Executing SQL queries to extract health KPIs, patient statistics, and trend analytics.",
      "Developing Power BI visualizations and Machine Learning models for disease risk prediction."
    ],
    technologies: ["Python", "ETL Pipeline", "PostgreSQL", "SQL", "Power BI", "Machine Learning"],
    pipelineFlow: [
      "Healthcare CSV Datasets",
      "Python ETL Pipeline",
      "PostgreSQL DB",
      "SQL KPI Analysis",
      "Power BI & ML Insights"
    ],
    screenshot: null
  }
];
