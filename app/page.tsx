"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Github,
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  FacebookIcon,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/animated-background";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ProfileImage } from "@/components/profile-image";
import { ResumeButton } from "@/components/resume-button";



export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white overflow-hidden">
      <AnimatedBackground />

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Shobhit Kori
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="hover:text-purple-400 transition-colors"
            >
              Skills
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href={"https://github.com/ShobhitKori"}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"https://www.linkedin.com/in/shobhit-kori-655489253/"}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={'"https://x.com/shobhitcodes'}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-4 py-20"
      >
        <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 transition-opacity duration-1000">
          <div className="flex flex-col items-center mb-8">
            {/* Modern Profile Image Component */}
            <ProfileImage
              src="./profile.png"
              alt="Shobhit Kori"
              size="lg"
              className="mb-6 z-10 relative"
            />
            <ResumeButton
              resumeUrl="/resume.pdf"
              variant="outline"
              className="mt-4 border-gray-700 hover:border-purple-500 transition-colors"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {/*<span className="block">Full Stack</span>*/}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              MERN Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Building modern web applications with MongoDB, Express, React, and
            Node.js
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#projects">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-md text-lg">
                View Projects
              </Button>
            </Link>
            <Link href={"#contact"}>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-6 rounded-md text-lg"
              >
                Get in touch
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll opacity-0 transition-opacity duration-1000">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Me
            </span>
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 animate-on-scroll opacity-0 transition-opacity duration-1000">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="md:w-1/3 flex flex-col items-center">
                <ProfileImage
                  src="/profile-pic.jpg"
                  alt="Shobhit Kori"
                  size="md"
                  className="mb-4"
                />
                <ResumeButton resumeUrl="/resume.pdf" className="w-full mt-4" />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg text-gray-300 mb-6">
                  I'm a passionate Full Stack Developer specializing in the MERN
                  stack (MongoDB, Express.js, React.js, Node.js). With a strong
                  foundation in both frontend and backend technologies, I create
                  seamless, responsive, and user-friendly web applications.
                  Passionate about building scalable, high-performance
                  applications and eager to contribute to innovative SaaS
                  solutions
                </p>
                <p className="text-lg text-gray-300">
                  My journey in web development began with a fascination for
                  creating interactive user experiences. Today, I leverage
                  modern frameworks and tools to build scalable solutions that
                  solve real-world problems. When I'm not coding, you can find
                  me exploring new technologies, contributing to open-source
                  projects, or sharing my knowledge with the developer
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll opacity-0 transition-opacity duration-1000">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <ProjectCard
              title="Intervui.io Clone"
              description="A SaaS-based interview platform enabling companies to conduct technical assessments with real-time coding and video features."
              tags={["MongoDB", "Express", "React", "Node.js", "Web Socket"]}
              imageUrl="intervue.io.png"
              demoUrl=""
              repoUrl="https://github.com/ShobhitKori/intervue.io-clone"
            />
            <ProjectCard
              title="Charity Connect"
              description="A platform connecting donors with NGOs to facilitate monetary and product donations."
              tags={["React", "Node.js", "Express", "MongoDB"]}
              imageUrl="cc.png"
              demoUrl="#"
              repoUrl="#"
            />
            {/* <ProjectCard
              title="Social Media Dashboard"
              description="An analytics dashboard that aggregates data from multiple social media platforms with visualization tools."
              tags={["React", "D3.js", "Express", "MongoDB"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              demoUrl="#"
              repoUrl="#"
            /> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll opacity-0 transition-opacity duration-1000">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Skills
            </span>
          </h2>

          <div className="space-y-8 animate-on-scroll opacity-0 transition-opacity duration-1000">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="React" />
                <SkillBadge name="Next.js" />
                <SkillBadge name="JavaScript" />
                <SkillBadge name="TypeScript" />
                <SkillBadge name="HTML5" />
                <SkillBadge name="CSS3" />
                <SkillBadge name="Tailwind CSS" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Node.js" />
                <SkillBadge name="Express.js" />
                <SkillBadge name="MongoDB" />
                <SkillBadge name="REST API" />
                <SkillBadge name="JWT" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & Cloud</h3>
              <div className="flex flex-wrap gap-3">
                <SkillBadge name="Git" />
                <SkillBadge name="GitHub" />
                <SkillBadge name="Docker" />
                <SkillBadge name="Kubernetes" />
                <SkillBadge name="Jenkins" />
                <SkillBadge name="Jest" />
                <SkillBadge name="CI/CD" />
                <SkillBadge name="Webpack" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-on-scroll opacity-0 transition-opacity duration-1000">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Touch
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <Link href={"https://github.com/ShobhitKori"}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"https://www.linkedin.com/in/shobhit-kori-655489253/"}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"https://www.instagram.com/_thisiskori_/"}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"https://x.com/shobhitcodes"}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
            <Link href={"https://www.facebook.com/shobhit.kori.908"}>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-gray-800 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Shobhit Kori. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
