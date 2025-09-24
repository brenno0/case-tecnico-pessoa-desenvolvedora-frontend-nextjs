'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ListAllPostsParams, PostsApiResponse } from '../schemas/getAllPosts';

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
  return useQuery<PostsApiResponse>({
    queryKey: ['getAllPosts', id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/proxy/${id}`);
      return data;
    },
  });
};
