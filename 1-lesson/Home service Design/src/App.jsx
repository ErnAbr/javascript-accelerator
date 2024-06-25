import { Topbar } from "./assets/components/Topbar";
import { Search } from "./assets/components/Search";
import "./assets/styles/Default.module.scss";
import { Category } from "./assets/components/Category";

function App() {
  return (
    <>
      <Topbar />
      <Search />
      <Category />
    </>
  );
}

export default App;
