import { Topbar } from "../components/Topbar";
import { Search } from "../components/Search";
import { SearchCategory } from "../components/SearchCategory";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  return (
    <>
      <Topbar />
      <Search />
      <SearchCategory category={category} />
    </>
  );
};
