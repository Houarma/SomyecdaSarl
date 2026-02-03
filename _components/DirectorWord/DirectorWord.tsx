import Image from "next/image";
import ButtonText from "./ButtonText/ButtonText";

export default function Home() {
  
  const services = ["Maintenance automobile","Maintenance industrielle","Audit Energetique","Traitement eaux usées"];
  return (<>
    <section className="bg-[#f5f5f7] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Voyez comment nous resolvons <br />
              les problemes, <span className="font-light text-gray-500">en visant juste</span>
            </h2>
          </div>

          {/* Case Study Card */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Somyecda</h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                SOMYECDA SARL est une enterprise multiservices spécialisée dans la maintenance automobile , maintenance industrielle , les groupes electrogenes , le traitement des eaux usées , l'audit énergétique et l'agro industrie  .
                Que vous ayez besoin d'une maintenance industrielle  rigoureuse, d'une expertise automobile pointue ou la réalisation d'un audit énergétique , d'un traitements en eaux usées , d'un expertise en groupes electrogenes  et des besoins en agro industrie, vous pouvez compter sur nous.
                Notre équipe expérimentée et compétente  ayant les connaissances et l'expérience nécessaires pour prendre en charge tous vos besoins.</p>
              
              <button className="mb-8 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl">
                En savoir plus
              </button>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs text-gray-500">
                  <span className="font-semibold text-gray-900">Hamade Ouedraogo</span> — CEO Of Somyecda
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative h-[500px] overflow-hidden rounded-3xl bg-white shadow-xl">
                <Image
                  src="/pdg.jpg"
                  alt="Solar panel installation"
                  fill
                  className=" object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-gray-500">
             {services.map((service)=> <ButtonText text={service} key={service} />)}
          </div>
        </div>
      </section>

  </>);
}