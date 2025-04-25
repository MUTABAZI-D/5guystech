"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export const AboutSection = () => {
  const reasons = [
    "Expert Technicians: Our team is made up of certified professionals experienced with the latest technologies.",
    "Quick Turnaround: We value your time. Our repairs are fast, reliable, and never compromise quality.",
    "Affordable Pricing: Top-tier repairs at competitive prices — no breaking the bank.",
    "All-Inclusive Services: From phones to washing machines, we repair a wide range of devices.",
    "Customer Satisfaction Guaranteed: We go above and beyond to ensure satisfaction.",
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView={"show"}
      variants={staggerContainer}
      className="pt-32 px-6 md:px-16 lg:px-32 max-w-6xl mx-auto mb-10 sm:mb-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="text-4xl font-extrabold mb-6"
      >
        About 5GUYSTECH
      </motion.h1>

      <motion.p variants={fadeInUp} className="text-lg leading-relaxed mb-10">
        At{" "}
        <span className="font-semibold text-red-600 dark:text-red-400">
          5GUYSTECH
        </span>
        , we specialize in repairing all kinds of technology — from complex
        medical equipment to everyday electronics and industrial machines. No
        matter the issue, our skilled technicians are committed to restoring
        your devices efficiently and reliably.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="text-2xl font-bold mb-4"
      >
        Why Choose Us?
      </motion.h2>

      <ul className="space-y-4">
        {reasons.map((item, idx) => (
          <motion.li
            variants={fadeInUp}
            key={idx}
            className="flex items-start gap-3"
          >
            <FaCheckCircle className="text-red-600 dark:text-red-400 mt-1" />
            <p>{item}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
