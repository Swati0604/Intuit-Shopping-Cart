import { CategoryItemProps } from "../../../utils/types";
import "./styles.scss";

const CategoryItem = ({ item, handleShopNowClick }: CategoryItemProps) => {
  return (
    <div className="category-item-container">
      <img className="category-item-image" src={item.img} alt="category-item" />
      <div className="category-info">
        <div className="category-title">{item.title}</div>
        <button className="category-button" onClick={handleShopNowClick}>
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
