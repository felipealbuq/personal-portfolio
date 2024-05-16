"use client";
import React, { useTransition, useState } from 'react'
import TabButton from '../components/TabButton';
import AboutMe3DModel from '../components/3dModels/AboutMe3DModel'

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ml-2">
        <li>Unity 3D</li>
        <li>Unreal Engine</li>
        <li>A-frame</li>
        <li>ThreeJS</li>
        <li>Blender</li>
        <li>Fusion 360</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 ml-2">
        <li>Federal Institute of Ceará, Computer Technician</li>
        <li>Federal Institute of Ceará, Telecommunications Engineering</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 ml-2">
        <li>Digital Twins, Coursera</li>
        <li>Scrum Foundation Professional Certificate, Certiprof</li>
      </ul>
    )
  }
]

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] justify-center items-center">
      <section className="text-white container mx-auto px-12 py-20 lg:py-0 flex flex-col  justify-start bg-[#121212] w-full md:flex-row ">
        <div className="md:flex md:flex-col md:justify-center md:items-center md:w-1/2 mt-8 md:mt-0 mr-20">
          <AboutMe3DModel />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col  md:w-1/2">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am Felipe Albuquerque, a passionate game developer, AR/VR developer, and 3D  artist.
            I am driven by a desire to create immersive and engaging experiences that
            push the boundaries of what is possible. I possess a strong foundation  in
            various development tools and techniques, and I am always eager to expand
            my knowledge and refine my craft.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe
