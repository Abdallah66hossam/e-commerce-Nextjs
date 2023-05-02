import Image from "next/image";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import logo from "../public/Logo.png";

export default function NavBar() {
  const quntity = useSelector((state) => state.cart.products.length);
  return (
    <nav className="flex items-center justify-between bg-white fixed top-0 z-50 shadow-sm px-[6%] py-3 w-full">
      <Link href={"/"}>
        <Image
          src={logo}
          height={40}
          width={90}
          className="object-contain"
          alt="Logo"
        ></Image>
      </Link>

      <Link href={"/cart"} className="flex justify-center">
        <BsCart4 size={22} />
        <span className="relative bottom-2 right-1 bg-red-300 w-4 h-4 rounded-full flex items-center justify-center text-white text-[11px]">
          {quntity}
        </span>
      </Link>
    </nav>
  );
}
