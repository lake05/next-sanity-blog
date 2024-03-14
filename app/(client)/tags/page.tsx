import { Tag } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import Header from "../_components/header";
import Link from "next/link";

async function getAllTags() {
  const query = `
  *[_type == "tag"] {
    _id,
    name,
    slug,
    "postCount": count(*[_type=="post" && references("tags", ^._id)]),
  }
  `;

  const data = await client.fetch(query);

  return data;
}

const TagsPage = async () => {
  const tags: Tag[] = await getAllTags();

  return (
    <div>
      <Header title="Tags" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tags?.length > 0 &&
          tags?.map((tag) => (
            <Link key={tag?._id} href={`/tags/${tag?.slug?.current}`}>
              <div className="mb-2 p-2 text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500">
                #{tag?.name} ({tag?.postCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TagsPage;
