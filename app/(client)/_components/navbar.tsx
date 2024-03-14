import Link from "next/link";
import ThemeSwitch from "./theme-switch";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className="font-lilita text-3xl dark:text-amber-50">
            KeWang <span className="text-purple-500">Blog</span>
          </div>
        </Link>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
