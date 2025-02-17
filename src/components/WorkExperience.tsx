'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const workExperience = [
    {
        id: 1,
        title: "GUI Developer Lead - SFU Rocketry",
        desc: "Co-Leading a team of 4 developers in creating real-time data visualization dashboards for rocket telemetry. Implemented interactive charts using Python, Plotly, and Dash for altitude, velocity, and sensor data monitoring.",
        thumbnail: "/rocketry.png",
        duration: "Jan.  2024 - Present",
        link: "https://www.sfurocketry.com/",
        github: "https://github.com/sfurocketry"
      },
      {
        id: 2,
        title: "Software Engineer Intern - JP MORGAN",
        desc: "Developed real-time stock visualization interfaces using Chart.js and Perspective library. Debugged and enhanced web applications for accurate financial data display, implementing custom chart components for trading pattern analysis.",
        thumbnail: "/jp2.png",
        duration: "Jun.  2024 - Jul.  2024",
        link: "https://www.jpmorgan.com/"
      }
];

const WorkExperience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: '-100px 0px'
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl md:text-7xl text-center font-bold text-green mb-16">
          Work Experience
        </h1>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto px-4"
      >
        <div className="relative">
          {/* Vertical Timeline Line with animation */}
          <motion.div 
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-green-500/30" 
          />

          {workExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-6 md:mb-12 flex-col`}
            >
              <div className="w-full md:w-1/2 px-4 md:px-6">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-black/40 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-green-500/30 shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <Link href={exp.link} target="_blank">
                      <Image
                        src={exp.thumbnail}
                        alt={exp.title}
                        width={40}
                        height={40}
                        className="rounded-lg w-[40px] h-[40px] md:w-[50px] md:h-[50px] hover:cursor-pointer"
                      />
                      </Link>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 break-words">{exp.title}</h3>
                      <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">{exp.duration}</p>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed break-words">{exp.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced decorative elements with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl -z-10" 
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-green-500/10 rounded-full filter blur-3xl -z-10" 
      />
    </section>
  );
};

export default WorkExperience; 
