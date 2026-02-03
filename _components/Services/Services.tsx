import { title } from "process";
import ServiceCard from "../ServiceCard/ServiceCard";
import MotionWrapper from "../MotionWrapper/Motion";

export default function Service({ id }: { id?: string }) {
    const services = [
        {title: "Maintenance automobile", description: "Optimize efficiency, cut costs, and ensure quality with our seamless production solutions.", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"},
        {title: "Maintenance industrielle", description: "Transform your vision into reality with our design-to-production expertise.", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"},
        {title: "Audit Energetique", description: "Rely on our advanced inspection for flawless quality and peace of mind.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},
        {title: "Groupes electrogenes", description: "Embrace our latest tech tools and stay ahead in your market and industry.", icon: "M13 10V3L4 14h7v7l9-11h-7z"},
        {title: "Traitement eaux usées", description: "Rely on our packaging and logistics for safe, punctual deliveries.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"},
    {title: "Agro industrie", description: "Gain expert help in navigating market trends and making informed strategic decisions.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"},
    ];
  return (
    <section id={id} className="mt- bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Booster Vos Projets<br />
              Avec Nos Services Experts
            </h2>
            <p className="mx-auto max-w-2xl text-base text-white/80">
                Découvrez comment nos services spécialisés peuvent transformer vos idées en succès concrets.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service)=><MotionWrapper><ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon}/></MotionWrapper>)}
          </div>
        </div>
      </section>
 
  );
}