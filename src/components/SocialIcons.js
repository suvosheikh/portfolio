// src/components/SocialIcons.js
import React from 'react';
import { 
  FaLinkedin, 
  FaGithub, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaPinterest,
  FaBehance,
  FaDribbble,
  FaStackOverflow,
  FaDev,
  FaMedium,
  FaReddit,
  FaDiscord,
  FaSlack,
  FaWhatsapp,
  FaTelegram,
  FaSkype
} from 'react-icons/fa';
import { 
  SiLeetcode, 
  SiHackerrank, 
  SiCodechef,
  SiUpwork,
  SiFiverr,
  SiFreelancer
} from 'react-icons/si';

const SocialIcons = ({ size = 24, className = "" }) => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "hover:text-[#0077b5]"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
      label: "GitHub", 
      color: "hover:text-gray-400"
    },
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/yourusername",
      label: "Facebook",
      color: "hover:text-[#1877f2]"
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/yourusername", 
      label: "Twitter",
      color: "hover:text-[#1da1f2]"
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/yourusername",
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
      url: "https://pinterest.com/yourusername",
      label: "Pinterest",
      color: "hover:text-[#bd081c]"
    },
    {
      icon: <SiUpwork />,
      url: "https://upwork.com/freelancers/yourusername",
      label: "Upwork",
      color: "hover:text-[#14a800]"
    },
    {
      icon: <SiFiverr />,
      url: "https://fiverr.com/yourusername",
      label: "Fiverr", 
      color: "hover:text-[#1dbf73]"
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/yourusername",
      label: "LeetCode",
      color: "hover:text-[#ffa116]"
    },
    {
      icon: <FaBehance />,
      url: "https://behance.net/yourusername",
      label: "Behance",
      color: "hover:text-[#1769ff]"
    },
    {
      icon: <FaDribbble />,
      url: "https://dribbble.com/yourusername",
      label: "Dribbble",
      color: "hover:text-[#ea4c89]"
    }
  ];

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 bg-secondary border border-gray-800 rounded-xl flex items-center justify-center text-textSecondary transition-all duration-300 hover:border-accent hover:bg-accent/10 ${social.color}`}
          aria-label={social.label}
        >
          {React.cloneElement(social.icon, { size: size })}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;