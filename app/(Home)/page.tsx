"use client";

import Header from "@/_components/Header/Header";
import Hero from "@/_components/Hero/Hero";
import Service from "@/_components/Services/Services";
import Footer from "@/_components/Footer/Footer";
import DirectorWord from "@/_components/DirectorWord/DirectorWord";
import Contact from "@/_components/Contact/Contact";
import Realisation from "@/_components/Realisation/Realisation";
import { motion } from "framer-motion";
import ScrollReveal from "@/_components/ScrollReveal/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header id="home"/>
      <ScrollReveal delay={0.1}><Hero /></ScrollReveal>
      <ScrollReveal delay={0.2}><DirectorWord  /></ScrollReveal>
      <ScrollReveal delay={0.3}><Service id="service" /></ScrollReveal>
      <ScrollReveal delay={0.4}><Realisation id="about"/></ScrollReveal>
      <ScrollReveal delay={0.5}><Contact id="contact"/></ScrollReveal>
      <ScrollReveal delay={0.6}><Footer /></ScrollReveal>
    </>
  );
}
