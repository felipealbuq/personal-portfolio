"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import FelipeModel from '../components/3dModels/FelipeModel';
import BallonModel from '../components/3dModels/BallonModel';

function downloadPDF() {
  const link = document.createElement('a');
  link.href = `/pdfs/felipeResume2024.pdf`;
  link.download = 'felipeResume2024.pdf';
  link.click();
}

const Hero = () => {
  const handleHireMeClick = () => {
    const event = new CustomEvent('hireMeClick');
    window.dispatchEvent(event);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] justify-center items-center">
      <section className="text-white container mx-auto px-12 py-20 lg:py-0 flex flex-col  justify-start bg-[#121212] w-full md:flex-row ">
        <div className="hero-content overflow-auto px-4 py-8 sm:px-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
              <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Hello, I am {" "}
                </span>
              </h1>
              <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <TypeAnimation
                  sequence={[
                    'Felipe',
                    1000,
                    'Game Developer',
                    1000,
                    'AR and VR Developer',
                    500,
                    '3D Artist',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl '>
                Welcome to my personal portfolio. Here, you will find an overview of my professional skills and
                experience, including the technologies I use, projects I have worked on, and how to contact me.
              </p>
              <div>
                <Link
                  href="/contact"
                  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
                  onClick={handleHireMeClick}
                >
                  Hire Me
                </Link>
                <Link
                  href="/"
                  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mt-3"
                  onClick={downloadPDF}
                >
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                    Download CV
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-span-5 place-self-center mt-6 sm:mt-32 lg:mt-2">
              <BallonModel />
              <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
                <FelipeModel />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
