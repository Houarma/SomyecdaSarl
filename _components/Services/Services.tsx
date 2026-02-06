import { title } from "process";
import ServiceCard from "../ServiceCard/ServiceCard";
import MotionWrapper from "../MotionWrapper/Motion";

export default function Service({ id }: { id?: string }) {
   const services = [
  {
    title: "Maintenance Automobile",
    description: "Expertise automobile complète pour véhicules légers et poids lourds. Diagnostic, entretien préventif et réparation de qualité pour garantir la longévité de votre flotte.",
    details: "Dans un contexte burkinabé où les conditions routières sont exigeantes (poussière, chaleur, routes dégradées), une maintenance automobile rigoureuse est cruciale. SOMYECDA assure l'entretien complet de tous types de véhicules : voitures particulières, véhicules utilitaires, poids lourds et engins de chantier. Nos techniciens expérimentés maîtrisent les spécificités des véhicules circulant au Burkina Faso et proposent des solutions adaptées au climat sahélien. Diagnostic électronique, révision moteur, système de refroidissement renforcé, filtration optimisée pour la poussière : nous prolongeons la durée de vie de vos véhicules tout en réduisant vos coûts d'exploitation. Service rapide pour minimiser l'immobilisation de votre flotte.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
  },
  {
    title: "Maintenance Industrielle",
    description: "Solutions complètes de maintenance préventive et corrective pour installations industrielles. Optimisation de la production et réduction des arrêts non planifiés.",
    details: "Le développement industriel du Burkina Faso nécessite des équipements fiables et performants. SOMYECDA accompagne les industries minières, agroalimentaires, textiles et manufacturières avec des services de maintenance industrielle de classe mondiale. Face aux défis énergétiques du pays (délestages fréquents, instabilité électrique), nous intervenons sur tous types d'équipements : machines-outils, systèmes de production, installations électromécaniques, systèmes hydrauliques et pneumatiques. Notre approche préventive permet d'anticiper les pannes, d'optimiser la disponibilité des équipements et de réduire les coûts de production. Nous comprenons les enjeux de compétitivité des entreprises burkinabées et proposons des contrats de maintenance sur mesure adaptés à vos contraintes budgétaires et opérationnelles.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Audit Énergétique",
    description: "Analyse approfondie de votre consommation énergétique. Recommandations concrètes pour réduire vos factures et améliorer votre efficacité énergétique.",
    details: "L'énergie représente un coût majeur pour les entreprises burkinabées. Face à la cherté de l'électricité et aux coupures fréquentes, SOMYECDA vous aide à optimiser votre consommation énergétique. Nos audits identifient les gaspillages, dimensionnent correctement vos installations et proposent des solutions d'économie d'énergie adaptées au contexte local. Nous analysons vos équipements (climatisation, éclairage, machines, groupes électrogènes) et recommandons des améliorations rentables : passage au solaire photovoltaïque, optimisation des groupes électrogènes, amélioration de l'isolation, modernisation des équipements énergivores. Dans un pays où l'accès à l'énergie fiable est un défi stratégique, notre expertise vous permet de réduire vos coûts de 20 à 40% tout en améliorant votre autonomie énergétique. Solutions pratiques et retour sur investissement rapide garantis.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Groupes Électrogènes",
    description: "Installation, maintenance et dépannage de groupes électrogènes. Solutions énergétiques fiables pour assurer la continuité de vos activités.",
    details: "Au Burkina Faso, où les délestages et coupures d'électricité sont quotidiens, disposer d'un groupe électrogène fiable est vital pour toute entreprise sérieuse. SOMYECDA est votre partenaire de confiance pour l'installation, la maintenance préventive et le dépannage rapide de groupes électrogènes de toutes puissances (de 5 kVA à 1000 kVA et plus). Nous travaillons avec les meilleures marques et assurons un service de qualité pour garantir votre autonomie énergétique. Nos techniciens interviennent rapidement en cas de panne, car nous comprenons qu'une heure d'arrêt peut vous coûter cher. Maintenance programmée, fourniture de pièces d'origine, formation de vos équipes, contrats d'entretien flexibles : nous vous libérons du souci énergétique pour que vous puissiez vous concentrer sur votre cœur de métier. Service disponible 24/7 pour les urgences.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Traitement des Eaux Usées",
    description: "Conception, installation et maintenance de systèmes de traitement des eaux usées. Solutions écologiques et conformes aux normes environnementales.",
    details: "L'assainissement et la gestion durable de l'eau sont des enjeux cruciaux pour le développement du Burkina Faso. Dans un contexte de stress hydrique croissant et de renforcement des normes environnementales, SOMYECDA accompagne les industries, hôtels, hôpitaux et collectivités dans le traitement responsable de leurs eaux usées. Nous concevons et installons des stations d'épuration adaptées au climat sahélien et aux contraintes locales : systèmes à faible consommation énergétique, entretien simplifié, résistance aux variations de température. Nos solutions permettent le recyclage de l'eau pour l'irrigation ou les usages industriels, réduisant ainsi votre consommation d'eau potable et votre impact environnemental. Conformité avec les normes burkinabées, formation de vos équipes, maintenance préventive : nous vous aidons à respecter vos obligations environnementales tout en valorisant vos effluents. Un investissement pour l'avenir du Burkina Faso.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Agro-Industrie",
    description: "Équipements et solutions pour la transformation agricole. Accompagnement complet des acteurs de la chaîne de valeur agricole du Burkina Faso.",
    details: "L'agriculture emploie 80% de la population burkinabée, mais la transformation locale reste insuffisante. SOMYECDA s'engage pour la valorisation des productions agricoles nationales en accompagnant les acteurs de l'agro-industrie. Nous fournissons et entretenons les équipements de transformation : décortiqueuses, broyeurs, presses à huile, séchoirs, étuveuses, unités de conditionnement. Notre expertise couvre les principales filières burkinabées : céréales (riz, mil, maïs), oléagineux (sésame, arachide, karité), fruits et légumes. Face aux défis de conservation et de valorisation des récoltes, nous proposons des solutions techniques adaptées aux petites et moyennes unités de transformation. Installation clé en main, formation des opérateurs, maintenance préventive, approvisionnement en pièces détachées : nous soutenons l'émergence d'une agro-industrie burkinabée compétitive et créatrice d'emplois. Ensemble, transformons le Burkina Faso en hub régional de transformation agricole.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
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
            {services.map((service)=><MotionWrapper><ServiceCard key={service.title} title={service.title} description={service.description} details={service.details} icon={service.icon}/></MotionWrapper>)}
          </div>
        </div>
      </section>
 
  );
}