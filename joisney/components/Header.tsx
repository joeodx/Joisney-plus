import Image from "next/image";
import Link from "next/link";
import disney from "../../joisney/public/disney.png";
import { ThemeToggler } from "./ThemeToggler";

export const Header = () => {
  return (
    <header>
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
