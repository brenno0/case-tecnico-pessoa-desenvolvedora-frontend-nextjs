'use client';

import { IconedInput } from '@/components/IconedInput';
import { Button } from '@/components/ui/button';
import { SearchIcon, X } from 'lucide-react';
import { useListAllPosts, useListPostsByCategory } from '../../api/posts';
import { Skeleton } from '@/components/ui/skeleton';
import { PaginationLink } from '@/components/ui/pagination';
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PostCard from '@/components/PostCard';

const AVAILABLE_CATEGORIES = [
  { slug: 'frontend', name: 'Frontend' },
  { slug: 'devops', name: 'DevOps' },
  { slug: 'programacao', name: 'Programação' },
] as const;

export const MyPostsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const { data: allPostsData, isPending: isAllPostsPending } = useListAllPosts({
    params: {
      page: currentPage,
    },
  });

  const { data: categoryPostsData, isPending: isCategoryPostsPending } =
    useListPostsByCategory({
      params: {
        page: currentPage,
        category: selectedCategory || '',
      },
    });

  const activeData = selectedCategory ? categoryPostsData : allPostsData;
  const isPending = selectedCategory
    ? isCategoryPostsPending
    : isAllPostsPending;

  const filteredPosts = useMemo(() => {
    if (!activeData?.posts) return [];

    if (!searchTerm.trim()) return activeData.posts;

    const searchLower = searchTerm.toLowerCase();
    return activeData.posts.filter(
      post =>
        post.title.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower) ||
        post.category.name.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.name.toLowerCase().includes(searchLower))
    );
  }, [activeData?.posts, searchTerm]);

  const totalPages = activeData?.pagination.totalPages || 0;
  const totalPosts = activeData?.pagination.totalPosts || 0;

  const handleNavigateToPost = (postId: string | number) => {
    router.push(`/post/${postId}`);
  };

  const handleCategoryFilter = (categorySlug: string) => {
    if (selectedCategory === categorySlug) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categorySlug);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
  };

  const hasActiveFilters = searchTerm.trim() || selectedCategory;

  if (isPending) {
    return (
      <div className='my-8'>
        <div className='flex flex-wrap gap-4 sm:gap-6 justify-center'>
          <Skeleton className='h-80 w-80' />
          <Skeleton className='h-80 w-80' />
          <Skeleton className='h-80 w-80' />
          <Skeleton className='h-80 w-80' />
          <Skeleton className='h-80 w-80' />
          <Skeleton className='h-80 w-80' />
        </div>
      </div>
    );
  }

  return (
    <div className='mt-16 sm:mt-20 lg:mt-21'>
      <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8'>
        <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 flex-1'>
          <h2 className='font-heading font-bold text-secondary text-xl sm:text-2xl whitespace-nowrap'>
            Minhas postagens
          </h2>
          <div className='relative w-1/2 max-w-md'>
            <IconedInput
              className='w-full'
              Icon={SearchIcon}
              placeholder='Buscar...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                aria-label='Limpar busca'
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4'>
          <p className='font-sans font-bold text-secondary text-sm sm:text-base'>
            Categorias:
          </p>
          <div className='flex flex-wrap gap-2 sm:gap-3'>
            {AVAILABLE_CATEGORIES.map(category => (
              <Button
                key={category.slug}
                variant={
                  selectedCategory === category.slug ? 'default' : 'outline'
                }
                className={`text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 transition-colors ${
                  selectedCategory === category.slug
                    ? 'bg-primary text-white'
                    : 'hover:bg-primary/10'
                }`}
                onClick={() => handleCategoryFilter(category.slug)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className='mt-4 flex flex-wrap items-center gap-3'>
          <span className='text-sm text-gray-600 font-medium'>
            Filtros ativos:
          </span>

          {searchTerm && (
            <div className='inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm'>
              <SearchIcon size={14} />
              <span>&quot;{searchTerm}&quot;</span>
              <button
                onClick={() => setSearchTerm('')}
                className='hover:text-blue-900 transition-colors'
              >
                <X size={14} />
              </button>
            </div>
          )}

          {selectedCategory && (
            <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm'>
              <span>
                {
                  AVAILABLE_CATEGORIES.find(c => c.slug === selectedCategory)
                    ?.name
                }
              </span>
              <button
                onClick={() => setSelectedCategory(null)}
                className='hover:text-purple-900 transition-colors'
              >
                <X size={14} />
              </button>
            </div>
          )}

          <Button
            variant='ghost'
            size='sm'
            onClick={clearAllFilters}
            className='text-xs text-gray-500 hover:text-gray-700'
          >
            Limpar tudo
          </Button>
        </div>
      )}

      <div className='mt-6 sm:mt-8'>
        {filteredPosts.length === 0 ? (
          <div className='text-center py-12'>
            <div className='text-gray-400 mb-4'>
              <SearchIcon size={48} className='mx-auto' />
            </div>
            <h3 className='text-lg font-medium text-gray-600 mb-2'>
              Nenhum post encontrado
            </h3>
            <p className='text-gray-500 mb-4'>
              {hasActiveFilters
                ? 'Tente ajustar seus filtros ou realizar uma nova busca.'
                : 'Não há posts disponíveis no momento.'}
            </p>
            {hasActiveFilters && (
              <Button variant='outline' onClick={clearAllFilters}>
                Limpar filtros
              </Button>
            )}
          </div>
        ) : (
          <>
            <div className='mb-4'>
              <p className='text-sm text-gray-600'>
                {hasActiveFilters && (
                  <span>
                    Mostrando {filteredPosts.length} de {totalPosts} posts
                    {selectedCategory && (
                      <span className='ml-1'>
                        na categoria &quot;
                        {
                          AVAILABLE_CATEGORIES.find(
                            c => c.slug === selectedCategory
                          )?.name
                        }
                        &quot;
                      </span>
                    )}
                  </span>
                )}
              </p>
            </div>

            <div className='flex flex-wrap gap-4 sm:gap-6 justify-center'>
              {filteredPosts.map(post => (
                <PostCard
                  key={post.id}
                  onReadMore={handleNavigateToPost}
                  post={post}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {totalPages > 1 && !searchTerm.trim() && (
        <div className='flex justify-center mt-8 sm:mt-12'>
          <div className='flex flex-wrap justify-center gap-2 sm:gap-4'>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <PaginationLink
                key={page}
                className='font-bold h-8 w-8 sm:h-10 sm:w-10 text-sm sm:text-base'
                isActive={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
