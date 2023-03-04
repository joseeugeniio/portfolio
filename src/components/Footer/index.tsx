import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import css from "@/components/Footer/footer.module.css";

export default function Footer() {
  return (
    <>
      <section className={css.container}>
        <div
          className={`container mx-auto text-center flex flex-col justify-between py-8 px-4 items-center`}
        >
          <p className="text-stone-300">© 2023 José Eugênio</p>
          <span className="text-stone-300">
            Última Atualização: 03-03-2023 22:26
          </span>
          <div className="flex flex-row space-x-5">
            <a href="https://github.com/joseeugeniio" target="_blank">
              <FaGithub className="fill-stone-500 w-7 h-7 hover:fill-stone-50 duration-75" />
            </a>
            <a href="https://instagram.com/joseeuggenio" target="_blank">
              <FaInstagram className="fill-stone-500 w-7 h-7 hover:fill-stone-50 duration-75" />
            </a>
            <a href="https://linkedin.com/in/joseeugeniio" target="_blank">
              <FaLinkedin className="fill-stone-500 w-7 h-7 hover:fill-stone-50 duration-75" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
