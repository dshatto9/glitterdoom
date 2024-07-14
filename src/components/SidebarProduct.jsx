import { useState } from "react";

const Sidebar = ({ onFilterChange }) => {
  const categories = [
    {
      id: "new-arrivals",
      title: "New Arrivals",
      subcategories: [
        { id: "sub-new1", title: "New for 2024" },
        { id: "sub-new2", title: "Press Ons" },
        { id: "sub-new2", title: "Extras" },
        { id: "sub-new2", title: "Accessories" },
      ],
    },
    {
      id: "press-ons",
      title: "Press ons",
      subcategories: [
        { id: "sub-press1", title: "Pride 2024" },
        { id: "sub-press2", title: "Full Sets" },
        { id: "sub-press2", title: "Custom Sets" },
      ],
    },
    {
      id: "extras",
      title: "Extras",
      subcategories: [
        { id: "sub-extras1", title: "Sizing Kits" },
        { id: "sub-extras2", title: "Nail Glue" },
        { id: "sub-extras2", title: "Cuticle Oil" },
      ],
    },
    {
      id: "accessories",
      title: "Accessories",
      subcategories: [
        { id: "sub-accessories1", title: "Bundles" },
        { id: "sub-accessories2", title: "Bracelets" },
        { id: "sub-accessories2", title: "Clips" },
      ],
    },
  ];

  const [selectedSubcategories, setSelectedSubcategories] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const toggleSubcategory = (subcategoryId) => {
    const updatedSelection = {
      ...selectedSubcategories,
      [subcategoryId]: !selectedSubcategories[subcategoryId],
    };
    setSelectedSubcategories(updatedSelection);
    onFilterChange(updatedSelection);
  };

  return (
    <div className="flex flex-col justify-start mr-20 lg:w-56 2xl:w-64 h-screen bg-black text-white gap-4 mt-6 2xl:ml-20">
      <h2 className="text-xl font-bold"></h2>
      {categories.map((category) => (
        <div key={category.id} className="mb-2">
          <button
            onClick={() => toggleCategory(category.id)}
            className="w-2/3 flex justify-center items-center ml-20 bg-[#EC2989] p-4 rounded-lg focus:outline-none"
          >
            {category.title}
          </button>
          {expandedCategories[category.id] && (
            <div className="mt-2 pl-4">
              {category.subcategories.map((subcategory) => (
                <div key={subcategory.id} className="mb-2">
                  <button
                    onClick={() => toggleSubcategory(subcategory.id)}
                    className="w-3/4 flex items-center justify-start ml-14 bg-black p-2 rounded-lg focus:outline-none cursor-pointer"
                  >
                    {subcategory.title}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
