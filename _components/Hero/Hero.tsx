import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 pb-0 pt-20 sm:px-6 md:pt-24 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* Container principal */}
        <div className="hero-wrapper relative">
          {/* Container de l'image avec forme personnalisée */}
          <div className="relative overflow-hidden" style={{
            borderTopLeftRadius: '40px',
            borderTopRightRadius: '40px',
            borderBottomLeftRadius: '80px 40px',
            borderBottomRightRadius: '80px 40px',
          }}>
            {/* Cercles de décoration aux coins */}
          
            {/* Image de fond */}
            <div className="absolute inset-0">
              <Image
                src="/solar.jpg"
                alt="Solar panels installation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Contenu Hero */}
            <div className="relative z-10 px-6 pb-0 pt-12 sm:px-8 md:px-12 md:pt-16 lg:px-16 lg:pt-20 xl:px-20">
              <div className="grid items-start gap-8 lg:grid-cols-2">
                {/* Colonne gauche - Contenu texte */}
                <div className="pb-32 pt-4 sm:pb-40 md:pb-48 lg:pb-56 xl:pb-64">
                  {/* Badge */}
                  <div className="mb-5">
                    <span className="inline-block text-xs font-medium text-white/90 sm:text-sm">
                      #1 des entreprises proche de vous
                    </span>
                  </div>

                  {/* Titre principal */}
                  <h1 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:mb-10 lg:text-5xl xl:text-6xl">
                    SOMYECDA, Experts en maintenance énergétique, mécanique et industrielle
                  </h1>

                  {/* Boutons CTA */}
                  <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                    <Link
                      href="#contact"
                      className="group inline-flex items-center gap-2 border-b-2 border-white pb-1 text-sm font-semibold text-white transition-all hover:border-green-400 hover:text-green-400 sm:text-base"
                    >
                      Contact
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>

                    <Link
                      href="#service"
                      className="group inline-flex items-center gap-2 border-b-2 border-white pb-1 text-sm font-semibold text-white transition-all hover:border-green-400 hover:text-green-400 sm:text-base"
                    >
                      Services
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Colonne droite - Card flottante */}
                <div className="hidden lg:flex lg:items-start lg:justify-end lg:pb-56 lg:pt-16 xl:pb-64">
                  <div className="group relative w-full max-w-[300px] overflow-hidden rounded-[2rem] bg-white/95 p-5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] xl:max-w-[320px] xl:p-6">
                    {/* Image du camion */}
                    <div className="relative mb-4 h-36 w-full overflow-hidden rounded-[1.5rem] xl:h-40">
                      <Image
                        src="/truck.webp"
                        alt="SOMYECDA truck"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Icône play */}
                    <button 
                      className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white xl:h-12 xl:w-12"
                      aria-label="Voir la vidéo"
                    >
                      <Link href="#about">
                      <svg
                        className="ml-0.5 h-4 w-4 text-gray-800 xl:h-5 xl:w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      </Link>
                      
                    </button>

                    {/* Texte */}
                    <p className="text-xs font-medium leading-relaxed text-gray-600">
                      découvrir nos<br />
                      récent projets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Stats avec forme ondulée qui chevauche */}
          <div className="relative -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 xl:-mt-56">
            <div className="bg-white px-6 py-8 sm:px-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:px-20" style={{
              borderTopLeftRadius: '60px',
              borderTopRightRadius: '60px',
            }}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 lg:gap-12">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                    +200
                  </div>
                  <div className="text-xs text-gray-600 sm:text-sm lg:text-base">
                    Projets complétés sur<br className="hidden sm:inline" /> terrain
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                    +100
                  </div>
                  <div className="text-xs text-gray-600 sm:text-sm lg:text-base">
                    Équipes<br className="hidden sm:inline" /> dynamiques
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                    +50
                  </div>
                  <div className="text-xs text-gray-600 sm:text-sm lg:text-base">
                    Partenaire<br className="hidden sm:inline" /> engagé
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card flottante mobile - en dessous */}
        <div className="mt-6 px-4 pb-8 lg:hidden">
          <div className="group relative mx-auto max-w-sm overflow-hidden rounded-[2rem] bg-white p-5 shadow-xl">
            {/* Image du camion */}
            <div className="relative mb-4 h-40 w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src="/truck.webp"
                alt="SOMYECDA truck"
                fill
                className="object-cover"
              />
            </div>

            {/* Icône play */}
            <button 
              className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
              aria-label="Voir la vidéo"
            >
              <svg
                className="ml-0.5 h-5 w-5 text-gray-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Texte */}
            <p className="text-xs font-medium text-gray-600">
              découvrir nos récent projets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}