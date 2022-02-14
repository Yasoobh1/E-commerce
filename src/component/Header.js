import logo from "../assets/images/logo.png";
function Header() {
  return (
    <header>
      <div className="logo">
        {/* <img width={40} height={40} src={logo} /> */}
        <span>Categories</span>
      </div>
      <div className="navbararea-mid">
        <a href="#">Home</a>
        <span>|</span>
        <a href="#">Licensing</a>
        <span>|</span>
        <a href="#">Activity</a>
        <span>|</span>
        <a href="#">Visa</a>
        <span>|</span>
        <a href="#">Office</a>
      </div>
      <div className="navbararea-right">
        <div className="navlink">
          <a href="#">How it works</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
