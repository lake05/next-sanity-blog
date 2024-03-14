import { client } from "@/sanity/lib/client";
import Header from "./_components/header";
import { Post } from "@/lib/types";
import PostCard from "./_components/post-card";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    tags []-> {
      _id,
      slug,
      name
    }
  }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <div>
      <Header title="Articles" />
      <div>
        {posts.length &&
          posts.map((post) => <PostCard post={post} key={post._id} />)}
      </div>
    </div>
  );
}
