export interface PostTag {
  slug: string;
  name: string;
}

export interface PostCategory {
  slug: string;
  name: string;
  description: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  category: PostCategory;
  tags: PostTag[];
  imageUrl: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Meta {
  generatedAt: string;
  seed: string;
  category?: string;
}

export interface PostsApiResponse {
  posts: Post[];
  pagination: Pagination;
  meta: Meta;
}

export interface GetPostByIdResponse {
  post: Post;
  meta: Meta;
}

export interface ListAllPostsParams {
  page: number;
  limit?: number;
  category?: string;
}

export interface ListPostsByCategoryParams extends ListAllPostsParams {
  category: string;
}
