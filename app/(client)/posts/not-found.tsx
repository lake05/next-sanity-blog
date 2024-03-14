import Header from "../_components/header";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <Header title="404 - Page Not Found" />
      <div>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
