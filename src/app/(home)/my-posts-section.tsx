'use client';

import { IconedInput } from '@/components/IconedInput';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardTitle } from '@/components/ui/card';
import { SearchIcon } from 'lucide-react';
import { useListAllPosts } from '../api/posts';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { Pagination, PaginationLink } from '@/components/ui/pagination';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const MyPostsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { data, isPending } = useListAllPosts({
    params: { page: currentPage },
  });
  const totalPages = data?.pagination.totalPages || 0;

  if (isPending) {
    return (
      <div className='my-8'>
        <div className='flex gap-6'>
          <Skeleton className='h-115 w-95' />
          <Skeleton className='h-115 w-95' />
          <Skeleton className='h-115 w-95' />
        </div>
        <div className='flex mt-6 gap-6'>
          <Skeleton className='h-115 w-95' />
          <Skeleton className='h-115 w-95' />
          <Skeleton className='h-115 w-95' />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='w-full mt-21 flex justify-between'>
        <div className='w-1/2 flex gap-8'>
          <p className='font-heading font-bold text-secondary text-2xl'>
            Minhas postagens
          </p>
          <IconedInput
            className='w-xs'
            Icon={SearchIcon}
            placeholder='Buscar...'
          />
        </div>

        <div className='flex items-center gap-4'>
          <p className='font-sans font-bold text-secondary'>Categorias:</p>

          <Button variant='default'>Front-end</Button>
          <Button variant='default'>Back-end</Button>
          <Button variant='default'>DevOps</Button>
        </div>
      </div>
      <div className='flex flex-wrap gap-6 w-full justify-center mt-8'>
        {data?.posts?.map(post => (
          <Card
            key={post.title}
            className='p-6 box-border'
            style={{ width: 'calc(33.333% - 16px)' }}
          >
            <div className='relative w-full h-[196px]'>
              <Image
                src={post.imageUrl.split('?')[0]}
                fill
                alt='post image'
                className='object-cover'
                quality={100}
              />

              <div className='absolute bottom-0 right-0 bg-primary text-white text-center text-sm px-2 py-1 w-32 h-7'>
                {post.category.name}
              </div>
            </div>
            <CardTitle className='font-heading  text-xl text-secondary'>
              {post.title}
            </CardTitle>
            <p className='text-neutral text-left font-normal font-sans line-clamp-3'>
              {post.content}
            </p>
            <CardAction>
              <Button
                variant='ghost'
                className='text-primary font-bold hover:text-primary/90'
                onClick={() => router.push(`/post/${post.id}`)}
              >
                Ler mais
              </Button>
            </CardAction>
          </Card>
        ))}
        <Pagination className='gap-4'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <PaginationLink
              key={page}
              className='font-bold h-10 w-8'
              isActive={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationLink>
          ))}
        </Pagination>
      </div>
    </div>
  );
};
