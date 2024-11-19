"use client"; // Enables client-side interactivity

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>
      
      <div className="container mx-auto z-10 relative px-6 sm:px-10">
        <div className="flex flex-col items-center justify-center gap-14">
          {/* Logo */}
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
            <Image
              src="/assets/logo.svg"
              fill
              alt="Logo"
              className="object-contain"
            />
          </Link>
          
          {/* Navigation */}
          <nav className="flex flex-wrap gap-4 sm:gap-8 xl:gap-12 justify-center items-center text-center">
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="uppercase text-white tracking-widest hover:text-accent transition-all text-sm sm:text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="text-center text-white/70 text-sm sm:text-base">
            <p>Email: <a href="mailto:info@example.com" className="hover:text-accent transition-all">info@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-accent transition-all">+94 7021 62886</a></p>
          </div>

          {/* Social Media */}
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-4 text-white text-lg sm:text-xl">
            {[FaYoutube, FaFacebook, FaTwitter, FaInstagram].map((Icon, idx) => (
              <li key={idx}>
                <Link
                  href="/"
                  className="w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
                >
                  <Icon />
                </Link>
              </li>
            ))}
          </ul>

          {/* Back to Top */}
          <div className="text-center">
          <button className="btn">Back To Top</button>
          </div>

          {/* Copyright */}
          <div className="w-full border-t border-white/10 text-[14px] sm:text-[15px] text-white/70 font-light py-6 text-center">
            <p>&copy; Copyright 2024 - Sasindu Weerasekara. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
