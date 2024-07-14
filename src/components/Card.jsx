import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="p-4">
      <div className="flex items-center justify-center p-4">
        <img src={product.imageUrl} width={275} alt="" className="outline" />
      </div>
      <h1 className="text-white items-center justify-center flex text-2xl">
        {product.title}
      </h1>
      <p className="flex items-center justify-center text-sm">
        $ {product.price}
      </p>
    </Link>
  );
};

export default Card;
