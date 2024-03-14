import { client } from "@/sanity/lib/client";
import Image from "next/image";

import Header from "../../_components/header";
import { Post } from "@/lib/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    publishedAt,
    _id,
    body,
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
const page = async ({ params }: Params) => {
  const post: Post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header title={post?.title} />
      <div className="text-center">
        <span className="font-date text-purple-500">
          {new Date(post?.publishedAt).toDateString()}
        </span>
        <div className="mt-5 flex gap-x-3">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tags/${tag?.slug?.current}`}>
              <Badge className="lowercase" variant="secondary">
                #{tag?.name}
              </Badge>
            </Link>
          ))}
        </div>

        <div
          className="mt-14 text-justify max-w-2xl m-auto prose-heading:my-5 prose-heading:text-2xl
                    prose-p:mb-5 prose-p:leading-7 prose-li:list-disc prose-li:leading-7 prose-li:ml-4"
        >
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
};

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
    ),
  },
};

export default page;
