import Image from "next/image";
import NavbarItem from "./NavbarItem";

import { CiMenuKebab } from "react-icons/ci";
import MobileMenu from "./MobileMenu";
import { useCallback, useEffect, useState } from "react";

import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import useCurrentUser from "@/hooks/useCurrentUser";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 70;

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);

  const [background, setBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { data: currentUser } = useCurrentUser();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`flex items-center p-5 transition duration-50 ${
          background ? "bg-zinc-900/90" : ""
        }`}
      >
        <div
          className="lg:hidden flex flex-row items-center mr-3 cursor-pointer relative"
          onClick={toggleMobileMenu}
        >
          <CiMenuKebab color="white" size={30} />
          <MobileMenu visible={mobileMenu} />
        </div>
        <Image src="/images/logo.png" alt="logo" height={100} width={100} />
        <div className="hidden lg:flex flex-row ml-8 gap-7">
          <NavbarItem label="Home" href="/" />
          <NavbarItem label="Tv Shows" href="/shows" />
          <NavbarItem label="Movies" href="/movies" />
          <NavbarItem label="Recently added" href="/recently" />
          <NavbarItem label="My List" href="/list" />
        </div>
        <div className="ml-auto flex flex-row gap-4 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell />
          </div>
          <div
            className="flex flex-row items-center gap-1 relative cursor-pointer"
            onClick={toggleAccountMenu}
          >
            <div className="w-7 h-7 overflow-hidden rounded-full">
              <img
                src={
                  currentUser?.image
                    ? currentUser?.image
                    : "/images/default-slate.png"
                }
                alt="profile picture"
              />
            </div>
            <BsChevronDown
              color="white"
              size={13}
              className={`${
                accountMenu ? "rotate-180" : "rotate-0"
              } transition`}
            />
            <AccountMenu visible={accountMenu} user={currentUser} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
