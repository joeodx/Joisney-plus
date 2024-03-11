import Image from "next/image";
import Link from "next/link";
import disney from "../../joisney/public/disney.png";
import { ThemeToggler } from "./ThemeToggler";

export const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-center p-5 bg-gradient">
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
        <ThemeToggler />
      </div>
    </header>
  );
};
