import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="footer fixed border-t border-[#33353F] bottom-0 left-0 w-full h-16 bg-[#121212] text-white"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-0 md:px-4 lg:px-4 py-2">
        <span>
          <Link href={"#"}>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={200}
              height={10}
              className="mt-0 ml-2" 
            />
          </Link>
        </span>
        <div className="socials flex flex-row gap-2 mr-2 md:mr-0 lg:mr-0">
            <Link href="https://github.com/felipealbuq">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/felipe-albuquerque-de-carvalho-8b255122a">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        <p className="text-slate-600 px-4">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
