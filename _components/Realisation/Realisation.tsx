'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../Card/Card';

// ============================================
// DONNÉES - BLOG POSTS
// ============================================
const blogPosts = [
  {
    id: 1,
    category: "Installation",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Poste electrique de transformation",
    excerpt: "Découvrez notre expertise dans l'installation de systèmes solaires, offrant des solutions énergétiques durables et efficaces.",
    image: "/4.jpeg",
  },
  {
    id: 2,
    category: "Maintenance",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Maintenance d'engins energetiques",
    excerpt: "Maintenance d'un generateur diesel concu pour la protection d'energie terrestre.",
    image: "/2.jpeg",
  },
  {
    id: 3,
    category: "Maintenance Miniere",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Maintenance des differents équipements de GETMA Mine",
    excerpt: "Prise en charge des travaux de maintenance miniere.",
    image: "/3.jpeg",
  },
  {
    id: 4,
    category: "Maintenance Miniere",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Maintenance des differents équipements de GETMA Mine",
    excerpt: "Prise en charge des travaux de maintenance miniere.",
    image: "/1.jpeg",
  },
  {
    id: 5,
    category: "installation",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Installation d'un systeme solaire",
    excerpt: "Découvrez notre expertise dans l'installation de systèmes solaires, offrant des solutions énergétiques durables et efficaces pour votre propriété.",
    image: "/5.jpeg",
  },
 
  {
    id: 6,
    category: "Maintenance Miniere",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Maintenance Miniere a GETMA",
    excerpt: "Prise en charge des travaux de maintenance miniere.",
    image: "/7.jpeg",
  },
  {
    id: 7,
    category: "Location de Matériel",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Location de camoniette de Transport et de matériel ",
    excerpt: "Découvrez nos options de location de matériel .",
    image: "/8.jpeg",
  },
  {
    id: 8,
    category: "Materiel d'audit",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Materiel d'audit Energetique",
    excerpt: "Onduleur solaire hybride utilisé pour gérer l'alimentation des panneaux solaires,des batteries et du reseau électrique.",
    image: "/9.jpeg",
  },
 
  {
    id: 9,
    category: "Audit Energétique",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Etapes et plans de realisation d'un audit energenetique",
    excerpt: "Prise en charge des etapes et plans de realisation d'un audit energenetique.",
    image: "/11.jpeg",
  },
  {
    id: 10,
    category: "Audit Energétique",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Audit energenetique a DIACFA,PPI et STAFF",
    excerpt: "Prise des differentes carateristiques liées a l'audit energenetique a DIACFA,PPI et STAFF.",
    image: "/12.jpeg",
  },
  {
    id: 11,
    category: "Maintenance ",
    date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
    title: "Maintenance a l'aeroport de Ouagadougou",
    excerpt: "Prise en charge du changement d'une pompe d'un aeronef a l'aeroport de Ouagadougou.",
    image: "/13.jpeg",
  },
];

export default function BlogCarousel({id}: {id?:string}) {
  const carouselRef = useRef<HTMLDivElement>(null);

  // ============================================
  // FONCTION DE DÉFILEMENT
  // ============================================
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left'
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id={id} className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-12 xl:grid-cols-[420px_1fr]">
          {/* ============================================
              COLONNE GAUCHE - TITRE ET NAVIGATION
              ============================================ */}
          <motion.div 
            className="flex flex-col justify-between"
            initial={{ opacity: 0.8, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2 text-sm font-medium text-gray-600">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                <span>Nos Réalisations & Outils</span>
              </div>
              
              <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-[2.75rem] xl:text-5xl">
                <span>Prenez une longueur d'avance grâce à nos conseils d'experts</span>
              </h2>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center gap-4 lg:mt-0">
              <button
                onClick={() => scroll('left')}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all  active:bg-emerald-700 hover:shadow-xl"
                aria-label="Previous blog post"
              >
                <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => scroll('right')}
                className="flex h-14 w-14 items-center justify-center rounded-full transition-all bg-white shadow-lg  active:bg-emerald-700 hover:shadow-xl "
                aria-label="Next blog post"
              >
                <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* ============================================
              COLONNE DROITE - CAROUSEL DE CARDS
              ============================================ */}
          <div className="relative -mx-6 overflow-hidden px-6 lg:mx-0 lg:px-0">
            <div
              ref={carouselRef}
              className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-4"
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="shrink-0"
                  style={{
                    width: '340px',
                  }}
                  initial={{ opacity: 0.8, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <Card  
                    image={post.image} 
                    title={post.title} 
                    date={post.date} 
                    category={post.category} 
                    description={post.excerpt} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          STYLES GLOBAUX POUR MASQUER SCROLLBAR
          ============================================ */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}