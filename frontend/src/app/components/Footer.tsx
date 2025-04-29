import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

interface FooterProps {
    name: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
}

const Footer: React.FC<FooterProps> = ({ name, location, email, linkedin, github }) => {
    return (
        <footer
            id="contact"
            className="w-full bg-white text-gray-700 py-6 md:py-8 border-t border-l border-r border-gray-200 rounded-t-lg shadow-md"
        >
            {/* Name and Location */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <span className="font-semibold text-gray-800">{name}</span>
                    <span className="text-gray-400 hidden md:inline-block">•</span>
                    <span className="text-gray-600">{location}</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <a
                        href={`mailto:${email}`}
                        className="text-blue-600 hover:text-blue-500 transition-colors"
                    >
                        {email}
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

const FooterSection = () => {
    return (
        <Footer
            name="Matys L'Abbée"
            location="Montreal, Canada"
            email="matyslabbee@hotmail.fr"
            linkedin="https://www.linkedin.com/in/matyslabbee/"
            github="https://github.com/MatysLab"
        />
    );
};

export default FooterSection;
