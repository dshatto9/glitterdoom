import Card from "../components/Card";
import { useEffect, useState } from "react";
import sanityClient from "../sanityClient";
import { motion } from "framer-motion";
import Sidebar from "../components/SidebarProduct";
import SortByDropdown from "../components/SortByDropdown";
import BackToTop from "../components/BackToTop";
// import { useParams } from "react-router-dom";

const Shop = () => {
  // const { productId } = useParams();
  const [products, setProduct] = useState([]);
  const [sortBy, setSortBy] = useState("price-desc");
  const [selectedSubcategories, setSelectedSubcategories] = useState({});

  const handleFilterChange = (newSelectedSubcategories) => {
    setSelectedSubcategories(newSelectedSubcategories);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
          title,
          date,
          _id,
          price,
          trending,
          slug,
          category,
          description,
          "imageUrl": image.asset->url,
        }`,
        { productId: "*" }
      )
      .then((data) => setProduct(data))
      .catch(console.error);
  }, []);

  const handleSortChange = (criteria) => {
    setSortBy(criteria);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "new-arrivals":
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      case "trending":
        return b.trending - a.trending;
      default:
        return 0;
    }
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1.0 }}
      className="flex bg-black font-body overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="hidden md:h-1/2 w-[160px] md:flex flex-col items-center justify-center p-4 mt-12"
      >
        <div className="flex flex-col">
          <Sidebar onFilterChange={handleFilterChange} />
          <div className="flex">
            <h1 className="text-2xl font-bold mb-8"></h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ ease: "easeInOut", duration: 1.0 }}
        className="flex py-10 w-full flex-col scroll-smooth"
      >
        <div className="flex md:justify-end items-center ml-14 lg:mr-8 2xl:mr-20">
          <SortByDropdown onChange={handleSortChange} />
        </div>
        <div className="text-white grid md:grid-cols-4 w-full">
          {sortedProducts?.map((product) => (
            <Card key={product} product={product} />
          ))}
        </div>
        <BackToTop />
      </motion.div>
    </motion.section>
  );
};

export default Shop;
