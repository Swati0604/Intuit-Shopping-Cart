import { categories } from "../../utils/constants";

import CategoryItem from "./CategoryItem";

import "./styles.scss";

const Categories = ({
  handleShopNowClick
}: {
  handleShopNowClick: () => void;
}) => {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem
          item={item}
          key={item.id}
          handleShopNowClick={handleShopNowClick}
        />
      ))}
    </div>
  );
};

export default Categories;
