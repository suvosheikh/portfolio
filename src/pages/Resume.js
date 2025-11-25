// src/pages/Resume.js - FINAL CODE WITH DARK THEME DESIGN & PDF PRINT FIX
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Resume = () => {
    // Download resume function
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume-shuvo-sheikh.pdf';
        link.download = 'Shuvo_Sheikh_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Print resume function
    const handlePrint = () => {
        window.print();
    };

    // Data remains the same
    const personalInfo = {
        name: "SA Shuvo Sheikh",
        title: "IT Professional & Computer Specialist",
        email: "mdsuvosheikh@gmail.com",
        phone: "+8801779980886",
        location: "Dhaka, Bangladesh",
        linkedin: "linkedin.com/in/shuvosheikh",
        github: "github.com/shuvosheikh"
    };

    const professionalSummary = `
    Dedicated IT professional with 2.5+ years of experience in computer hardware, 
    software troubleshooting, and AI technologies. Proven expertise in computer 
    assembly, maintenance, and AI-driven business solutions. Currently serving 
    as a Computer Professional at Ryans Computers Ltd., with a strong background 
    in technical support and system optimization.
    `;

    const technicalSkills = {
        "Hardware & Technical": [
            "Computer Hardware Assembly", "System Diagnostics & Troubleshooting",
            "Hardware Component Selection", "Network Configuration",
            "System Performance Tuning", "Technical Support"
        ],
        "Artificial Intelligence": [
            "ChatGPT & Generative AI", "Prompt Engineering",
            "AI Business Applications", "Custom GPT Development",
            "AI Automation", "Machine Learning Concepts"
        ],
        "Software & Development": [
            "Lua Scripting", "OBS Studio", "JSON Configuration",
            "Python Basics", "Web Technologies", "Database Management"
        ],
        "Business & Professional": [
            "Business Analysis", "Project Management",
            "Requirements Gathering", "Technical Documentation",
            "Client Communication", "Problem Solving"
        ]
    };

    const workExperience = [
        {
            position: "Computer Professional",
            company: "Ryans Computers Ltd.",
            period: "Feb 2023 - Present",
            location: "Dhaka, Bangladesh",
            achievements: [
                "Assembled 100+ custom computer systems for diverse client requirements",
                "Achieved 95% first-time repair success rate through systematic diagnostics",
                "Provided technical support and troubleshooting for hardware and software issues",
                "Optimized system performance for gaming, professional workstations, and servers",
                "Maintained quality assurance standards for all hardware solutions"
            ]
        },
        {
            position: "IT Support Specialist",
            company: "Freelance",
            period: "2022 - 2023",
            location: "Remote & On-site",
            achievements: [
                "Implemented IT solutions for 15+ small businesses and individual clients",
                "Reduced system downtime by 40% through proactive maintenance strategies",
                "Developed customized technical documentation and training materials",
                "Provided network setup, configuration, and cybersecurity implementation"
            ]
        }
    ];

    const education = [
        {
            degree: "Bachelor's degree in Computer Science",
            institution: "University of South Asia",
            period: "2022 - 2026",
            location: "Dhaka, Bangladesh"
        },
        {
            degree: "Diploma in Computer Science & Engineering",
            institution: "Barguna Polytechnic Institute",
            period: "2018 - 2022",
            location: "Barguna, Bangladesh"
        }
    ];

    const certifications = [
        "ChatGPT and Generative AI in Business - Udemy (2025)",
        "Custom ChatGPT Publishing & AI Bootcamp - Udemy (2025)",
        "Google Ads Apps Certification - Google (2025)",
        "Executive Diploma in Business Communication - UniAthena (2025)",
        "Career Essentials in Cybersecurity - Microsoft (2024)",
        "Career Essentials in Business Analysis - Microsoft (2024)"
    ];

    const projects = [
        "OBS Source Auto Loop Script - Lua scripting for automated scene management",
        "AI-Powered Business Strategy Assistant - ChatGPT integration for business optimization",
        "Professional Computer Hardware Solutions - Custom PC assembly and maintenance",
        "Cybersecurity Awareness Program - Security training and implementation"
    ];

    // Helper component for section titles
    const SectionTitle = ({ icon, title }) => (
        <h3 className="text-2xl font-bold text-accent mb-4 flex items-center border-b border-gray-700 pb-2">
            <span className={`material-icons mr-2 text-blue-400 print-accent`}>{icon}</span>
            {title}
        </h3>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 pt-20">
            {/* Print-specific styles: Forces browser to print background colors (Dark Theme) AND fixes page breaks */}
            <style jsx>{`
                @media print {
                    .no-print {
                        display: none !important;
                    }
                    /* Ensures sections start on a new page if necessary, but don't break mid-element */
                    .print-break-avoid { 
                        break-inside: avoid;
                        page-break-inside: avoid;
                    }
                    .print-break {
                        page-break-before: always;
                    }
                    
                    /* *************** PDF DARK THEME FIX *************** */
                    body {
                        background: #111827 !important; /* Gray-900 equivalent */
                        -webkit-print-color-adjust: exact; /* IMPORTANT for Chrome/Edge */
                        print-color-adjust: exact; /* IMPORTANT for Firefox */
                        
                    }
                    .print-bg {
                        background: #1f2937 !important; /* Gray-800 equivalent */
                        color: #e5e7eb !important; /* Gray-200 equivalent */
                        border: none;
                        box-shadow: none;
                    }
                    .print-bg h1, .print-bg h2, .print-bg h3, .print-bg h4 {
                        color: #bfdbfe !important; /* Blue Accent equivalent */
                    }
                    .print-bg p, .print-bg li, .print-bg span {
                        color: #d1d5db !important; /* Gray-300 equivalent */
                    }
                    .print-header-bg {
                        /* Force gradient to print */
                        background: #1d4ed8 !important; 
                        background-image: linear-gradient(to right, #1d4ed8, #1f2937) !important;
                        color: white !important;
                    }
                    .print-accent {
                        color: #60a5fa !important; /* Light blue accent for section titles */
                    }
                    /* ************************************************* */
                }
            `}</style>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Header Actions - No Print */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center mb-8 no-print"
                >
                    <Link
                        to="/"
                        className="flex items-center text-blue-400 hover:text-white transition-colors duration-300"
                    >
                        <span className="material-icons mr-2">arrow_back</span>
                        Back to Home
                    </Link>

                    <div className="flex gap-4">
                        <button
                            onClick={handlePrint}
                            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
                        >
                            <span className="material-icons mr-2">print</span>
                            Print CV
                        </button>
                        <button
                            onClick={handleDownload}
                            className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
                        >
                            <span className="material-icons mr-2">download</span>
                            Download PDF
                        </button>
                    </div>
                </motion.div>

                {/* Main CV Container - Dark Mode Styling */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden print-bg"
                >
                    {/* CV Header */}
                    <div className="bg-gradient-to-r from-blue-700 to-gray-800 text-white p-8 print-header-bg">
                        {/* Header Content... (Unchanged) */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <h1 className="text-4xl font-extrabold mb-1">{personalInfo.name}</h1>
                                <h2 className="text-xl text-blue-300 font-light mb-4">{personalInfo.title}</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-blue-200 text-sm">
                                    <div className="flex items-center">
                                        <span className="material-icons mr-2 text-sm text-blue-400 print-accent">email</span>
                                        {personalInfo.email}
                                    </div>
                                    <div className="flex items-center">
                                        <span className="material-icons mr-2 text-sm text-blue-400 print-accent">phone</span>
                                        {personalInfo.phone}
                                    </div>
                                    <div className="flex items-center">
                                        <span className="material-icons mr-2 text-sm text-blue-400 print-accent">location_on</span>
                                        {personalInfo.location}
                                    </div>
                                    <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline text-blue-200">
                                        <span className="material-icons mr-2 text-sm text-blue-400 print-accent">link</span>
                                        {personalInfo.linkedin}
                                    </a>
                                </div>
                            </div>

                            {/* Profile Photo - MODIFIED SIZE HERE */}
                            <div className="w-40 h-40 rounded-full flex items-center justify-center mt-4 md:mt-0 border-4 border-gray-100 shadow-xl overflow-hidden bg-gray-600">
                                <img
                                    src="images\SA-Shuvo-Sheikh.webp"
                                    alt="Profile of SA Shuvo Sheikh"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* CV Content */}
                    <div className="p-8">
                        {/* Professional Summary - (Unchanged) */}
                        <section className="mb-8">
                            <SectionTitle icon="person" title="Professional Summary" />
                            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line border-l-4 border-blue-500 pl-4 py-1 bg-gray-700/30 rounded-r-lg">
                                {professionalSummary.trim()}
                            </p>
                        </section>

                        {/* Technical Skills - (Unchanged) */}
                        <section className="mb-8 print-break-avoid">
                            <SectionTitle icon="psychology" title="Technical Skills" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.entries(technicalSkills).map(([category, skills]) => (
                                    <div key={category} className="bg-gray-800 p-4 border border-gray-700 rounded-lg shadow-inner print-break-avoid">
                                        <h4 className="text-lg font-semibold text-blue-400 mb-3">{category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-800 hover:bg-blue-800 transition-colors duration-200"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Work Experience */}
                        <section className="mb-8 print-break-avoid"> {/* Added print-break-avoid here */}
                            <SectionTitle icon="work" title="Work Experience" />

                            <div className="space-y-6">
                                {workExperience.map((job, index) => (
                                    // Added print-break-avoid to each individual job entry
                                    <div key={index} className="border-l-4 border-blue-500 pl-4 bg-gray-700/20 p-4 rounded-lg print-break-avoid">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                            <div>
                                                <h4 className="text-xl font-semibold text-gray-100">{job.position}</h4>
                                                <p className="text-lg text-blue-400 font-medium">{job.company}</p>
                                            </div>
                                            <div className="text-gray-400 text-right mt-1 md:mt-0">
                                                <p>{job.period}</p>
                                                <p className="text-sm">{job.location}</p>
                                            </div>
                                        </div>

                                        <ul className="list-disc list-inside space-y-1 text-gray-300 text-base">
                                            {job.achievements.map((achievement, idx) => (
                                                <li key={idx}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education & Certifications (Two Columns) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print-break-avoid"> {/* Added print-break-avoid here */}
                            {/* Education */}
                            <section className="mb-8">
                                <SectionTitle icon="school" title="Education" />

                                <div className="space-y-4">
                                    {education.map((edu, index) => (
                                        // Added print-break-avoid to each individual education entry
                                        <div key={index} className="pb-4 border-b border-gray-700/50 last:border-b-0 print-break-avoid">
                                            <div className="flex flex-col md:flex-row md:justify-between">
                                                <div>
                                                    <h4 className="text-lg font-semibold text-gray-100">{edu.degree}</h4>
                                                    <p className="text-blue-400">{edu.institution}</p>
                                                </div>
                                                <div className="text-gray-400 text-right mt-1 md:mt-0 text-sm">
                                                    <p>{edu.period}</p>
                                                    <p>{edu.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Certifications - (Unchanged) */}
                            <section className="mb-8">
                                <SectionTitle icon="verified" title="Certifications" />

                                <div className="space-y-3">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start">
                                            <span className="material-icons text-green-500 mr-2 text-sm mt-1 flex-shrink-0">check_circle</span>
                                            <span className="text-gray-300 text-sm">{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Projects - (Unchanged) */}
                        <section className="mb-8 print-break-avoid">
                            <SectionTitle icon="folder" title="Key Projects" />

                            <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
                                {projects.map((project, index) => (
                                    <li key={index} className="text-base">
                                        <span className="font-medium text-blue-400">
                                            {project.split(' - ')[0]}
                                        </span>
                                        <span className="text-gray-400"> - {project.split(' - ')[1]}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Availability - (Unchanged) */}
                        <section className="bg-blue-900/40 rounded-lg p-6 border border-blue-700">
                            <h3 className="text-xl font-bold text-gray-100 mb-2 flex items-center">
                                <span className="material-icons mr-2 text-green-400">event_available</span>
                                Availability
                            </h3>
                            <p className="text-gray-300">
                                <strong>Currently available</strong> for new projects and opportunities in IT support,
                                computer hardware services, and AI solutions. Open to full-time, part-time, and freelance work.
                            </p>
                        </section>
                    </div>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center mt-8 text-gray-500 no-print"
                >
                    <p className="text-sm">This CV is also available for download in PDF format. Designed using React and Tailwind CSS.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;