"use client";
import Link from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { NavLinks } from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div
      className={`bg-white dark:bg-gray-700 shadow-md border-b border-gray-200 dark:border-gray-600 z-50
        md:fixed md:top-0 md:left-0 md:right-0
        ${navbarOpen ? "relative" : ""}`}
    >
      <div className="flex justify-between items-center px-4 py-3 md:gap-8">
        <div className="text-red-700 dark:text-red-400 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          <Link href="/">5 GUYS TECH</Link>
        </div>

        <div className="flex items-center gap-4">
          <DarkModeSwitch />
          <div className="md:hidden">
            {navbarOpen ? (
              <XMarkIcon
                className="h-6 w-8 cursor-pointer"
                onClick={() => setNavbarOpen(false)}
              />
            ) : (
              <Bars3Icon
                className="h-6 w-8 cursor-pointer"
                onClick={() => setNavbarOpen(true)}
              />
            )}
          </div>
          <div className="hidden md:block">
            <NavLinks navbarOpen={false} setNavbarOpen={setNavbarOpen} />
          </div>
        </div>
      </div>

      {navbarOpen && (
        <div className="md:hidden">
          <NavLinks navbarOpen={true} setNavbarOpen={setNavbarOpen} />
        </div>
      )}
    </div>
  );
};
