import Image from "next/image";
import Link from "next/link";
import disney from "../../joisney/public/disney.png";
import { ThemeToggler } from "./ThemeToggler";
// import SearchInput from "./SearchInput";

export const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/10">
      <Link href="/">
        <Image
          src={disney}
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        {/* <SearchInput /> */}
        <ThemeToggler />
      </div>
    </header>
  );
};
