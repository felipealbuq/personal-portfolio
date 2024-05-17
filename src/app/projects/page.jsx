"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/2.png",
    tag: ["All", "Unity"],
    gitUrl: "https://github.com/felipealbuq/personal-portfolio",
    previewUrl: "/images/projects/3.png"
  },
  {
    id: 2,
    title: "Interactive A-Frame Mini Game",
    description: "Mini Game developed in A-frame with movements, animations and physics colliders",
    image: "/images/projects/A-frame-mini-game.png",
    tag: ["All", "A-frame"],
    gitUrl: "https://github.com/felipealbuq/A-Frame-mini-game",
    previewUrl: "/videos/projects/A-frame-mini-game-HD.mp4"
  },
  {
    id: 3,
    title: "GAVIA",
    description: "Virtual enviroment created by Generative AI and available for virtual reality",
    image: "/images/projects/GAVIA.png",
    tag: ["All", "A-frame"],
    gitUrl: "https://github.com/felipealbuq/GAVIA.git",
    previewUrl: "/videos/projects/GAVIA-720p.mp4"
  },
  {
    id: 4,
    title: "Belchior Robot",
    description: "Articulated 3D robot with textures, shading, and animations, ready for action in your Blender project or game",
    image: "/images/projects/BelchiorRobot.png",
    tag: ["All", "Blender", "ThreeJS"],
    gitUrl: "https://github.com/felipealbuq/belchior-robot",
    previewUrl: "/videos/projects/BelchiorRobot-HD.mp4"
  },
  {
    id: 5,
    title: "War Helicopter",
    description: "3D helicopter with crafted animations, including smooth takeoffs, and precise landings, complemented by realistic textures and shading",
    image: "/images/projects/warHelicopter.png",
    tag: ["All", "Blender", "ThreeJS"],
    gitUrl: "https://github.com/felipealbuq/personal-portfolio",
    previewUrl: "/images/projects/5.png"
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Blender"],
    gitUrl: "https://github.com/felipealbuq/personal-portfolio",
    previewUrl: "/images/projects/6.png"
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] justify-center items-center">
      <section className="text-white container mx-auto px-12 py-20 lg:py-20 sm:py-10 bg-[#121212]">
        <h2 className="text-center text-4xl font-bold text-white mb-8 mt-8 md:mt-20 md:mb-12">
          Projects
        </h2>
        <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Unity"
            isSelected={tag === "Unity"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Unreal"
            isSelected={tag === "Unreal"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="A-frame"
            isSelected={tag === "A-frame"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="ThreeJS"
            isSelected={tag === "ThreeJS"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Blender"
            isSelected={tag === "Blender"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    </main>
  );
};
export default Projects;
