import { Dispatch, SetStateAction } from "react";

import { NavLayout } from "./NavLayout";

type Props = {
  navbarOpen: boolean;
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
};
export const NavLinks = ({ navbarOpen, setNavbarOpen }: Props) => {
  return (
    <div
      className={`${
        navbarOpen
          ? "flex flex-col items-start px-4 pb-4 space-y-2"
          : "flex flex-row items-center gap-4"
      }`}
    >
      <NavLayout
        name="Home"
        path="/"
        setNavbarOpen={setNavbarOpen}
        navbarOpen={navbarOpen}
      />
      <NavLayout
        name="Our Services"
        path="/services"
        setNavbarOpen={setNavbarOpen}
        navbarOpen={navbarOpen}
      />
      <NavLayout
        name="About Us"
        path="/about"
        setNavbarOpen={setNavbarOpen}
        navbarOpen={navbarOpen}
      />
      <NavLayout
        name="Contact Us"
        path="/contact"
        setNavbarOpen={setNavbarOpen}
        navbarOpen={navbarOpen}
      />
    </div>
  );
};
