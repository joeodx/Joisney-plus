import Image from "next/image"
import Link from "next/link"
import disney from "../../joisney/public/disney.png"


export const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src={disney} alt="DisneyLogo"
        width={120}
        height={100}
        className="cursor-pointer"/>
      </Link>
      </header>
  )
}
