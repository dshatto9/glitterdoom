import { useShoppingCart } from "use-shopping-cart";

const AddToCartBtn = (id, currency, description, imageUrl, price, price_Id) => {
  const { addItem } = useShoppingCart();
  const product = {
    id: id,
    currency: currency,
    description: description,
    images: imageUrl,
    price: price,
    price_Id: price_Id,
  };
  return (
    <div>
      <button
        className="w-[250px] p-[10px] bg-[white] outline outline-1 outline-[#EC2989] rounded-lg text-[#EC2989] flex items-center justify-center gap-5 cursor-pointer border-none font-medium"
        onClick={() => {
          addItem(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
