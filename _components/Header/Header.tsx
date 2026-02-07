'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import { motion, useScroll, useMotionValueEvent } from "motion/react"


export default function Header({ id }: { id?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Acceuil' },
    { href: '#about', label: 'À propos' },
    { href: '#contact', label: 'Contact' },
    { href: '#service', label: 'Service' },
  ];
  const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
  return (
    
      <motion.header animate={{
                    y: hidden ? -140 : 0,
                    opacity: hidden ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }} id={id} className=" fixed left-0 right-0 top-0 z-50 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex-col md:flex-row flex max-w-7xl md:items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <div className="flex justify-between items-center gap-2">
            <div className="  items-center justify-center  ">
               {/* Logo */}
                <Link href="#home" className=" items-center">
                  <Logo/>
                </Link>
            </div>
              {/* Bouton Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=" h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
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
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              {link.label}
            </Link>
          ))}
            
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
             <Link href="mailto:somyecda@contact.com" className="rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105">
            Message
          </Link>
          </div>
         
        
        {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-6 pb-6 pt-4">
            <div className="flex flex-col items-center gap-4">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-green-600"
              >
                {link.label}
              </Link>
            ))}
            </div>
            <div className="pt-4">
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full rounded-full bg-green-500 px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-green-600"
              >
                Message
              </Link>
            </div>
          </div>
        </div>
      )}
        </nav>
      </motion.header>
      
    
  );
}