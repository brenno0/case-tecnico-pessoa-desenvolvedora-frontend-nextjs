import { ActiveLink } from '@/components/ActiveLink';
import { ACTIVE_LINK_SECTIONS } from '@/constants/activeLinkCategories';
import { Code } from 'lucide-react';

import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-7xl m-auto '>
      <div className='flex w-full mt-20 justify-between items-center'>
        <div className='flex gap-5 items-center'>
          <Code size={46} className='text-primary' />
          <p className='font-heading uppercase font-bold text-secondary text-2xl'>
            FERNANDA MASCHETI
          </p>
        </div>
        <div className='flex gap-8'>
          {ACTIVE_LINK_SECTIONS.map(section => (
            <ActiveLink
              name={section.name}
              key={section.name}
              href={section.url}
              className='font-heading font-bold text-2xl'
            />
          ))}
        </div>
      </div>
      <div className='mt-[69px] flex flex-col items-center'>
        <div className='rounded-full border-2 border-primary'>
          <Image
            src="/Woman's picture.jpg"
            alt='A picture of the owner of the site'
            width={224}
            height={224}
            className='rounded-full w-[224px] h-[224px] object-cover filter grayscale'
          />
        </div>
        <p className='mt-6 font-heading font-bold text-primary'>
          Olá, meu nome é Fernanda_
        </p>
        <div className='text-center m-auto flex flex-col items-center'>
          <h1 className='mt-6 font-heading font-bold text text-6xl'>
            Eu ensino
            <span className='bg-clip-text text-transparent bg-[linear-gradient(to_right,#8C61D5,#1CA7C8)]'>
              {' '}
              Programação
            </span>
          </h1>
          <p className='mt-6 max-w-xl text-center text-neutral font-sans'>
            Sou Engenheira de Computação e Pedagoga. Ensino pensamento
            computacional para estudantes do Ensino Fundamental e Médio. Ensino
            sobre pensamento computacional usando HTML, CSS e JavaScript. Veja
            os projetos que já desenvolvi!
          </p>
        </div>
        <div className='relative mt-27 w-full'>
          <div className='relative w-8 border-t border-primary mx-auto'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 h-8 border-l border-primary'></div>
          </div>

          <div className='relative w-full h-8 flex justify-between mt-4'>
            <div className='w-6 h-6 border-t border-l border-primary'></div>
            <div className='w-6 h-6 border-t border-r border-primary'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
