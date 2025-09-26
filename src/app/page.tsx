"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import photoProfile from "@/assets/images/photo-profile.png";
import iconLinkedin from "@/assets/icons/ic-linkedin.svg";
import iconInstagram from "@/assets/icons/ic-instagram.svg";
import iconGithub from "@/assets/icons/ic-github.svg";
import previewBeaCukai from "@/assets/images/project-bea-cukai.png";
import previewMyIndihome from "@/assets/images/project-my-indihome.png";
import previewMajooDashboard from "@/assets/images/project-majoo-dashboard.png";
import previewIrecruit from "@/assets/images/project-aia-indonesia.png";
import dataContent from "./conten.json";

import { Poppins } from "next/font/google";
import Header from "@/components/Header";

const poppinsRegular = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsMedium = Poppins({ weight: "600", subsets: ["latin"] });

const {
  fullName,
  profession,
  summary,
  buttonPrimaryLabel,
  buttonSecondaryLabel,
  experience,
  projects,
} = dataContent;

const imageProject = {
  "project-bea-cukai": previewBeaCukai,
  "project-my-indihome": previewMyIndihome,
  "project-majoo-dashboard": previewMajooDashboard,
  "project-aia-indonesia": previewIrecruit,
};

function TechCard({ children }: { children: string | JSX.Element }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`${poppinsRegular.className} px-3 py-2 rounded-2xl w-fit text-xs md:text-sm mr-3 mb-3 shadow-sm`}
      style={{ backgroundColor: "rgba(132, 231, 213, 0.15)", color: "#84E7D5" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const handleDownload = () => {
    const pdfUrl = "/documents/CV - RIAN AKBAR FERDIANSYAH 2025.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV RIAN AKBAR FERDIANSYAH 2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    const link = document.createElement("a");
    link.href = "mailto:ryanakbar0987@gmail.com";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main
      className="flex flex-col items-center min-h-screen text-white"
      style={{ backgroundColor: "#101729" }}
    >
      <Header />
      {/* HERO */}
      <motion.section
        className="w-full max-w-screen-xl px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center gap-10 pt-24 mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        id="home"
      >
        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            className="rounded-2xl shadow-lg hidden lg:block"
            src={photoProfile}
            alt="Photo Profile"
            width={400}
            priority
          />
          <Image
            className="rounded-xl shadow-md block lg:hidden"
            src={photoProfile}
            alt="Photo Profile"
            width={200}
            priority
          />
        </motion.div>

        {/* INFO */}
        <motion.div
          className="flex flex-col space-y-6 max-w-2xl"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="space-y-2">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold"
              style={poppinsMedium.style}
            >
              {fullName}
            </h1>
            <h2
              className="text-xl md:text-2xl lg:text-3xl text-slate-300"
              style={poppinsRegular.style}
            >
              {profession}
            </h2>
          </div>
          <p
            className="text-slate-400 leading-relaxed text-sm md:text-base lg:text-lg"
            style={poppinsRegular.style}
          >
            {summary}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 rounded-md bg-slate-700/30 hover:bg-slate-600/40 transition-colors text-sm md:text-base"
              onClick={handleDownload}
            >
              {buttonSecondaryLabel}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 rounded-md bg-teal-400/20 text-teal-300 hover:bg-teal-400/30 transition-colors text-sm md:text-base"
              onClick={handleContact}
            >
              {buttonPrimaryLabel}
            </motion.button>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/ryanakbar20/" target="_blank">
              <Image src={iconLinkedin} alt="Linkedin" width={28} />
            </a>
            <a href="https://www.instagram.com/ryanakbardev/" target="_blank">
              <Image src={iconInstagram} alt="Instagram" width={28} />
            </a>
            <a href="https://github.com/ryanakbar20" target="_blank">
              <Image src={iconGithub} alt="Github" width={28} />
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* EXPERIENCE */}
      <section
        className="w-full max-w-screen-xl px-6 md:px-12 lg:px-20 mt-20"
        id="experience"
      >
        <h3
          className="text-2xl md:text-3xl font-semibold"
          style={poppinsMedium.style}
        >
          EXPERIENCE
        </h3>
        <div className="flex flex-col mt-10 space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={index + item.period}
              className="flex flex-col md:flex-row md:gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="hidden md:block text-xs md:text-sm text-slate-400 w-40">
                {item.period}
              </p>
              <div className="flex flex-col space-y-4 max-w-3xl">
                <h4 className="text-lg md:text-xl font-medium">{item.title}</h4>
                <p className="md:hidden text-xs text-teal-300">{item.period}</p>
                <div className="flex flex-col gap-2 text-sm md:text-base text-slate-400 leading-relaxed">
                  {item.description.map((desc) => (
                    <p key={desc}>{desc}</p>
                  ))}
                </div>
                <div className="flex flex-wrap">
                  {item.tech.map((technology) => (
                    <TechCard key={technology}>{technology}</TechCard>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        className="w-full max-w-screen-xl px-6 md:px-12 lg:px-20 mt-20"
        id="projects"
      >
        <h3 className="text-2xl md:text-3xl font-semibold">PROJECTS</h3>
        <div className="flex flex-col gap-12 mt-10">
          {projects.map((item, index) => (
            <motion.div
              key={index + item.title}
              className="flex flex-col md:flex-row gap-6 items-start"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/3">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Image
                    src={imageProject[item.image as keyof typeof imageProject]}
                    alt={item.title}
                    className="rounded-xl shadow-md"
                  />
                </motion.div>
              </div>
              <div className="flex flex-col space-y-4 max-w-2xl">
                <h4 className="text-lg md:text-xl font-medium">{item.title}</h4>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full text-center mt-20">
        <p className="text-slate-500 py-10 text-xs md:text-sm">
          © 2025 rianakbar.com | inspired by{" "}
          <a
            className="text-teal-300 underline"
            href="https://brittanychiang.com/"
            target="_blank"
          >
            brittanychiang.com
          </a>
        </p>
      </footer>
    </main>
  );
}
