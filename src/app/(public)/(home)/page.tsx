import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { MyPostsSection } from './my-posts-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fernanda Mascheti - Início',
  description:
    'Engenheira de Computação e Pedagoga. Ensino pensamento computacional para estudantes.',
};

export default function Home() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <div className='mt-8 sm:mt-12 lg:mt-[69px] flex flex-col items-center'>
        <div className='rounded-full border-2 border-primary'>
          <Image
            src="/Woman's picture.jpg"
            alt='A picture of the owner of the site'
            width={224}
            height={224}
            className='rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-[224px] lg:h-[224px] object-cover filter grayscale'
          />
        </div>

        <p className='mt-4 sm:mt-6 font-heading font-bold text-primary text-center text-sm sm:text-base'>
          Olá, meu nome é Fernanda_
        </p>

        <div className='text-center m-auto flex flex-col items-center px-4'>
          <h1 className='mt-4 sm:mt-6 font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>
            Eu ensino
            <span className='bg-clip-text text-transparent bg-[linear-gradient(to_right,#8C61D5,#1CA7C8)]'>
              {' '}
              Programação
            </span>
          </h1>

          <p className='mt-4 sm:mt-6 max-w-xs sm:max-w-md lg:max-w-xl text-center text-neutral font-sans text-sm sm:text-base leading-relaxed'>
            Sou Engenheira de Computação e Pedagoga. Ensino pensamento
            computacional para estudantes do Ensino Fundamental e Médio. Ensino
            sobre pensamento computacional usando HTML, CSS e JavaScript. Veja
            os projetos que já desenvolvi!
          </p>
        </div>

        <div className='relative mt-12 sm:mt-16 lg:mt-27 w-full max-w-md'>
          <div className='relative w-8 border-t border-primary mx-auto'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 h-8 border-l border-primary'></div>
          </div>

          <div className='relative w-full h-8 flex justify-between mt-4'>
            <div className='w-6 h-6 border-t border-l border-primary'></div>
            <div className='w-6 h-6 border-t border-r border-primary'></div>
          </div>
        </div>
      </div>

      <MyPostsSection />

      <div className='mt-16 sm:mt-24 lg:mt-32 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4'>
        <div className='text-center lg:text-left'>
          <p className='text-primary font-sans font-bold text-sm sm:text-base'>
            Vamos conversar?
          </p>
          <h2 className='text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight'>
            Vamos conversar?
          </h2>
        </div>

        <div className='flex flex-col gap-3 sm:gap-4 items-center lg:items-start lg:justify-center min-w-fit'>
          <a
            href='mailto:fernandamascheti@gmail.com'
            className='flex items-center gap-2 hover:text-primary transition-colors group'
          >
            <Mail className='text-primary w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' />
            <p className='text-neutral font-sans text-sm sm:text-base group-hover:text-primary transition-colors break-all sm:break-normal'>
              fernandamascheti@gmail.com
            </p>
          </a>

          <a
            href='https://linkedin.com/in/fernandamascheti'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:text-primary transition-colors group'
          >
            <Linkedin className='text-primary w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' />
            <p className='text-neutral font-sans text-sm sm:text-base group-hover:text-primary transition-colors'>
              /Fernanda Mascheti
            </p>
          </a>

          <a
            href='https://github.com/fernandamascheti'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 hover:text-primary transition-colors group'
          >
            <Github className='text-primary w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' />
            <p className='text-neutral font-sans text-sm sm:text-base group-hover:text-primary transition-colors'>
              /fernandamascheti
            </p>
          </a>
        </div>
      </div>

      <div className='pb-8 sm:pb-12 lg:pb-16'></div>
    </div>
  );
}
