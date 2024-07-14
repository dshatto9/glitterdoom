import { Link } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { cartCount } = useShoppingCart();
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-black text-white w-52 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button onClick={toggleSidebar} className="p-4">
        X
      </button>
      <nav className="mt-10 flex flex-col gap-8">
        <Link
          to="/"
          className="text-2xl block py-3 px-4 rounded transition duration-200 hover:bg-[#EC2989] hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="text-2xl block py-3 px-4 rounded transition duration-200 hover:bg-[#EC2989] hover:text-white"
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="text-2xl block py-3 px-4 rounded transition duration-200 hover:bg-[#EC2989] hover:text-white"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-2xl block py-3 px-4 rounded transition duration-200 hover:bg-[#EC2989] hover:text-white"
        >
          Contact
        </Link>
        <Link
          to="/cart"
          className="text-2xl block py-3 px-4 rounded transition duration-200 hover:bg-[#EC2989] hover:text-white"
        >
          Cart ({cartCount})
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
