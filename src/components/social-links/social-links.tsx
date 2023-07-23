'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <ul>
      <li className="inline-block mr-4">
        <a href="https://www.github.com/jamiesmachon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="text-4xl" icon={faGithub} />
        </a>
      </li>
      <li className="inline-block mr-4">
        <a href="https://www.facebook.com/jamiesmachon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="text-4xl" icon={faFacebook} />
        </a>
      </li>
      <li className="inline-block mr-4">
        <a href="https://www.instagram.com/jamiesmachon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="text-4xl" icon={faInstagram} />
        </a>
      </li>
      <li className="inline-block mr-4">
        <a href="https://www.twitter.com/jamiesmachon" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="text-4xl" icon={faTwitter} />
        </a>
      </li>
      <li className="inline-block">
        <a href="https://www.linkedin.com/in/jamie-stewart-machon-5b511996" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="text-4xl" icon={faLinkedin} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
