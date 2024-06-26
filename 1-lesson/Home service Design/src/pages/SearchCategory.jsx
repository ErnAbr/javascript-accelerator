import { useParams } from "react-router-dom";

export const SearchCategory = () => {
  const { category } = useParams();

  return <h1>This is {category} page</h1>;
};
