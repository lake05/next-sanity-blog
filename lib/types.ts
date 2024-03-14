export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  tags: Tag[];
  _id: string;
  body: any;
}

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
  postCount: number;
}
