import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 // Titre principal et template
  title: {
    default: 'SOMYECDA SARL - Entreprise Multiservices | Maintenance Industrielle & Automobile au Burkina Faso',
    template: '%s | SOMYECDA SARL',
  },
  icons: {
    icon: '/logo.png', 
  },

  // Description optimisée pour le SEO (max 160 caractères recommandé)
  description: 'SOMYECDA SARL : Expert en maintenance industrielle, automobile, groupes électrogènes, audit énergétique, traitement eaux usées et agro-industrie au Burkina Faso. Services professionnels et fiables.',

  // Mots-clés (moins important pour Google mais utile)
  keywords: [
    'SOMYECDA SARL',
    'maintenance industrielle Burkina Faso',
    'maintenance automobile Ouagadougou',
    'groupes électrogènes',
    'audit énergétique',
    'traitement eaux usées',
    'agro-industrie',
    'maintenance préventive',
    'maintenance corrective',
    'services industriels Burkina',
    'réparation automobile',
    'entretien véhicules',
    'efficacité énergétique',
    'assainissement',
    'transformation agricole',
    'ingénierie industrielle',
    'maintenance mécanique',
    'maintenance électrique',
    'expertise technique Burkina Faso',
    'entreprise multiservices Ouagadougou',
  ],

  // Auteur et informations de l'entreprise
  authors: [{ name: 'SOMYECDA SARL' }],
  creator: 'SOMYECDA SARL',
  publisher: 'SOMYECDA SARL',

  // Format et langue
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  
  // Langue et région
  alternates: {
    canonical: 'https://www.somyecda.com', // Remplacez par votre URL
    languages: {
      'fr-BF': 'https://www.somyecda.com',
      'fr': 'https://www.somyecda.com',
    },
  },

  // ============================================
  // OPEN GRAPH - FACEBOOK, LINKEDIN, WHATSAPP
  // ============================================
  openGraph: {
    type: 'website',
    locale: 'fr_BF',
    url: 'https://www.somyecda.com',
    siteName: 'SOMYECDA SARL',
    title: 'SOMYECDA SARL - Votre Partenaire Multiservices au Burkina Faso',
    description: 'Expert en maintenance industrielle, automobile, groupes électrogènes, audit énergétique, traitement eaux usées et agro-industrie. Services professionnels de qualité.',
    images: [
      {
        url: 'https://www.somyecda.com/logo.png', // À créer : 1200x630px
        width: 1200,
        height: 630,
        alt: 'SOMYECDA SARL - Entreprise Multiservices au Burkina Faso',
      },
      {
        url: 'https://www.somyecda.com/logo.png', // À créer : 1200x1200px
        width: 1200,
        height: 1200,
        alt: 'Logo SOMYECDA SARL',
      },
    ],
  },

  // ============================================
  // TWITTER CARD
  // ============================================
  twitter: {
    card: 'summary_large_image',
    title: 'SOMYECDA SARL - Entreprise Multiservices Burkina Faso',
    description: 'Maintenance industrielle, automobile, groupes électrogènes, audit énergétique, traitement eaux usées, agro-industrie. Services professionnels.',
    images: ['https://www.somyecda.com/twitter-image.jpg'], // À créer : 1200x675px
    creator: '@somyecda', // Remplacez par votre handle Twitter si vous en avez
  },

  // ============================================
  // ROBOTS & INDEXATION
  // ============================================
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ============================================
            SCHEMA.ORG - DONNÉES STRUCTURÉES
            Améliore considérablement le référencement local
            ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://www.somyecda.com',
              name: 'SOMYECDA SARL',
              legalName: 'SOMYECDA Société à Responsabilité Limitée',
              url: 'https://www.somyecda.com',
              logo: 'https://www.somyecda.com/logo.png',
              image: 'https://www.somyecda.com/logo.png',
              
              description: 'Entreprise multiservices spécialisée en maintenance industrielle, automobile, groupes électrogènes, audit énergétique, traitement eaux usées et agro-industrie au Burkina Faso.',
              
              // Adresse
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Votre adresse complète', // À COMPLÉTER
                addressLocality: 'Ouagadougou',
                addressRegion: 'Centre',
                postalCode: '01 BP XXXX', // À COMPLÉTER
                addressCountry: 'BF',
              },
              
              // Coordonnées GPS (Ouagadougou centre - À AJUSTER selon votre emplacement exact)
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '12.3714',
                longitude: '-1.5197',
              },
              
              // Contact
              telephone: '+226-70-23-06-90', // À COMPLÉTER
              email: 'contact@somyecda.com', // À COMPLÉTER
              
              // Horaires d'ouverture
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '17:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '12:00',
                },
              ],
              
              
              
              // Zone de service
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Ouagadougou',
                },
                {
                  '@type': 'Country',
                  name: 'Burkina Faso',
                },
              ],
              
              // Services offerts
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services SOMYECDA',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Maintenance Industrielle',
                      description: 'Services de maintenance préventive et corrective pour installations industrielles. Expertise en mécanique, électricité et automation.',
                      serviceType: 'Maintenance Industrielle',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Maintenance Automobile',
                      description: 'Entretien et réparation automobile professionnelle. Diagnostic, révision, mécanique générale pour tous types de véhicules.',
                      serviceType: 'Maintenance Automobile',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Groupes Électrogènes',
                      description: 'Installation, maintenance et réparation de groupes électrogènes. Solutions énergétiques fiables et durables.',
                      serviceType: 'Groupes Électrogènes',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Audit Énergétique',
                      description: 'Analyse et optimisation de la consommation énergétique. Recommandations pour réduire les coûts et améliorer l\'efficacité.',
                      serviceType: 'Audit Énergétique',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Traitement Eaux Usées',
                      description: 'Solutions professionnelles de traitement et assainissement des eaux usées. Installation et maintenance de systèmes de traitement.',
                      serviceType: 'Traitement Eaux Usées',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Agro-Industrie',
                      description: 'Équipements et services pour la transformation agricole. Solutions complètes pour l\'agro-industrie.',
                      serviceType: 'Agro-Industrie',
                    },
                  },
                ],
              },
              
            }),
          }}
        />

        {/* ============================================
            BREADCRUMB SCHEMA (pour une one page)
            ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Accueil',
                  item: 'https://www.somyecda.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Services',
                  item: 'https://www.somyecda.com#services',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Contact',
                  item: 'https://www.somyecda.com#contact',
                },
              ],
            }),
          }}
        />

        {/* ============================================
            ORGANIZATION SCHEMA
            ============================================ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SOMYECDA SARL',
              url: 'https://www.somyecda.com',
              logo: 'https://www.somyecda.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+226-XX-XX-XX-XX', // À COMPLÉTER
                contactType: 'Service Client',
                areaServed: 'BF',
                availableLanguage: ['fr', 'Français'],
              },
            }),
          }}
        />

        {/* ============================================
            META TAGS SUPPLÉMENTAIRES
            ============================================ */}
        {/* Géolocalisation */}
        <meta name="geo.region" content="BF" />
        <meta name="geo.placename" content="Ouagadougou" />
        <meta name="geo.position" content="12.3714;-1.5197" />
        <meta name="ICBM" content="12.3714, -1.5197" />
        
        {/* Langue */}
        <meta httpEquiv="content-language" content="fr-BF" />
        
        {/* Mobile */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Sécurité */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        

      </body>
    </html>
  );
}
