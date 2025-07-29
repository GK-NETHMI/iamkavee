import jsPDF from 'jspdf';

export const generateCV = () => {
  const doc = new jsPDF();
  
  // Set document properties
  doc.setProperties({
    title: 'Gallage Kaveesha Nethmi - CV',
    subject: 'Curriculum Vitae',
    author: 'Gallage Kaveesha Nethmi',
  });

  // Colors
  const primaryColor: [number, number, number] = [41, 128, 185]; // Blue
  const darkColor: [number, number, number] = [52, 58, 64]; // Dark gray
  const lightColor: [number, number, number] = [108, 117, 125]; // Light gray

  // Header Section
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('GALLAGE KAVEESHA NETHMI', 20, 20);
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Full Stack Developer | UI/UX Designer', 20, 30);

  // Contact Information
  doc.setTextColor(...darkColor);
  doc.setFontSize(10);
  const contactInfo = [
    'Email: kaveeshanethmi2002@gmail.com',
    'Phone: +94 701 415 365',
    'Location: Sri Lanka',
    'LinkedIn: linkedin.com/in/kaveesha-nethmi-131519215',
    'GitHub: github.com/GK-NETHMI'
  ];
  
  contactInfo.forEach((info, index) => {
    doc.text(info, 20, 50 + (index * 5));
  });

  // Professional Summary
  let yPosition = 80;
  doc.setTextColor(...primaryColor);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('PROFESSIONAL SUMMARY', 20, yPosition);
  
  doc.setTextColor(...darkColor);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  yPosition += 10;
  const summary = 'Creative web developer with a passion for clean design and smooth user experiences. I build responsive, functional websites from frontend to backend with care and curiosity. Experienced in full-stack development, mobile app development, and UI/UX design.';
  const splitSummary = doc.splitTextToSize(summary, 170);
  doc.text(splitSummary, 20, yPosition);
  
  yPosition += splitSummary.length * 5 + 10;

  // Technical Skills
  doc.setTextColor(...primaryColor);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('TECHNICAL SKILLS', 20, yPosition);
  yPosition += 10;

  const skills = {
    'Frontend Development': ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Kotlin'],
    'Backend Development': ['Node.js', 'Express.js', 'Spring Boot', 'Java', 'PHP', 'Python'],
    'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'],
    'Design & Tools': ['Framer', 'Canva', 'WebFlow', 'Git', 'Figma'],
    'Other': ['Socket.io', 'TensorFlow', 'RESTful APIs', 'Responsive Design']
  };

  doc.setTextColor(...darkColor);
  doc.setFontSize(10);
  
  Object.entries(skills).forEach(([category, skillList]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(`${category}:`, 20, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(skillList.join(', '), 60, yPosition);
    yPosition += 6;
  });

  yPosition += 10;

  // Projects
  doc.setTextColor(...primaryColor);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('KEY PROJECTS', 20, yPosition);
  yPosition += 10;

  const projects = [
    {
      title: 'Salon Management System',
      description: 'Designed and developed a salon management platform featuring online appointment booking, service/pricing management, and an admin dashboard. Integrated secure payment gateway and email notification system.',
      technologies: 'React, Node.js, MongoDB, Express.js'
    },
    {
      title: 'Meal Planning Social Platform',
      description: 'Built a web-based social platform to support healthy lifestyles through meal planning, progress tracking, and community interaction.',
      technologies: 'React, Spring Boot, PostgreSQL, Socket.io'
    },
    {
      title: 'AI Home Inventory Platform',
      description: 'A smart home inventory tracking website with AI-powered budget analysis and personalized purchase suggestions.',
      technologies: 'React, Spring Boot, Python, TensorFlow'
    },
    {
      title: 'Paddy Sales Management App',
      description: 'Created a streamlined web application for paddy sales with inventory management and real-time tracking.',
      technologies: 'React, Node.js, MongoDB, Express.js'
    }
  ];

  doc.setTextColor(...darkColor);
  doc.setFontSize(10);

  projects.forEach((project) => {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.text(project.title, 20, yPosition);
    yPosition += 5;
    
    doc.setFont('helvetica', 'normal');
    const descriptionLines = doc.splitTextToSize(project.description, 170);
    doc.text(descriptionLines, 20, yPosition);
    yPosition += descriptionLines.length * 4;
    
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(...lightColor);
    doc.text(`Technologies: ${project.technologies}`, 20, yPosition);
    doc.setTextColor(...darkColor);
    yPosition += 8;
  });

  // Education
  if (yPosition > 240) {
    doc.addPage();
    yPosition = 20;
  } else {
    yPosition += 10;
  }

  doc.setTextColor(...primaryColor);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('EDUCATION', 20, yPosition);
  yPosition += 10;

  doc.setTextColor(...darkColor);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Software Engineering Student', 20, yPosition);
  yPosition += 5;
  doc.setFont('helvetica', 'normal');
  doc.text('Currently pursuing studies in Software Engineering', 20, yPosition);

  return doc;
};