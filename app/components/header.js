import Link from "next/link";
import Image from "next/image";

export default function Header({ logo }) {
  return (
    <div id="logo" className="logoWrapper  p-4 ">
      <Link
        href="/"
        className="link text-center flex tablet:justify-start justify-center "
      >
        <Image src={logo} alt="logo" className="logo tablet:w-[125px]" />
      </Link>
    </div>
  );
}
