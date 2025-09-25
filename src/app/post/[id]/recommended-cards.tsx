import { useListAllPosts } from '@/app/api/posts';
import PostCard from '@/components/PostCard';
import { Skeleton } from '@/components/ui/skeleton';

type RecommendedCardsProps = {
  currentPostId: string | number;
};

export const RecommendedCards = ({ currentPostId }: RecommendedCardsProps) => {
  const { data: postsList, isPending } = useListAllPosts({
    params: { page: 1 },
  });

  if (isPending) {
    return (
      <div className='my-8'>
        <div className='flex flex-wrap gap-4 sm:gap-6 justify-center'>
          <Skeleton className='h-80 w-80' />
          <Skeleton className='h-80 w-80 hidden sm:block' />
          <Skeleton className='h-80 w-80 hidden lg:block' />
        </div>
      </div>
    );
  }

  const shuffled = postsList?.posts
    .filter(post => post.id !== currentPostId)
    .sort(() => Math.random() - 0.5);

  const recommendedPosts = shuffled?.slice(0, 3);

  const formattedPost = recommendedPosts?.map(post => {
    return {
      ...post,
      imageUrl: post.imageUrl.split('?')[0],
    };
  });

  if (!formattedPost || formattedPost.length === 0) {
    return (
      <div className='text-center py-8'>
        <p className='text-neutral font-sans text-sm sm:text-base'>
          Nenhuma postagem relacionada encontrada.
        </p>
      </div>
    );
  }

  return (
    <div className='flex flex-wrap gap-4 sm:gap-6 justify-center'>
      {formattedPost.map(post => (
        <PostCard
          key={post.id}
          post={post}
          width='320px'
          className='w-80 sm:w-auto sm:flex-1 sm:min-w-0 sm:max-w-sm lg:max-w-none'
        />
      ))}
    </div>
  );
};
