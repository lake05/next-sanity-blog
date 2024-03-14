import { client } from "@/sanity/lib/client";
import Header from "../../_components/header";
import PostCard from "../../_components/post-card";
import { Post } from "@/lib/types";

async function getPostsByTag(tag: string) {
  const query = `
    *[_type == "post" && references("tags", *[_type == "tag" && slug.current == "${tag}"]._id)] {
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

interface Params {
  params: {
    slug: string;
  };
}

const TagPage = async ({ params }: Params) => {
  const posts: Post[] = await getPostsByTag(params.slug);
  return (
    <div>
      <Header title={`#${params.slug}`} />

      <div>
        {posts.length &&
          posts.map((post) => <PostCard post={post} key={post._id} />)}
      </div>
    </div>
  );
};

export default TagPage;
