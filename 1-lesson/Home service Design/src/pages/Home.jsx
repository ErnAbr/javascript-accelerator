import { Topbar } from "../components/Topbar";
import { Search } from "../components/Search";
import { Category } from "../components/Category";
import { CardGrid } from "../components/CardGrid";

export const Home = () => {
  return (
    <>
      <Topbar />
      <Search />
      <Category />
      <CardGrid />
    </>
  );
};
