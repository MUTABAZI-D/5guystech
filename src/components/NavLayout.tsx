"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type NavLinkProps = {
  name: string;
  path: string;
  navbarOpen: boolean;
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavLayout = ({
  name,
  path,
  setNavbarOpen,
  navbarOpen,
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === path || (pathname.startsWith(path) && path !== "/");
  return (
    <Link
      href={path}
      className={` ${
        navbarOpen ? "py-1" : "px-4 py-2"
      }  rounded-md transition-all duration-200 ${
        isActive
          ? `text-blue-600 font-semibold  dark:text-blue-500 border-blue-600 ${
              navbarOpen ? "border-none" : "border-b-2"
            }`
          : "text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300"
      }`}
      onClick={() => {
        if (setNavbarOpen) {
          setNavbarOpen(false);
        }
      }}
    >
      {name}
    </Link>
  );
};
