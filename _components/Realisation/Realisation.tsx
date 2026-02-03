'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Card } from '../Card/Card';



// ============================================
// DONNÉES - BLOG POSTS
// ============================================
const blogPosts = [
  {
    id: 1,
    category: "Snow Removal",
    date: "Sep 26, 2025",
    title: "How to Protect Your Property During Heavy Snowfalls",
    excerpt: "Heavy snow can stress roofs, gutters outdoor spaces shares practical step for snow removal.",
    fullContent: "Heavy snow accumulation poses significant risks to your property. This comprehensive guide covers essential protective measures including roof maintenance, gutter cleaning, proper drainage, and emergency preparation. Learn how to identify warning signs of structural stress and take preventive action before damage occurs.",
    image: "/truck.webp",
    link: "#",
  },
  {
    id: 2,
    category: "Snow Removal",
    date: "Sep 19, 2025",
    title: "Ice Management Tips for the Safer Property Access",
    excerpt: "Slippery surfaces are a leading cause of winter accidents this guide highlights effective ice.",
    fullContent: "Ice formation on walkways, driveways, and parking areas creates serious safety hazards. Discover professional ice management techniques including proper de-icing products, timing strategies, and preventive measures. We'll show you how to maintain safe access throughout the winter season while protecting your property's surfaces.",
    image: "/truck.webp",
    link: "#",
  },
  {
    id: 3,
    category: "Snow Removal",
    date: "Sep 15, 2025",
    title: "The Ultimate Guide to Winter Snow Removal Equipment",
    excerpt: "From shovels to industrial plows, understand your snow removal equipment and choose the right tools for your property.",
    fullContent: "Choosing the right snow removal equipment can make winter maintenance efficient and cost-effective. This guide explores everything from basic shovels to professional-grade snow blowers and plows. Learn about maintenance requirements, cost considerations, and which tools work best for different property sizes and snow conditions.",
    image: "/truck.webp",
    link: "#",
  },
  {
    id: 4,
    category: "Snow Removal",
    date: "Sep 12, 2025",
    title: "Commercial vs Residential Snow Removal Services",
    excerpt: "Learn the key differences between commercial and residential snow removal needs and requirements.",
    fullContent: "Commercial and residential properties have vastly different snow removal requirements. This article breaks down timing expectations, equipment needs, liability concerns, and service level agreements. Understanding these differences helps you choose the right service provider and set appropriate expectations for your property type.",
    image: "/truck.webp",
    link: "#",
  },
  {
    id: 5,
    category: "Snow Removal",
    date: "Sep 08, 2025",
    title: "Winter Safety Tips for Property Managers",
    excerpt: "Essential safety protocols and best practices for managing multiple properties during winter months.",
    fullContent: "Property managers face unique challenges during winter. This comprehensive guide covers safety protocols, liability management, contractor coordination, and emergency response planning. Learn how to protect tenants, maintain compliance, and efficiently manage snow removal across multiple properties.",
    image: "/truck.webp",
    link: "#",
  },
];

export default function BlogCarousel({id}: {id?:string}) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // ============================================
  // FONCTION DE DÉFILEMENT
  // ============================================
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 450; // Largeur d'une card + gap
      const newScrollLeft = direction === 'left'
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  // ============================================
  // TOGGLE READ MORE
  // ============================================
  const toggleReadMore = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id={id} className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-12 xl:grid-cols-[420px_1fr]">
          {/* ============================================
              COLONNE GAUCHE - TITRE ET NAVIGATION
              ============================================ */}
          <div className="flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="mb-3 flex-wrap flex items-center gap-2 text-sm font-medium text-gray-600">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                <span>Nos Realisation & Outils</span>
              </div>
              
              <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-[2.75rem] xl:text-5xl">
                <span>Prenez une longueur d'avance  grâce à nos conseils d'experts</span>
              </h2>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex items-center gap-4 lg:mt-0">
              <button
                onClick={() => scroll('left')}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl active:scale-95"
                aria-label="Previous blog post"
              >
                <svg className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => scroll('right')}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 shadow-lg transition-all hover:bg-emerald-700 hover:shadow-xl active:scale-95"
                aria-label="Next blog post"
              >
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* ============================================
              COLONNE DROITE - CAROUSEL DE CARDS
              ============================================ */}
          <div className="relative">
            <div
              ref={carouselRef}
              className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {blogPosts.map((post, index) => (
               
                  
                <Card  key={post.id} image={post.image} title={post.title} date={post.date} category={post.category} description={ post.excerpt} />
                    
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          STYLES PERSONNALISÉS
          ============================================ */}
      <style jsx>{`
        /* Masquer la scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Animation fade in */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}