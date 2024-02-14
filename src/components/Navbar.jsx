import logo from "../assets/images/black logo.png";
import "../css/Navbar.css";
function Navbar(){
  return(
    <>
    <nav>
      <a>
        <img src={logo} alt="" />
      </a>
      <div>
        <ul id="navbar">
          <li><a href="/">HOME</a></li>
          <li><a href="/Shop">SHOP</a></li>
          <li><a href="/">CART</a></li>
          <li><a href="/">CONTECT US</a></li>
        </ul>
      </div>
      <div id="mobile">
<i className="fas fa-bars"></i>
<i className="fas fa-times"></i>
      </div>
    </nav>
    </>
  )
}
export default Navbar;