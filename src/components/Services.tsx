import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export const Services = () => {
  return (
    <div className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-lg font-semibold text-primary">Portfolio</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects & Expertise
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Explore my diverse portfolio of projects and technical expertise
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="relative p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                {/* Project Icon */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </span>
                </div>

                {/* Project Details */}
                <div className="mt-8 font-semibold text-xl text-white">
                  {project.title}
                </div>
                <p className="mt-4 text-gray-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};