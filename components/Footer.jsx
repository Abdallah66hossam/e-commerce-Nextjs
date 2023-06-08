import Image from "next/image";
import Logo from "../public/Logo.png";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mx-[6%] absolute">
      <footer className="w-full flex sm:flex-col sm:items-start pb-10 items-center justify-center gap-9 uppercase relative bottom-0">
        <ul className="">
          <Image src={Logo} alt="Logo" width={100} />
          <p className="text-[#AEAEAE] text-[16px] font-medium lowercase">
            Nisi, purus vitae, ultrices nunc.Sit ac sit suscipit hendrerit.
            Gravida massa volutpat aenean odio erat nullam fringilla.
          </p>
          <span className="flex justify-start gap-4 mt-2">
            <BsFacebook
              cursor={"pointer"}
              size={16}
              className="text-[#bbb] hover:text-[#72AEC8] hover:scale-125 duration-100"
            />
            <BsInstagram
              cursor={"pointer"}
              size={16}
              className="text-[#bbb] hover:text-[#72AEC8] hover:scale-125 duration-100"
            />
            <BsTwitter
              cursor={"pointer"}
              size={16}
              className="text-[#bbb] hover:text-[#72AEC8] hover:scale-125 duration-100"
            />
            <BsLinkedin
              cursor={"pointer"}
              size={16}
              className="text-[#bbb] hover:text-[#72AEC8] hover:scale-125 duration-100"
            />
          </span>
        </ul>
        <ul className="w-1/2">
          <h4 className=" text-lg text-[#212529]">Quik Links</h4>
          <li className="text-sm sm:text-[12px] py-1 text-[#212529]">Home</li>
          <li className="text-sm sm:text-[12px] py-1 text-[#212529]">About</li>
          <li className="text-sm sm:text-[12px] py-1 text-[#212529]">Shop</li>
          <li className="text-sm sm:text-[12px] py-1 text-[#212529]">Blogs</li>
          <li className="text-sm sm:text-[12px] py-1 text-[#212529]">
            Contact
          </li>
        </ul>
        <ul>
          <h4 className="text-lg text-[#212529] mb-3">Contuct us</h4>
          <h6 className="text-[#AEAEAE] text-md lowercase">
            Do you have any questions?
            <a
              href="mailto:8abdallah88@gmail.com"
              className="text-[#212529] text-sm"
            >
              8abdallah88@gmail.com
            </a>
          </h6>
          <h6 className="text-[#AEAEAE] text-md lowercase">
            If you need support? Just give me a call.
            <a
              href="tel:+201004831981"
              className="text-[#212529] text-sm sm:text-[12px]"
            >
              +20 100 483 1981
            </a>
          </h6>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
