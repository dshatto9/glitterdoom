import { useState } from "react";
import del from "../assets/close.png";
import { useShoppingCart } from "use-shopping-cart";
import Checkout from "./Checkout";

const Cart = () => {
  const { cartDetails, removeItem, clearCart } = useShoppingCart();
  const [open, setOpen] = useState(false);
  const { cartCount } = useShoppingCart();
  const cartItems = cartDetails ? Object.values(cartDetails) : [];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div
        className="absolute right-5 top-[80px] z-[999] bg-white p-5 shadow-[0_0_10px_-5px_rgba(0,0,0,0.5)]"
        onClick={() => setOpen(!open)}
      >
        Your Cart is Empty!
      </div>
    );
  }

  return (
    <div className="absolute right-5 top-[80px] z-[999] bg-white p-5 shadow-[0_0_10px_-5px_rgba(0,0,0,0.5)]">
      <h1 className="mb-[30px] text-gray-600 font-normal text-2xl">
        Your Shopping Cart ({cartCount})
      </h1>
      {cartItems.map((product) => (
        <div className="flex items-center gap-5 mb-[30px]" key={product._id}>
          <img
            src={product.image}
            alt=""
            width={80}
            height={100}
            className="object-cover"
          />
          <div className="">
            <h1 className="text-xl font-normal">{product.name}</h1>
            <p className="text-gray-500 mb-[10px] text-sm"></p>
            <div className="text-[#EC2989]">
              {product.quantity} x {(product.price / 100).toFixed(2)}
            </div>
          </div>
          <img
            src={del}
            alt=""
            width={16}
            className="cursor-pointer "
            onClick={() => removeItem(product.id)}
          />
        </div>
      ))}
      <div className="flex justify-between font-medium text-lg mb-5">
        <span>Subtotal</span>
        <span>${(totalPrice / 100).toFixed(2)}</span>
      </div>
      <div>
        <Checkout items={cartItems} />
      </div>
      <span className="text-red-600 text-xs cursor-pointer" onClick={clearCart}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
