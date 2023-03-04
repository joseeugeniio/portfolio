import React from 'react';
import { FaNode, FaHtml5, FaCss3Alt, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiVisualstudio, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';

const Tecnologias = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto mb-40 px-6 lg:px-56">
        <h2 className="lg:text-8xl text-5xl px-5 text-stone-50 text-center font-bold mb-20">Tecnologias que Utilizo</h2>
        <div className="flex flex-wrap justify-center">
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <FaNode className="text-5xl text-green-500 mr-3" />
            <p>Node.js</p>
          </div>
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <FaHtml5 className="text-5xl text-orange-500 mr-3" />
            <p>HTML5</p>
          </div>
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <FaCss3Alt className="text-5xl text-blue-500 mr-3" />
            <p>CSS3</p>
          </div>
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <SiTailwindcss className="text-5xl text-blue-400 mr-3" />
            <p>Tailwind CSS</p>
          </div>
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <FaReact className="text-5xl text-blue-600 mr-3" />
            <p>React.js</p>
          </div>
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <FaGit className="text-5xl text-red-500 mr-3" />
            <p>Git</p>
          </div>
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <FaGithub className="text-5xl text-gray-600 mr-3" />
            <p>GitHub</p>
          </div>
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <SiVisualstudio className="text-5xl text-blue-700 mr-3" />
            <p>VS Code</p>
          </div>
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <SiAdobephotoshop className="text-5xl text-blue-900 mr-3" />
            <p>Photoshop</p>
          </div>
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <SiAdobeillustrator className="text-5xl text-orange-600 mr-3" />
            <p>Illustrator</p>
          </div>
          <div className="text-stone-500 mx-5 my-3 flex items-center">
            <AiOutlineAntDesign className="text-5xl text-blue-500 mr-3" />
            <p>Adobe XD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
