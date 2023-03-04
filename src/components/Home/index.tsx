import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { BiChevronDown } from "react-icons/bi"

export default function Home() {
  return (
    <>
      <div className="container mx-auto items-center flex flex-col lg:space-y-10 h-screen justify-center space-y-6 md:space-y-10">
        <h1 className="font-black text-7xl text-center text-stone-50 lg:text-9xl md:text-9xl">
          José
          <br />
          Eugênio
        </h1>
        <p className="text-center font-semibold lg:text-6xl md:text-5xl text-2xl text-stone-800">
          Desenvolvedor Front End
        </p>
        <div className="flex flex-row space-x-5 pb-20">
          <a href="https://github.com/joseeugeniio" target="_blank">
            <FaGithub className="fill-stone-500 w-16 h-16 hover:fill-stone-50 duration-75"/>
          </a>
          <a href="https://instagram.com/joseeuggenio" target="_blank">
            <FaInstagram className="fill-stone-500 w-16 h-16 hover:fill-stone-50 duration-75"/>
          </a>
          <a href="https://linkedin.com/in/joseeugeniio" target="_blank">
            <FaLinkedin className="fill-stone-500 w-16 h-16 hover:fill-stone-50 duration-75"/>
          </a>
        </div>
        <div>
          <BiChevronDown className="fill-stone-50 w-20 h-20 animate-bounce"/>
        </div>
      </div>
    </>
  );
}
