import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import css from '@/components/Projetos/projetos.module.css'

const Projetos = () => {
  const projetos = [
    {
      title: "Em Breve",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/image.png",
      align: "right",
    },
    {
      title: "Em Breve",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/image.png",
      align: "left",
    },
    {
      title: "Em Breve",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/image.png",
      align: "right",
    },
  ];

  return (
    <section className={`${css.container}`}>
      <div className="container mx-auto px-10 lg:px-56 md:space-y-12 lg:space-y-16 space-y-16 py-20">
        <h1 className="text-stone-50 text-5xl font-bold text-center md:text-6xl">
          Meus Melhores<br/> Projetos
        </h1>
        {projetos.map((projetos, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              projetos.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
            } items-left lg:items-center md:items-stretch md:justify-between md:py-12`}
          >
            <div className="md:w-1/2 lg:w-2/3 mb-6 md:mb-0">
              <Image
                alt={projetos.title}
                src={projetos.image}
                width={800}
                height={500}
                className="rounded-xl"
              />
            </div>
            <div className="md:w-1/2 lg:w-2/3 md:px-10">
              <h2 className="text-4xl md:5xl mb-4 text-stone-50 font-semibold">
                {projetos.title}
              </h2>
              <p className="mb-8 text-slate-50 text-justify">{projetos.description}</p>

              <button className={`text-stone-50 font-bold py-3 px-5 rounded duration-75 ${css.btn}`}>
                <a href="#" className="flex flex-row items-center gap-2">
                  Repositório <FaGithub className="w-5 h-5"/>
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
