import React from 'react';
import { FaNode, FaHtml5, FaCss3Alt, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiVisualstudio, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import css from '@/components/Tecnologias/tecnologias.module.css'

const Tecnologias = () => {
  return (
    <section className={`${css.container}`}>
      <div className="container mx-auto py-20 lg:px-56">
        <h2 className="lg:text-6xl text-5xl px-5 text-stone-50 text-center font-semibold mb-10">Tecnologias<br/> que Utilizo</h2>
        <div className="flex flex-wrap justify-center">
          <div className="text-stone-500 px-6 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <FaNode className="text-5xl text-green-500 mr-3 " />
            <p>Node.js</p>
          </div>
          <div className="text-stone-500 px-5 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <FaHtml5 className="text-5xl text-orange-500 mr-3" />
            <p>HTML5</p>
          </div>
          <div className="text-stone-500 px-5 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <FaCss3Alt className="text-5xl text-blue-500 mr-3" />
            <p>CSS3</p>
          </div>
          <div className="text-stone-500 px-5 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <SiTailwindcss className="text-5xl text-blue-400 mr-3" />
            <p>Tailwind CSS</p>
          </div>
          <div className="text-stone-500 px-5 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <FaReact className="text-5xl text-blue-600 mr-3" />
            <p>React.js</p>
          </div>
          <div className="text-stone-500 px-5 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <FaGit className="text-5xl text-red-500 mr-3" />
            <p>Git</p>
          </div>
          <div className="text-stone-500 px-5 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <FaGithub className="text-5xl text-gray-600 mr-3" />
            <p>GitHub</p>
          </div>
          <div className="text-stone-500 px-5 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <SiVisualstudio className="text-5xl text-blue-700 mr-3" />
            <p>VS Code</p>
          </div>
          <div className="text-stone-500 px-5 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <SiAdobephotoshop className="text-5xl text-blue-900 mr-3" />
            <p>Photoshop</p>
          </div>
          <div className="text-stone-500 px-5 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <SiAdobeillustrator className="text-5xl text-orange-600 mr-3" />
            <p>Illustrator</p>
          </div>
          <div className="text-stone-500 px-5 py-3 flex items-center hover:bg-slate-900 hover:rounded-xl hover:cursor-pointer">
            <AiOutlineAntDesign className="text-5xl text-blue-500 mr-3" />
            <p>Adobe XD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
