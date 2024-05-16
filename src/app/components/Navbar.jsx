"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/"); 

  const handleTabChange = (path) => {
    setActiveTab(path);
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-0">
      <div className="flex flex-wrap items-center justify-between mx-auto px-0 md:px-4 lg:px-4 max-h-18">
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={300}
            height={10}
            className="mt-2"
            onClick={() => handleTabChange("/")}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 mr-5 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 mr-5 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:flex md:w-auto" id="navbar overflow-auto px-5">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0 mr-3 overflow-auto">
            {navLinks.map((link, index) => (
              <li key={index} onClick={() => handleTabChange(link.path)} className={activeTab === link.path ? "border-b-2 border-purple-500" : ""}>
                <NavLink href={link.path} title={link.title} isActive={activeTab === link.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} onLinkClick={handleTabChange} /> : null}
    </nav>
  );
};

export default Navbar;
