import { Post } from "@/lib/types";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div
      className="mb-8 p-4 border border-gray-900 rounded-md shadow-sm shadow-purple-950 
      hover:shadow-md hover:bg-purple-500 hover:text-white hover:dark:bg-neutral-900"
    >
      <Link href={`/posts/${post?.slug?.current}`}>
        <div>
          <h2 className="FontLilita text-2xl dark:text-slate-300">
            {post?.title}
          </h2>
          <p className="font-date my-2 text-purple-800">
            {new Date(post?.publishedAt).toDateString()}
          </p>
          <p className="dark:text-gray-400 mb-4 line-clamp-2">
            {post?.excerpt}
          </p>
        </div>
      </Link>

      {/* Tags */}

      <div className="flex gap-x-3">
        {post?.tags?.map((tag) => (
          // <Link key={tag?._id} href={`/tags/${tag?.slug?.current}`}>
          <Badge key={tag?._id} className="lowercase" variant="secondary">
            #{tag?.name}
          </Badge>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
