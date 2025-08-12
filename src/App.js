import React, { useState, useEffect } from 'react';
import { Briefcase, Lightbulb, Zap, Shield, User, MessageSquare, Menu, X, Rocket, Award, GraduationCap } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated data from the provided resume
  const resumeData = {
    name: "Kyle Kayler",
    tagline: "A Senior Business Development Leader with over three decades of experience in electronic safety & security. Passionate about leveraging technology and building bespoke solutions.",
    contact: {
      email: "kylekayler@gmail.com", // Please update with your actual email
      phone: "+1(509)475-6617", // Please update with your actual phone number
      linkedin: "https://www.linkedin.com/in/kylekayler/", // Please update with your actual LinkedIn URL
    },
    experience: [
      {
        id: 1,
        title: "Business Development Manager - Healthcare Vertical",
        company: "Convergint",
        duration: "Jan 2023 - Present",
        description: "Spearheaded the launch of a new healthcare vertical, building a robust pipeline exceeding $30M. Achieved a 100% increase in revenues for a key account by developing new relationships in unserved regions.",
      },
      {
        id: 2,
        title: "Sales Director",
        company: "Vintra.io",
        duration: "Jan 2021 - Sep 2021",
        description: "Spearheaded full-cycle sales initiatives and collaborated with marketing to develop targeted Account-Based Marketing strategies, increasing lead conversion rates by 30%.",
      },
      {
        id: 3,
        title: "Regional Sales Director",
        company: "BriefCam",
        duration: "May 2019 - Nov 2020",
        description: "Developed a newly created territory, growing the pipeline from $200K to over $9M. Successfully implemented strategies to shorten the typical 12 to 18-month sales cycle.",
      },
    ],
    education: {
        degree: "Associate of Applied Science, Electronics Engineering Technology",
        school: "Spokane Community College",
    },
    affiliations: [
      {
        name: "American Red Cross – Greater Inland NW",
        role: "Board Member & Committee Chair",
        duration: "2024-Present",
      },
      {
        name: "ASIS – Eastern Washington Chapter 154",
        role: "Vice Chair & Treasurer",
        duration: "2008–2012",
      },
    ],
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'My Why', id: 'why' },
    { name: 'Experience', id: 'experience' },
    { name: 'Interests', id: 'interests' },
    { name: 'Affiliations', id: 'affiliations' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    setCurrentPage(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper component for the section cards
  const Card = ({ children }) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
      {children}
    </div>
  );

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .section-title {
          position: relative;
          display: inline-block;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: #E2E8F0;
        }
        .section-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 80%;
          height: 4px;
          background-color: #6366F1;
          border-radius: 9999px;
        }
      `}</style>
      
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" onClick={() => scrollToSection('home')} className="text-2xl font-bold text-indigo-400">
            {resumeData.name.split(' ')[0]}
          </a>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-200 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-lg font-semibold relative transition-colors duration-300 ${
                  currentPage === item.id ? 'text-indigo-400' : 'text-gray-400 hover:text-indigo-300'
                }`}
              >
                {item.name}
                {currentPage === item.id && (
                  <span className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-indigo-400 rounded-full animate-pulse"></span>
                )}
              </button>
            ))}
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col items-center py-4 space-y-4 bg-gray-800">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-lg font-semibold text-gray-300 hover:text-indigo-400"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-24 container mx-auto px-4">
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-6rem)] flex items-center justify-center text-center py-20">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight animate-fade-in">
              Hello, I'm <span className="text-indigo-400">{resumeData.name.split(' ')[0]}</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-delay-1">
              {resumeData.tagline}
            </p>
          </div>
        </section>

        {/* My Why Section */}
        <section id="why" className="py-20 md:py-32">
          <h2 className="section-title text-center mx-auto">My Why</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <div className="flex flex-col items-center text-center">
                <Lightbulb size={48} className="text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Enjoy Learning New Technology</h3>
                <p className="text-gray-400">Since college, I have found that I enjoy learning new technology, understanding its inner workings, and staying ahead of the curve.</p>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col items-center text-center">
                <User size={48} className="text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Educating & Demonstrating</h3>
                <p className="text-gray-400">My passion is simplifying the complex. I enjoy educating, explaining, and demonstrating how new technology works to others.</p>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col items-center text-center">
                <Zap size={48} className="text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Consultative Solutions</h3>
                <p className="text-gray-400">This process translates directly to a consultative sales approach, where I find bespoke solutions to my customers' and clients' challenges.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-32">
          <h2 className="section-title text-center mx-auto">Experience</h2>
          <div className="mt-12 space-y-12 max-w-3xl mx-auto">
            {resumeData.experience.map(job => (
              <Card key={job.id}>
                <div className="flex items-start">
                  <Briefcase size={24} className="text-indigo-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <h4 className="text-lg text-gray-400 mb-2">{job.company} | {job.duration}</h4>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Infographic/Interests Section */}
        <section id="interests" className="py-20 md:py-32">
          <h2 className="section-title text-center mx-auto">My Interests</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <div className="flex flex-col items-center text-center">
                <Shield size={48} className="text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">AI for Safety & Security</h3>
                <p className="text-gray-400">A profound interest in leveraging artificial intelligence for smarter, more secure, and safer systems.</p>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col items-center text-center">
                <Rocket size={48} className="text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Beyond Today's Technology</h3>
                <p className="text-gray-400">I am passionate about exploring solutions that challenge the status quo and push the boundaries of technology that has not changed in 25 years.</p>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col items-center text-center">
                <Zap size={48} className="text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Integrated Solution Development</h3>
                <p className="text-gray-400">I specialize in collaborating with product and development teams to build integrated solutions that meet and exceed customer needs.</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Education & Affiliations Section */}
        <section id="affiliations" className="py-20 md:py-32">
          <h2 className="section-title text-center mx-auto">Education & Affiliations</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <div className="flex flex-col items-center text-center">
                <GraduationCap size={48} className="text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-300">{resumeData.education.degree}</p>
                <p className="text-gray-400">{resumeData.education.school}</p>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col items-center text-center">
                <Award size={48} className="text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Professional Affiliations</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-left">
                  {resumeData.affiliations.map((item, index) => (
                    <li key={index}>
                      <span className="font-bold">{item.name}</span>
                      <br/>
                      <span className="text-sm text-gray-400">{item.role} ({item.duration})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <h2 className="section-title text-center mx-auto">Get In Touch</h2>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <Card>
              <p className="text-gray-300 text-lg mb-6">
                I'm always open to discussing new opportunities or collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-col space-y-4">
                <a href={`mailto:${resumeData.contact.email}`} className="flex items-center justify-center p-3 rounded-xl bg-indigo-500 text-white font-bold hover:bg-indigo-600 transition-colors">
                  <MessageSquare size={20} className="mr-2" /> Email Me
                </a>
                <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-gray-600 text-gray-300 font-bold hover:bg-gray-700 transition-colors">
                  Connect on LinkedIn
                </a>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
