import { useState } from "react";
import Sidebar from "./Sidebar";
import Hamburger from "./Hamburger";
import logo from "../assets/logo.jpg";
import cart from "../assets/shopping-cart.png";
import user from "../assets/user.png";
import Cart from "./Cart";
import { useShoppingCart } from "use-shopping-cart";
import SearchBar from "./Searchbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartCount } = useShoppingCart();
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <nav className="flex list-none justify-between h-[90px] px-4 md:px-12 font-body text-md bg-white">
      <div className="md:flex items-center gap-12">
        <div className="">
          <a href="/">
            <img
              src={logo}
              alt=""
              className="mt-3 md:mt-0 w-md:w-16 h-16 rounded-full object-cover"
            />
          </a>
        </div>
        <div className="hidden md:flex gap-12">
          <a href="/">
            <li className="hover:scale-110 font-medium">Home</li>
          </a>
          <a href="/shop">
            <li className="hover:scale-110 font-medium">Shop</li>
          </a>
          <a href="/about">
            <li className="hover:scale-110 font-medium">About Us</li>
          </a>
          <a href="/contact">
            <li className="hover:scale-110 font-medium">Contact</li>
          </a>
        </div>
      </div>
      <div className="hidden md:relative items-center md:flex gap-4">
        <SearchBar onSearch={handleSearch} />
        <img src={user} alt="" width={24} className="cursor-pointer" />
        <img
          src={cart}
          alt=""
          width={24}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <div className="bg-black absolute -right-3 top-[21px] rounded-full text-sm text-white px-1.5">
          {cartCount}
        </div>
      </div>
      {open && <Cart />}
      <div className="absolute right-0">
        <Hamburger toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className=""></div>
      </div>
    </nav>
  );
};

export default Navbar;
