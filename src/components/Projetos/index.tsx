import Image from 'next/image';
import React from 'react';

const Projetos = () => {
  const projetos = [
    {
      title: 'Projeto A',
      description: 'Descrição do Projeto A',
      image: '/image-test.jpg',
      align: 'right',
    },
    {
      title: 'Projeto B',
      description: 'Descrição do Projeto B',
      image: '/image-test.jpg',
      align: 'left',
    },
    {
      title: 'Projeto C',
      description: 'Descrição do Projeto C',
      image: '/image-test.jpg',
      align: 'right',
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-10 lg:px-56 space-y-16 pb-64">
        <h1 className='text-stone-50 font-black text-5xl text-center md:text-8xl'>Meus Melhores Projetos</h1>
        {projetos.map((projetos, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              projetos.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-left lg:items-center md:items-stretch md:justify-between md:py-12`}
          >
            <div className="md:w-1/2 lg:w-2/3 md:px-6 mb-6 md:mb-0">
              <Image
              alt={projetos.title}
              src={projetos.image}
              width={800}
              height={500}
              />
            </div>
            <div className="md:w-1/2 lg:w-2/3 md:px-6">
              <h2 className="text-5xl md:5xl mb-4 text-stone-50 font-bold">{projetos.title}</h2>
              <p className="mb-8 text-slate-50">{projetos.description}</p>
              <a
                href="#"
                className="bg-stone-50 text-stone-900 hover:bg-stone-200 font-bold py-2 px-4 rounded"
              >
                Ver mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
