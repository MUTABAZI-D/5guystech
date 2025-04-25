"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaBolt, FaWrench, FaThumbsUp, FaMoneyBillWave } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  return (
    <div className="pt-12">
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpeg"
            alt="Tech repair"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Your Trusted Technology Repair Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl mb-6"
          >
            Fast, affordable, and professional tech repair solutions at your
            fingertips.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg rounded-full transition"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={fadeInUp}>
          <Image
            src="/images/about.jpeg"
            alt="About us"
            className="w-full rounded-lg shadow-md"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className=" text-lg leading-relaxed">
            At{" "}
            <span className="font-semibold text-red-600 dark:text-red-400">
              5GUYSTECH
            </span>
            , we specialize in all kinds of repairs — from medical devices to
            home appliances. Our expert technicians are dedicated to bringing
            your tech back to life with speed, precision, and care.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-gray-50 dark:bg-gray-600 py-20 px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12">
            Why Choose Us
          </motion.h2>

          <motion.div
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { icon: <FaWrench />, label: "Expert Technicians" },
              { icon: <FaBolt />, label: "Fast Turnaround" },
              { icon: <FaMoneyBillWave />, label: "Affordable Pricing" },
              { icon: <FaThumbsUp />, label: "Satisfaction Guaranteed" },
            ].map((item, index) => (
              <motion.div
                variants={fadeInUp}
                whileInView={{ opacity: 1, scale: 1 }}
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center hover:shadow-lg transition"
              >
                <div className="text-red-600 dark:text-red-400 text-3xl mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.label}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-16 max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold">
            What We Fix
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Medical Equipment", image: "/images/medical.jpeg" },
            { title: "Laptops & Computers", image: "/images/laptop.jpeg" },
            { title: "Home Appliances", image: "/images/appliances.jpeg" },
            { title: "Gaming & Electronics", image: "/images/console.jpeg" },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <motion.div variants={fadeInUp}>
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg rounded-full transition"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 5 }}
        viewport={{ once: true }}
        className="bg-red-600 dark:bg-red-400 text-white py-12 text-center px-4"
      >
        <h2 className="text-3xl font-bold mb-4">
          Let’s bring your tech back to life!
        </h2>
        <p className="text-lg">
          Contact us today for fast and professional repair service.
        </p>
      </motion.section>
    </div>
  );
}
