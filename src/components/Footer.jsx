import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      username: '_manvith.shetty',
      url: 'https://www.instagram.com/_manvith.shetty/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      username: 'Manvith Shetty',
      url: 'https://www.linkedin.com/in/manvith-shetty-0a6215263/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'GitHub',
      username: 'Manvithshetty13',
      url: 'https://github.com/Manvithshetty13',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6e5494" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    }
  ];

  return (
    <footer className="py-10 px-8 md:px-16 bg-tertiary bg-opacity-10 backdrop-blur-sm mt-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-quaternary transition-colors duration-300 group"
              aria-label={social.name}
            >
              <div className="transform group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
              <span className="text-md font-medium">{social.username}</span>
            </a>
          ))}
        </div>
        <div className="text-center text-secondary text-sm mt-4">
          <p>© {new Date().getFullYear()} Manvith Shetty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 