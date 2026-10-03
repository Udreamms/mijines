"use client";


import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import ChooseYourPath from "@/components/landing/ChooseYourPath";
import Stats from "@/components/landing/Stats";
/* Secciones ocultas — importar desde @/frontend/modules/marketing/home/secciones-ocultar/ */
// import Services from "@/frontend/modules/marketing/home/secciones-ocultar/Services";
// import ExperienceSection from "@/frontend/modules/marketing/home/secciones-ocultar/ExperienceSection";
// import WhyChooseUs from "@/frontend/modules/marketing/home/secciones-ocultar/WhyChooseUs";
// import JoinOurStudents from "@/frontend/modules/marketing/home/secciones-ocultar/JoinOurStudents";
// import YouTubeSubscription from "@/frontend/modules/marketing/home/secciones-ocultar/YouTubeSubscription";
import FAQsSection from "@/components/landing/FAQsSection";
import TouristShowcase from "@/components/landing/TouristShowcase";
import StudentShowcase from "@/components/landing/StudentShowcase";
import MentorshipShowcase from "@/components/landing/MentorshipShowcase";
import FreeTrainingShowcase from "@/components/landing/FreeTrainingShowcase";
import UdreammsTVShowcase from "@/components/landing/UdreammsTVShowcase";

export default function Home() {
  const handleStartQuote = () => {
    window.location.href = "/visas/student#calculator-section";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero onStartQuote={handleStartQuote} />

        {/* Bloque superior: espacio entre secciones en blanco */}
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24 bg-white [&>section]:scroll-mt-28">
          <ChooseYourPath />
          <StudentShowcase />
          <TouristShowcase />

          <MentorshipShowcase />
          <FreeTrainingShowcase />
        </div>

        {/* Desde MIJINES TV: fondo y espacios negros */}
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-24 bg-black [&>section]:scroll-mt-28">
          <UdreammsTVShowcase />

          {/* Logo de MIJINES y Ecuador centrados */}
          <section className="flex flex-col items-center px-6 text-center">
            <h2 className="mb-16 md:mb-20 lg:mb-24 text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.05] text-white tracking-tighter">
              ECUATORIANOS EN ACCIÓN
            </h2>
            {/* Logo de MIJINES y Ecuador juntos */}
            <div className="mb-20 md:mb-28 lg:mb-36">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24">
                <img
                  src="/icons/mijines-logo-840.webp"
                  alt="MIJINES | ECUATORIANOS EN ACCIÓN"
                  loading="lazy"
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] rounded-full object-cover shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                />
                <img
                  src="/assets/gran-colombia/ecuador.webp"
                  alt="Ecuador"
                  loading="lazy"
                  className="w-72 h-72 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] rounded-full object-cover shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                />
              </div>
            </div>
          </section>

          <Stats />
          <FAQsSection />
        </div>
      </main>

      <div className="bg-black pt-20 md:pt-28 lg:pt-36">
        <Footer />
      </div>
    </div>
  );
}
