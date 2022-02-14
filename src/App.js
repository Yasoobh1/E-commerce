import logo from "./logo.svg";
import "./index.scss";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import Heroslider from "./component/heroslider";
import Categories from "./component/Categories";
import SellingProducts from "./component/SellingProducts";
import Commonly from "./component/Commonly";
import PartnerShip from "./component/PartnerShip";
import Packages from "./component/Packages";

function App() {
  return (
    <>
      <section className="main">
        <SearchBar />
        <Header />
        <Heroslider />
        <Categories />
        <SellingProducts />
        <Commonly />
        <PartnerShip />
        <Packages />
      </section>
    </>
  );
}

export default App;
