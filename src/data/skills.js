export const skillCategories = [
  {
    category: "Data Engineering & Data",
    isPrimary: true,
    skills: [
      { name: "Python", icon: "FileCode", level: "Core Tool" },
      { name: "SQL", icon: "Database", level: "Core Querying" },
      { name: "Pandas", icon: "Table", level: "Data Transformation" },
      { name: "NumPy", icon: "Binary", level: "Numerical Processing" },
      { name: "PostgreSQL", icon: "Server", level: "Relational Database" }
    ]
  },
  {
    category: "Analytics",
    isPrimary: false,
    skills: [
      { name: "Power BI", icon: "BarChart2", level: "Data Visualization & Dashboards" }
    ]
  },
  {
    category: "Web Development",
    isPrimary: false,
    skills: [
      { name: "React", icon: "Code2", level: "Frontend User Interface" },
      { name: "Node.js", icon: "Layers", level: "Backend JavaScript Runtime" },
      { name: "Express.js", icon: "Globe", level: "Web Server Framework" }
    ]
  }
];
