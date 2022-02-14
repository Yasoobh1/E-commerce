import logo from "../assets/images/logo.png";
import search from "../assets/images/search-icon.png";

function SearchBar() {
  return (
    <div className="searchbar">
      <div className="logo">
        <img width={40} height={40} src={logo} />
      </div>
      <div className="navbararea-mid">
        <input placeholder="  Search" />
        {/* <img src={search} /> */}
      </div>
      <div className="navbararea-right">
        <div className="navlink">
          <a href="#">Login</a>
          <a href="#">Signup</a>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
