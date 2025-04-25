"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaHeartbeat, FaTools, FaGamepad } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function ServiceSection() {
  const services = [
    {
      icon: (
        <FaHeartbeat className="text-red-600 dark:text-red-400 text-4xl mb-4" />
      ),
      title: "Medical Equipment Repairs",
      description:
        "We troubleshoot and repair all kinds of medical equipment with precision and care.",
    },
    {
      icon: (
        <FaLaptopCode className="text-red-600 dark:text-red-400 text-4xl mb-4" />
      ),
      title: "Laptop & Computer Repairs",
      description:
        "Hardware upgrades, software fixes, virus removal, screen replacements, and more.",
    },
    {
      icon: (
        <FaTools className="text-red-600 dark:text-red-400 text-4xl mb-4" />
      ),
      title: "Home Appliance Repairs",
      description:
        "We fix refrigerators, washers, microwaves, and handle domestic electrical issues.",
    },
    {
      icon: (
        <FaGamepad className="text-red-600 dark:text-red-400 text-4xl mb-4" />
      ),
      title: "Gaming Consoles & Electronics",
      description:
        "From gaming systems to audio equipment and other electronics — we've got you covered.",
    },
  ];

  return (
    <div className="pt-32 px-6 md:px-16 lg:px-32 max-w-7xl mx-auto mb-10 sm:mb-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        Our Services
      </motion.h1>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"show"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {services.map((service, index) => (
          <motion.div
            variants={fadeInUp}
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            {service.icon}
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {service.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
