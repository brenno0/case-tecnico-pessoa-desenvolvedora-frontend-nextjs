import { Skeleton } from '@/components/ui/skeleton';

export function PostSkeleton() {
  return (
    <div className='mt-8 sm:mt-12 lg:mt-26 px-4 sm:px-0'>
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-12'>
        <div className='flex-1 lg:flex-2'>
          <Skeleton className='h-20 sm:h-24 lg:h-30 w-full' />
          <Skeleton className='h-4 sm:h-5 w-3/4 sm:w-1/2 mt-4' />
          <Skeleton className='h-8 sm:h-10 w-20 sm:w-28 mt-4' />
          <Skeleton className='h-4 sm:h-5 w-1/2 mt-4' />
          <div className='flex gap-2 sm:gap-4 mt-4'>
            <Skeleton className='h-8 sm:h-10 w-16 sm:w-20' />
            <Skeleton className='h-8 sm:h-10 w-16 sm:w-20' />
            <Skeleton className='h-8 sm:h-10 w-16 sm:w-20' />
          </div>
        </div>
        <div className='lg:flex-1'>
          <Skeleton className='h-48 sm:h-56 lg:h-72 xl:h-80 w-full' />
        </div>
      </div>
      <div className='mt-8 sm:mt-12 lg:mt-16'>
        <Skeleton className='h-32 w-full' />
      </div>
    </div>
  );
}
