'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  ListAllPostsParams,
  PostsApiResponse,
  GetPostByIdResponse,
} from '../schemas/posts';

export const useListAllPosts = ({ params }: { params: ListAllPostsParams }) => {
  return useQuery<PostsApiResponse>({
    queryKey: ['getAllPosts', params],
    queryFn: async () => {
      const { data } = await axios.get('/api/proxy', {
        params,
      });
      return data;
    },
  });
};

export const useListPostById = ({ id }: { id: string }) => {
  return useQuery<GetPostByIdResponse>({
    queryKey: ['getAllPosts', id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/proxy/${id}`);
      return data;
    },
  });
};

// Novo hook para filtrar por categoria
export interface ListPostsByCategoryParams extends ListAllPostsParams {
  category: string;
}

export const useListPostsByCategory = ({
  params,
}: {
  params: ListPostsByCategoryParams;
}) => {
  return useQuery<PostsApiResponse>({
    queryKey: ['getPostsByCategory', params.category, params.page],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/proxy/category/${params.category}`,
        {
          params: {
            page: params.page,
            limit: params.limit || 9,
          },
        }
      );
      return data;
    },
    enabled: !!params.category, // Só executa se categoria estiver definida
  });
};

// Categorias disponíveis conforme a documentação da API
export const AVAILABLE_CATEGORIES = [
  { slug: 'mobile', name: 'Mobile' },
  { slug: 'programacao', name: 'Programação' },
  { slug: 'frontend', name: 'Frontend' },
  { slug: 'devops', name: 'DevOps' },
  { slug: 'ux-design', name: 'UX & Design' },
  { slug: 'data-science', name: 'Data Science' },
  { slug: 'inovacao-gestao', name: 'Inovação & Gestão' },
] as const;
