import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../sanityClient";
import heart from "../assets/heart.png";
import send from "../assets/send.png";
import { useShoppingCart } from "use-shopping-cart";
import { motion } from "framer-motion";

const Product = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(1);
  const [product, setProduct] = useState(null);
  const { addItem } = useShoppingCart();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product" && _id == $productId]{
          title,
          stripeId,
          description,
          description2,
          price,
          "imageUrl": image.asset->url,
          "imageUrl2": image2.asset->url,
        }`,
        { productId }
      )
      .then((data) => setProduct(data[0]))
      .catch(console.error);
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    addItem({
      id: product._id,
      name: product.title,
      description: product.description,
      price: product.price * 100,
      image: product.imageUrl,
      currency: "USD",
      stripeId: product.stripeId,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="py-5 px-4 md:px-[50px] mb-[150px] md:flex gap-[50px] "
    >
      <div className="flex-1 flex gap-5">
        <div className="flex-1">
          <img
            src={product?.imageUrl}
            alt=""
            className="w-full md:h-[150px] object-contain md:mb-[10px] cursor-pointer rounded-lg"
            onClick={(e) => setSelectedImg(1)}
          />
          <img
            src={product?.imageUrl2}
            alt=""
            className="w-full h-[150px] object-contain mb-[10px] cursor-pointer rounded-lg"
            onClick={(e) => setSelectedImg(0)}
          />
        </div>
        <div className="flex-[4_4_0%]">
          <img
            src={
              [selectedImg][0] === 0 ? product?.imageUrl2 : product?.imageUrl
            }
            alt=""
            className="w-full max-h-[800px] object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-[30px]">
        <h1 className="text-3xl mt-6 md:mt-0 md:text-6xl">{product.title}</h1>
        <span className="text-3xl font-medium text-[#EC2989]">
          ${product.price}
        </span>
        <p className="text-lg text-gray-500 font-medium">
          {product.description}
        </p>
        <div>
          <form className="max-w-sm">
            <label className="block mb-2 text-sm font-medium text-black">
              Select an option
            </label>
            <select
              id="product-size"
              className="text-sm rounded-lg w-1/2 p-2.5 outline outline-1"
            >
              <option defaultValue="">Select an Option</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="Custom">Custom</option>
            </select>
          </form>
        </div>
        <div>
          <form className="max-w-sm">
            <label className="block mb-2 text-sm font-medium text-black">
              Shape + Length
            </label>
            <select
              id="product-size"
              className="text-sm rounded-lg w-1/2 p-2.5 outline outline-1"
            >
              <option defaultValue="">Select an Option</option>
              <option value="S">Short Square</option>
              <option value="S">Short Coffin</option>
              <option value="S">Short Stiletto</option>
              <option value="S">Short Almond</option>
              <option value="S">Short Oval</option>
              <option value="M">Medium Square</option>
              <option value="M">Medium Coffin</option>
              <option value="M">Medium Stiletto</option>
              <option value="M">Medium Almond</option>
              <option value="M">Medium Oval</option>
              <option value="L">Long Square</option>
              <option value="L">Long Coffin</option>
              <option value="L">Long Stiletto</option>
              <option value="L">XL Square</option>
              <option value="L">3XL Square</option>
            </select>
          </form>
        </div>
        <div className="flex items-center text-justify">
          <button
            className="w-[45px] h-[45px] mr-2 flex items-center justify-center border-none bg-gray-200 cursor-pointer"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button
            className="w-[45px] h-[45px] ml-2 flex items-center justify-center border-none bg-gray-200 cursor-pointer"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <button className="w-[250px] p-[10px] bg-[#EC2989] rounded-lg text-white flex items-center justify-center gap-5 cursor-pointer border-none font-medium">
          Buy Now
        </button>
        <div>
          <button
            className="w-[250px] p-[10px] bg-[white] outline outline-1 outline-[#EC2989] rounded-lg text-[#EC2989] flex items-center justify-center gap-5 cursor-pointer border-none font-medium"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-[10px] text-[#EC2989] text-sm cursor-pointer">
            <img src={heart} width={24} alt="" />
            Add to Favorites
          </div>
          <div className="flex items-center gap-[10px] text-[#EC2989] text-sm cursor-pointer">
            <img src={send} width={24} alt="" />
            Share
          </div>
        </div>
        <div className="flex flex-col gap-[10px] text-gray-400 text-sm mt-[30px]">
          <span>Product: Press Ons</span>
          <span>Tags: {product.description2}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
