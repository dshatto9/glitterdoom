import payment from "../assets/payment2.png";
import logo2 from "../assets/logo2.png";
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import email from "../assets/email.png";
import arrow from "../assets/arrow.png";

const Footer = () => {
  return (
    <div className="mr-[150px] ml-[150px] mt-[30px] mb-[30px]">
      <div className="hidden md:flex gap-[50px]">
        <div className="flex-1 flex ml-4 flex-col gap-2 text-justify text-sm">
          <h1 className="font-bold text-[16px] text-gray-600">Categories</h1>
          <span className="text-nowrap text-gray-500 cursor-pointer">
            New Arrivals
          </span>
          <span className="text-gray-500 cursor-pointer">Best Sellers</span>
          <span className="text-gray-500 cursor-pointer">Press Ons</span>
          <span className="text-gray-500 cursor-pointer">Extras</span>
          <span className="text-gray-500 cursor-pointer">Accessories</span>
        </div>
        <div className="flex flex-col text-justify text-sm gap-2">
          <h1 className="font-bold text-[16px] text-gray-600">Links</h1>
          <a href="/contact">
            <span className="text-gray-500 cursor-pointer">FAQ</span>
          </a>
          <span className="text-gray-500 cursor-pointer">Shop</span>
          <span className="text-gray-500 cursor-pointer">Contact</span>
          <span className="text-gray-500 text-nowrap cursor-pointer">
            About Us
          </span>
          <span className="text-gray-500 cursor-pointer text-nowrap">
            Privacy Policy
          </span>
        </div>
        <div className="">
          <h1 className="font-bold text-[16px] text-gray-600">
            Stay Connected
          </h1>
          <span className="md:flex justify-center items-center">
            Join the mailing list to keep up to date on latest releases and
            special deals!
          </span>
          <div className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Email"
              className="outline outline-1 h-[36px] w-1/2 p-2"
            />
            <button
              type="submit"
              className="flex justify-center items-center outline outline-1 bg-[#EC2989] h-[36px] p-2"
            >
              <img
                src={arrow}
                alt=""
                width={24}
                className="flex items-center justify-center"
              />
            </button>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-[16px] text-gray-600">Contact Us</h1>
          <span className="flex items-center justify-center">
            Feel free to contact us with any questions or concerns you may have.
            You can reach us at any of these links.{" "}
          </span>
          <div className="md:flex mt-4 gap-2">
            <a href="https://www.facebook.com/glitterdoom/" target="_blank">
              <img src={fb} alt="" width={24} />
            </a>
            <a href="https://www.instagram.com/glitterdoom_/" target="_blank">
              <img src={insta} alt="" width={24} />
            </a>
            <a href="https://www.tiktok.com/@glitterdoom_" target="_blank">
              <img src={tiktok} alt="" width={24} />
            </a>
            <a href="/contact" target="_blank">
              <img src={email} alt="" width={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[30px]">
        <div className="flex items-center">
          <div className="">
            <img
              src={logo2}
              alt=""
              className="hidden md:flex md:object-cover md:w-48"
            />
          </div>
          <span className="absolute left-[80px] md:left-[330px] w-56 ml-4 text-xs">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="">
          <img src={payment} alt="" className="hidden md:flex md:h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
