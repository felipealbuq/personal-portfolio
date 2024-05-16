// MenuOverlay.js
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links, onLinkClick }) => {
  return (
    <div className="overlay-menu">
      <ul className="flex flex-col py-4 items-center bg-[#121212] bg-opacity-90">
        {links.map((link, index) => (
          <li key={index} onClick={() => onLinkClick(link.path)}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
