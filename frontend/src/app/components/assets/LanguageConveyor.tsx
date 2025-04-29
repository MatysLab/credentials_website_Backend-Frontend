'use client';
import React from 'react';

const LanguageConveyor = () => {
  const languages = [
    { name: 'React', icon: 'devicon-react-original-wordmark colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain-wordmark colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain-wordmark colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain-wordmark colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain-wordmark colored' },
    { name: 'C#', icon: 'devicon-csharp-plain-wordmark colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain-wordmark colored' },
    { name: 'Docker', icon: 'devicon-docker-plain-wordmark colored' },
    { name: 'Git', icon: 'devicon-git-plain-wordmark colored' },
    { name: 'GitHub', icon: 'devicon-github-original-wordmark colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain-wordmark colored' },
    { name: 'Express.js', icon: 'devicon-expressjs-plain-wordmark colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain-wordmark colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain-wordmark colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain-wordmark colored' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
    { name: 'Linux', icon: 'devicon-linux-plain-wordmark colored' },
    { name: 'Firebase', icon: 'devicon-firebase-plain-wordmark colored' },
  ];

  const doubledLanguages = [...languages, ...languages];

  return (
    <div className="w-full overflow-hidden py-0 bg-white">
      <div className="flex space-x-8 animate-scroll">
        {doubledLanguages.map((lang, index) => (
          <div key={index} className="flex flex-col items-center justify-center flex-shrink-8 w-full">
            {/* Render the Devicon icon */}
            <i className={`${lang.icon} text-6xl`} aria-hidden="true"></i>
            <span className="sr-only">{lang.name}</span>
          </div>
        ))}
      </div>
      <style >{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Scroll half the width of the doubled list */
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite; /* Adjust the speed as needed */
          white-space: nowrap;
        }
      `}</style>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    </div>
  );
};

export default LanguageConveyor;
