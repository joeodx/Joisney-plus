import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src="/joisney/public/disney.jpeg" alt="DisneyLogo"
        width={120}
        height={100}
        className="cursor-pointer invert"/>
      </Link>
      </header>
  )
}
