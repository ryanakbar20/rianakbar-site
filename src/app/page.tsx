"use client";

import Image from "next/image";
import photoProfile from "@/assets/images/photo-profile.png";
import iconLinkedin from "@/assets/icons/ic-linkedin.svg";
import iconInstagram from "@/assets/icons/ic-instagram.svg";
import iconGithub from "@/assets/icons/ic-github.svg";
import previewBeaCukai from "@/assets/images/project-bea-cukai.png";
import previewMyIndihome from "@/assets/images/project-my-indihome.png";
import previewMajooDashboard from "@/assets/images/project-majoo-dashboard.png";
import dataContent from "./conten.json";

import { Poppins } from "next/font/google";

const poppinsRegular = Poppins({ weight: "500", subsets: ["devanagari"] });
const poppinsMedium = Poppins({ weight: "600", subsets: ["devanagari"] });

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
};

function TechCard({ children }: { children: string | JSX.Element }) {
  return (
    <div
      className={`${poppinsRegular.className} px-3 py-2 rounded-3xl w-fit text-xs mr-4 mb-4`}
      style={{ backgroundColor: "rgba(132, 231, 213, 0.20)", color: "#84E7D5" }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const handleDownload = () => {
    const pdfUrl = "/documents/CV - RIAN AKBAR FERDIANSYAH 2024.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV - RIAN AKBAR FERDIANSYAH 2024.pdf";
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
      className="flex flex-col items-center min-h-screen px-4 md:px-0 text-white"
      style={{
        backgroundColor: "#101729",
      }}
    >
      <header className="container py-12">
        <a
          className="flex  gap-2"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          style={poppinsMedium.style}
        >
          By
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </header>

      <section className="container flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-start lg:items-center md:space-x-12">
        <Image
          className="hidden lg:block"
          src={photoProfile}
          alt="Photo Profile"
          width={469}
          priority
        />
        <Image
          className="block lg:hidden"
          src={photoProfile}
          alt="Photo Profile"
          width={250}
          priority
        />
        <div className="flex flex-col space-y-8 lg:max-w-xl">
          <div className="flex flex-col space-y-4">
            <h1 className="font-medium text-4xl" style={poppinsMedium.style}>
              {fullName}
            </h1>
            <h2 className="text-3xl" style={poppinsRegular.style}>
              {profession}
            </h2>
          </div>
          <p className="text-gray-400" style={poppinsRegular.style}>
            {summary}
          </p>
          <div className="flex flex-row space-x-4">
            <button
              className={`${poppinsRegular.className} flex justify-center items-center py-2 px-3 rounded-sm`}
              style={{ backgroundColor: "rgba(99, 112, 128, 0.20)" }}
              onClick={handleDownload}
            >
              {buttonSecondaryLabel}
            </button>
            <button
              className={`${poppinsRegular.className} flex justify-center items-center py-2 px-3 rounded-sm`}
              style={{
                backgroundColor: "rgba(132, 231, 213, 0.20)",
                color: "#84E7D5",
              }}
              onClick={handleContact}
            >
              {buttonPrimaryLabel}
            </button>
          </div>
          <div className="flex flex-row space-x-4">
            <a href="https://www.linkedin.com/in/ryanakbar20/">
              <Image
                src={iconLinkedin}
                alt="Icon Linkedin"
                width={24}
                priority
              />
            </a>
            <a href="https://www.instagram.com/ryanakbardev/">
              <Image
                src={iconInstagram}
                alt="Icon Instagram"
                width={24}
                priority
              />
            </a>
            <a href="https://github.com/ryanakbar20">
              <Image src={iconGithub} alt="Icon Github" width={24} priority />
            </a>
          </div>
        </div>
      </section>

      <section className="container mt-32">
        <h3 className="font-medium text-2xl" style={poppinsMedium.style}>
          EXPERIENCE
        </h3>

        <div className="flex flex-col space-y-8 mt-12">
          {experience.map((item, index) => (
            <div
              key={index + item.period}
              className="flex md:flex-row md:space-x-4"
            >
              <p
                className="hidden md:block text-xs text-gray-400 w-44"
                style={poppinsRegular.style}
              >
                {item.period}
              </p>
              <div className="flex flex-col space-y-4 max-w-2xl">
                <h4 className="text-lg" style={poppinsRegular.style}>
                  {item.title}
                </h4>
                <p
                  className={`${poppinsRegular.className} block md:hidden text-xs text-gray-400 w-44`}
                  style={{ color: "#84E7D5" }}
                >
                  {item.period}
                </p>
                <div className="flex flex-col space-y-2 text-sm text-gray-400">
                  {item.description.map((desc) => (
                    <p key={desc} style={poppinsRegular.style}>
                      {desc}
                    </p>
                  ))}
                </div>
                <div className="flex flex-row flex-wrap">
                  {item.tech.map((technology) => (
                    <TechCard key={technology}>{technology}</TechCard>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-32">
        <h3 className="font-medium text-2xl">PROJECTS</h3>

        <div className="flex flex-col space-y-10 mt-12">
          {projects.map((item, index) => (
            <div
              key={index + item.title}
              className="flex flex-row md:space-x-4"
            >
              <div className="hidden md:block">
                <Image
                  src={imageProject[item.image as keyof typeof imageProject]}
                  alt="Icon Github"
                  width={227}
                />
              </div>
              <div className="flex flex-col space-y-4 max-w-2xl">
                <h4 className="text-lg" style={poppinsRegular.style}>
                  {item.title}
                </h4>
                <div className="block md:hidden">
                  <Image
                    src={imageProject[item.image as keyof typeof imageProject]}
                    alt="Icon Github"
                    width={227}
                  />
                </div>
                <p
                  className="text-sm text-gray-400"
                  style={poppinsRegular.style}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="text-center">
        <p className="text-gray-400 py-20" style={poppinsRegular.style}>
          © 2024 rianakbar.com | inspired by{" "}
          <a
            className="text-blue-400 underline cursor-pointer"
            href="https://brittanychiang.com/"
          >
            brittanychiang.com
          </a>
        </p>
      </footer>
    </main>
  );
}
