"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function Header() {
  const size = useWindowSize();

  const mobileMenu = useRef(null);
  const burgerButton = useRef(null);

  function toggle() {
    mobileMenu.current.classList.toggle("mobile-show");
    document.body.classList.toggle("overflow-y-hidden");
    document
      .getElementsByTagName("html")[0]
      .classList.toggle("overflow-y-hidden");

    burgerButton.current.classList.toggle("open");
  }

  useEffect(() => {
    // If the screen goes above 768px make sure all mobile menu classes are removed
    if (size.width > "768") {
      mobileMenu.current.classList.remove("mobile-show");
      document.body.classList.remove("overflow-y-hidden");
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
    }
    burgerButton.current.classList.remove("open");
  });

  const navigation = [
    { name: "Product", href: "/#" },
    { name: "Features", href: "/#" },
    { name: "Marketplace", href: "/#" },
    { name: "Company", href: "/#" },
  ];

  const secondaryNavigation = {
    name: "Contact",
    href: "/#",
  };

  return (
    // Navbar goes here
    // Outer Container / Background
    <nav className="relative z-10 bg-gray-100">
      {/* Inner Container */}
      <div className="z-10 px-8 mx-auto max-w-containerxl">
        {/* Layout Container */}
        <div className="z-10 flex justify-between">
          {/* Grouping Logo and Primary Nav */}
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link
                className="flex items-center px-2 text-gray-700 py-7 hover:text-gray-900"
                href="/#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-1 text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span className="font-bold">Next Template</span>
              </Link>
            </div>

            {/* Primary Nav */}
            <div className="items-center hidden space-x-1 md:flex">
              {navigation.map((item) => (
                <Link
                  className="px-3 text-gray-700 duration-300 py-7 hover:text-gray-900"
                  key={Math.random()}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Secondary Nav */}
          <div className="items-center hidden space-x-1 md:flex">
            <Link
              className="px-5 py-2 font-medium transition duration-300 rounded bg-primary-600 hover:bg-primary-500 text-primary-25"
              href={secondaryNavigation.href}
            >
              {secondaryNavigation.name}
            </Link>
          </div>

          {/* Mobile Button goes here */}
          <div className="flex items-center md:hidden">
            <div onClick={toggle} ref={burgerButton} className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenu} className="mobile-hidden md:hidden">
        {navigation.map((item) => (
          <Link
            onClick={toggle}
            className="px-4 py-4 font-medium text-gray-900 text-md"
            key={Math.random()}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
        <Link
          onClick={toggle}
          className="px-3 py-3 mt-4 font-medium text-center transition duration-300 rounded bg-primary-600 hover:bg-primary-500 text-primary-25"
          href={secondaryNavigation.href}
        >
          {secondaryNavigation.name}
        </Link>
      </div>
    </nav>
  );
}
