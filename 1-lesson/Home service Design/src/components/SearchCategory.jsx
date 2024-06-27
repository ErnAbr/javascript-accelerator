import PropTypes from "prop-types";
import { CardGrid } from "./CardGrid";
import { Category } from "./Category";

export const SearchCategory = ({ category }) => {
  return (
    <>
      <Category />
      <CardGrid category={category} />
    </>
  );
};

SearchCategory.propTypes = {
  category: PropTypes.string,
};
