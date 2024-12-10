import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, SKILLS } from "@/lib/constants";
import { fadeIn, fadeInUp, slideInLeft, buttonHover } from "@/lib/animations";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Background Elements */}
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-grid-white/[0.02] -z-0" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent -z-0" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 py-16">
          {/* Main Content */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            className="lg:w-1/2 space-y-8"
          >
            {/* Hero Text */}
            <div className="space-y-4">
              <motion.h2 
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-primary font-bold text-2xl"
              >
                Hello, I'm
              </motion.h2>
              <motion.h1 
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                Buntu Levy Caleb
              </motion.h1>
              <motion.h2 
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="text-2xl text-primary/90"
              >
                Software Engineer & Full-Stack Developer
              </motion.h2>
            </div>
            
            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
            >
              A passionate developer specializing in web, mobile, and software development. 
              Fluent in multiple programming languages including Java, C#, React, Next.js, and Flutter. 
              Currently completing my Software Engineering degree at Adventist University of Central Africa.
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="mt-2 text-base text-gray-300 sm:mx-auto sm:mt-3 sm:max-w-xl sm:text-lg lg:mx-0"
            >
              Based in Kigali, Rwanda
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                <Button 
                  className="px-6 py-2" 
                  onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}`}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                <Button 
                  variant="outline" 
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white border-white/10"
                  onClick={() => window.open(CONTACT_INFO.github, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </motion.div>
              <motion.div variants={buttonHover} whileHover="hover" whileTap="tap">
                <Button 
                  variant="outline" 
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white border-white/10"
                  onClick={() => window.open(CONTACT_INFO.linkedin, '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </motion.div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm text-primary bg-primary/10 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-lg opacity-75 animate-pulse" />
              <img 
                src="./public/IMG_6367.jpg" 
                alt="Buntu Levy Caleb"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};