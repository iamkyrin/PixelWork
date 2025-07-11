import { Link } from "react-router-dom";
import logo from "/src/assets/icon.png";
import { Button, useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className="flex justify-center font-inter">
      <div className="flex gap-12 sm:gap-5 p-8">
        <div className="w-10">
          <img alt="PixelWork Logo" src={logo}></img>
        </div>
        <a
          href="https://github.com/iamkyrin"
          className="cursor-pointer mt-2 md:mt-2 xl:ml-0 xl:mt-0 md:ml-2 xl:text-4xl sm:text-xl font-bold"
        >
          PixelWork
        </a>
      </div>

      <nav className="flex justify-around hidden 2xl:flex lg:flex md:flex">
        <ul className="flex justify-between items-center sm:gap-8 gap-5 md:gap-20 lg:gap-12 p-10">
          <a href="/">
            <li className="hover:text-blue-500">Home</li>
          </a>
          <Link to={"/about"}>
            <li className="hover:text-blue-500">About</li>
          </Link>

          <div className="">
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
            </Button>
          </div>
        </ul>
      </nav>

      {/*Hamburger menu */}
      <div className="lg:hidden ml-20">
        <button
          className="2xl:hidden md:hidden sm:block"
          onClick={() => setHamburger(!hamburger)}
        >
          {hamburger ? (
            <>
              <div className="absolute right-4 top-10 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </>
          ) : (
            <>
              <div className="absolute right-4 top-11 transition">
                <RxHamburgerMenu />
              </div>
            </>
          )}
        </button>
      </div>
      {hamburger && (
        <>
          <div className="2xl:hidden lg:hidden md:hidden flex">
            <ul className="flex  flex-col justify-between items-center sm:gap-8 gap-5 md:gap-20 lg:gap-12 pt-20">
              <a href="/">
                <li className="hover:text-blue-500">Home</li>
              </a>
              <Link to={"/about"}>
                <li className="hover:text-blue-500">About</li>
              </Link>
              <div className="">
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
                </Button>
              </div>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
