import css from '@/components/Sobre/sobre.module.css'

export default function Sobre() {
  return (
    <>
    <section className={css.container}>
      <div className={`container mx-auto items-center text-center py-20 space-y-12`}>
        <h1 className="text-5xl md:text-8xl text-stone-50 font-black">Sobre</h1>
        <p className="text-stone-50 text-justify px-10 md:px-24 lg:px-80">
          Olá! Sou o José Eugênio, um desenvolvedor front end que está se
          aventurando no mundo do back end para me tornar um profissional
          fullstack. Atualmente estou procurando emprego na área e adoro
          trabalhar com tecnologias como React, Next.js, Node, HTML, CSS e
          TailwindCSS. Também estou estudando Java e pretendo aprender Ruby em
          breve. Quando se trata de ferramentas, sou experiente no uso do
          VSCode, Illustrator, Photoshop e Adobe XD. Além disso, tenho
          conhecimento em Git e GitHub, o que me permite colaborar em projetos
          em equipe com eficiência. Meu portfólio reflete minha paixão pela
          criação de sites e aplicativos que são tanto esteticamente agradáveis
          quanto funcionais. Se você está procurando por um desenvolvedor com
          habilidades em front end e back end, com uma atitude positiva e
          vontade de aprender, então você veio ao lugar certo!
        </p>
      </div>
      </section>
    </>
  );
}
