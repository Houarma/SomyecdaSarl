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
        url: 'https://www.somyecda.com/og-image.jpg', // À créer : 1200x630px
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
        {/* Schema.org pour Google - Données structurées */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://www.somyecda.com',
              name: 'SOMYECDA SARL',
              image: 'https://www.somyecda.com/logo.png',
              description: 'Entreprise multiservices spécialisée en maintenance industrielle, automobile, groupes électrogènes, audit énergétique, traitement eaux usées et agro-industrie au Burkina Faso.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Votre adresse ici', // À compléter
                addressLocality: 'Ouagadougou',
                addressRegion: 'Centre',
                postalCode: '01 BP XXXX', // À compléter
                addressCountry: 'BF',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '12.3714', // Coordonnées de Ouagadougou - À ajuster
                longitude: '-1.5197',
              },
              url: 'https://www.somyecda.com',
              telephone: '+226-XX-XX-XX-XX', // À compléter
              email: 'contact@somyecda.com', // À compléter
              priceRange: '$$',
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
              sameAs: [
                // 'https://www.facebook.com/somyecda', // À compléter
                // 'https://www.linkedin.com/company/somyecda', // À compléter
                // 'https://twitter.com/somyecda', // À compléter
              ],
              areaServed: {
                '@type': 'Country',
                name: 'Burkina Faso',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services SOMYECDA',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Maintenance Industrielle',
                      description: 'Services de maintenance préventive et corrective pour installations industrielles',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Maintenance Automobile',
                      description: 'Entretien et réparation de véhicules professionnels',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Groupes Électrogènes',
                      description: 'Installation, maintenance et réparation de groupes électrogènes',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Audit Énergétique',
                      description: 'Analyse et optimisation de la consommation énergétique',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Traitement Eaux Usées',
                      description: 'Solutions de traitement et assainissement des eaux usées',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Agro-Industrie',
                      description: 'Services et équipements pour la transformation agricole',
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Balises meta supplémentaires */}
        <meta name="geo.region" content="BF" />
        <meta name="geo.placename" content="Ouagadougou" />
        <meta name="geo.position" content="12.3714;-1.5197" />
        <meta name="ICBM" content="12.3714, -1.5197" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        

      </body>
    </html>
  );
}
