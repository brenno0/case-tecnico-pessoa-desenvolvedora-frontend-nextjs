'use client';

import Image from 'next/image';
import { RecommendedCards } from './recommended-cards';

type PostData = {
  post: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    category: {
      name: string;
    };
    tags: Array<{
      slug: string;
      name: string;
    }>;
  };
};

type PostProps = {
  data: PostData;
};

export default function Post({ data }: Readonly<PostProps>) {
  if (!data?.post) {
    return (
      <div className='mt-8 sm:mt-12 lg:mt-26 px-4 sm:px-0'>
        <div className='text-center py-12'>
          <h1 className='font-heading font-bold text-2xl text-secondary'>
            Post não encontrado
          </h1>
          <p className='mt-4 text-neutral'>
            O post que você procura não foi encontrado ou não pôde ser
            carregado.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='mt-8 sm:mt-12 lg:mt-26 px-4 sm:px-0'>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12'>
        <div className='flex-1 lg:flex-2'>
          <h1 className='font-heading font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-secondary leading-tight'>
            {data.post.title}
          </h1>

          <p className='mt-4 sm:mt-6 font-bold text-neutral font-sans text-sm sm:text-base'>
            Categoria:
          </p>

          <div className='bg-primary mt-3 sm:mt-5 w-24 sm:w-28 h-8 sm:h-10 rounded-md flex justify-center items-center px-3'>
            <p className='font-bold text-white font-sans text-xs sm:text-sm'>
              {data.post.category.name}
            </p>
          </div>

          <p className='mt-4 sm:mt-6 font-bold text-neutral text-sm sm:text-base'>
            Tags:
          </p>

          <div className='flex flex-wrap gap-2 sm:gap-3 lg:gap-4 mt-3 sm:mt-5'>
            {data.post.tags.map(tag => (
              <div
                key={tag.slug}
                className='border border-solid border-primary h-8 sm:h-10 rounded-md flex justify-center items-center px-2 sm:px-3'
              >
                <p className='font-bold text-primary text-xs sm:text-sm'>
                  {tag.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='lg:flex-1 mt-6 lg:mt-0'>
          <div className='relative w-full h-48 sm:h-56 lg:h-72 xl:h-80'>
            <Image
              src={data.post.imageUrl.split('?')[0] ?? ''}
              alt={`Imagem do post: ${data.post.title}`}
              fill
              className='object-cover rounded-lg'
              sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw'
            />
          </div>
        </div>
      </div>

      <div className='mt-8 sm:mt-12 lg:mt-16'>
        <div className='max-w-4xl'>
          <p className='text-neutral font-sans text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-relaxed lg:leading-loose whitespace-pre-wrap'>
            {data.post.content}
          </p>
        </div>
      </div>

      <div className='mt-12 sm:mt-16 lg:mt-20'>
        <h3 className='font-heading font-bold text-secondary text-xl sm:text-2xl lg:text-3xl'>
          Postagens relacionadas
        </h3>
        <div className='mt-6 sm:mt-8 lg:mt-10'>
          <RecommendedCards currentPostId={data.post.id} />
        </div>
      </div>
    </div>
  );
}
