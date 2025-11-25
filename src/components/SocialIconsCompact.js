// src/components/SocialIconsCompact.js
import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaInstagram
} from 'react-icons/fa';
import { SiUpwork, SiTiktok } from 'react-icons/si';

const SocialIconsCompact = ({ size = 20, className = "" }) => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/mdsad-akkas",
      label: "LinkedIn",
      color: "hover:text-[#0077b5]"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/suvosheikh",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/sa.shuvosheikh.official",
      label: "Facebook",
      color: "hover:text-[#1877f2]"
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/sa.shuvosheikh",
      label: "Instagram",
      color: "hover:text-[#e4405f]"
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/yourchannel",
      label: "YouTube",
      color: "hover:text-[#ff0000]"
    },
    {
      icon: <FaPinterest />,
      url: "https://pinterest.com/sa.shuvoseikh",
      label: "Pinterest",
      color: "hover:text-[#bd081c]"
    },
    {
      icon: <SiUpwork />,
      url: "https://upwork.com/freelancers/sa.shuvosheikh",
      label: "Upwork",
      color: "hover:text-[#14a800]"
    },
    {
      icon: <SiTiktok />,
      url: "https://www.tiktok.com/@sa.shuvosheikh/",
      label: "Fiverr",
      color: "hover:text-[#1dbf73]"
    }
  ];

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 bg-secondary border border-gray-800 rounded-lg flex items-center justify-center text-textSecondary transition-all duration-300 hover:border-accent hover:bg-accent/10 ${social.color}`}
          aria-label={social.label}
        >
          {React.cloneElement(social.icon, { size: size })}
        </a>
      ))}
    </div>
  );
};

export default SocialIconsCompact;