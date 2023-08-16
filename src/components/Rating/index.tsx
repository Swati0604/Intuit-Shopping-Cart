import { Star } from "@material-ui/icons";
import "./styles.scss";

interface RatingProps {
  content: number;
}

export const Rating = ({ content }: RatingProps): JSX.Element => {
  return (
    <div className="rating valign-wrapper">
      <p className="grade">{content}</p>
      <Star className="icon-style" />
    </div>
  );
};
