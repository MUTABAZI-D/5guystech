"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function ContactSection() {
  return (
    <div className="pt-32 px-6 md:px-16 lg:px-32 max-w-5xl mx-auto mb-10 sm:mb-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
      >
        <motion.h1 variants={fadeInUp} className="text-4xl font-extrabold mb-6">
          Contact Us
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-lg leading-relaxed mb-10">
          Don&apos;t let broken devices slow you down. Reach out to{" "}
          <span className="font-semibold text-red-600 dark:text-red-400">
            5GUYSTECH
          </span>{" "}
          and let us handle all your technology repair needs. Whether
          you&apos;re in need of a quick fix or a more complex solution,
          we&apos;re ready to help!
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[
          { icon: <FaPhoneAlt />, title: "Phone", text: "+250 784 275 157" },
          { icon: <FaEnvelope />, title: "Email", text: "5guystech@gmail.com" },
          { icon: <FaMapMarkerAlt />, title: "Address", text: "KK 585" },
        ].map((item, index) => (
          <motion.div
            variants={fadeInUp}
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex items-start gap-4"
          >
            <div className="text-red-600 dark:text-red-300 text-2xl mt-1">
              {item.icon}
            </div>
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
