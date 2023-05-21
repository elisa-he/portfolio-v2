import Link from "next/link";
import Image from "next/image";

export default function Header({ logo }) {
  return (
    <div className="logoWrapper p-4 ">
      <Link href="/" className="link text-center flex justify-center ">
        <Image src={logo} alt="logo" className="logo" />
      </Link>
    </div>
  );
}
