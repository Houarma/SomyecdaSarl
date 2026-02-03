import TypewriterText from "../TypeWriterText/TypeWriterText"

export default function Contact({ id }: { id?: string }) {
  return (<>
    <section id={id} className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div>
              {/* <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                It's time to support zero pollution,<br />
                with renewable resources
              </h2> */}
              <TypewriterText text="Parlons de votre projet dès aujourd’hui. Contactez-nous et transformons vos idées en résultats concrets." className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl" />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-white/90">Experienced from more to 20 years</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-white/90">Support for the latest technology</span>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="text-white/80">
              <p className="mb-8 text-sm leading-relaxed">
               Chez SOMYECDA SARL, nous plaçons la satisfaction de nos clients au cœur de chaque projet. Avec rigueur et engagement, nous vous accompagnons pour transformer vos ambitions en résultats concrets et durables.
              </p>
              
              <button className="flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-gray-900">
                Get started
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
  </>);
}