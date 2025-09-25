'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card, CardTitle, CardAction } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface PostCardProps {
  post: {
    id: string | number;
    title: string;
    content: string;
    imageUrl: string;
    category: {
      name: string;
    };
  };
  width?: string;
  className?: string;
  onReadMore?: (postId: string | number) => void;
  readMoreText?: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  width = 'calc(33.333% - 16px)',
  className = '',
  onReadMore,
  readMoreText = 'Ler mais',
}) => {
  const router = useRouter();

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore(post.id);
    } else {
      router.push(`/post/${post.id}`);
    }
  };

  return (
    <Card
      key={post.title}
      className={`p-6 box-border ${className}`}
      style={{ width }}
    >
      <div className='relative w-full h-[196px]'>
        <Image
          src={post.imageUrl}
          fill
          alt={`Imagem do post: ${post.title}`}
          className='object-cover'
          quality={100}
        />

        <div className='absolute bottom-0 right-0 bg-primary text-white text-center text-sm px-2 py-1 w-32 h-7'>
          {post.category.name}
        </div>
      </div>

      <CardTitle className='font-heading text-xl text-secondary'>
        {post.title}
      </CardTitle>

      <p className='text-neutral text-left font-normal font-sans line-clamp-3'>
        {post.content}
      </p>

      <CardAction>
        <Button
          variant='ghost'
          className='text-primary font-bold hover:text-primary/90'
          onClick={handleReadMore}
        >
          {readMoreText}
        </Button>
      </CardAction>
    </Card>
  );
};

export default PostCard;
