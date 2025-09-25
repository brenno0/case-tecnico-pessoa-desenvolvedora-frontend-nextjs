import { api } from '@/app/api/axios';
import { Metadata } from 'next';
import Post from './post';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const { data } = await api.get(`/api/posts/id/${id}`);

    return {
      title: data.post.title,
      description: data.post.content.slice(0, 150),
      openGraph: {
        title: data.post.title,
        description: data.post.content.slice(0, 150),
        images: [{ url: data.post.imageUrl }],
      },
    };
  } catch {
    return {
      title: 'Post não encontrado',
      description: 'O post que você procura não foi encontrado.',
    };
  }
}

export default async function Page({ params }: Readonly<PageProps>) {
  const { id } = await params;

  const { data } = await api.get(`/api/posts/id/${id}`);

  return <Post data={data} />;
}
