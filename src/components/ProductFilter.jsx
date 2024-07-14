import { useEffect, useState } from "react";

const ProductFilter = ({ selectedSubcategories }) => {
  const allProducts = [
    { id: 1, name: "Product 1", subcategoryId: "sub-new1" },
    { id: 2, name: "Product 2", subcategoryId: "sub-new2" },
    { id: 3, name: "Product 3", subcategoryId: "sub-press1" },
    { id: 4, name: "Product 4", subcategoryId: "sub-press2" },
    { id: 5, name: "Product 5", subcategoryId: "sub-extras1" },
    { id: 6, name: "Product 6", subcategoryId: "sub-extras2" },
    { id: 7, name: "Product 7", subcategoryId: "sub-accessories1" },
    { id: 8, name: "Product 8", subcategoryId: "sub-accessories2" },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const subcategoryFilters = Object.keys(selectedSubcategories).filter(
      (key) => selectedSubcategories[key]
    );

    const filteredProducts = subcategoryFilters.length
      ? allProducts.filter((product) =>
          subcategoryFilters.includes(product.subcategoryId)
        )
      : allProducts;

    setProducts(filteredProducts);
  }, [selectedSubcategories]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
