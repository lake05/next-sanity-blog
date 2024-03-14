import Link from "next/link";
import { Lilita_One } from "next/font/google";
import { cn } from "@/lib/utils";
import { ArrowBigLeft } from "lucide-react";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <ArrowBigLeft className="text-purple-500" size={30} />
      </Link>
      <div className={cn(font.className, "text-3xl text-neutral-400")}>
        KeWang <span className="text-purple-500">Blog</span>
      </div>
    </div>
  );
};

export default CmsNavbar;
