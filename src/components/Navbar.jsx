import { Component } from "react";
import logo from "../assets/images/logo-image.jpg";
import "../css/Navbar.css";
class Navbar extends Component{
  state ={clicked:false };
  handleclick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return(
    <>
    <nav>
      <a>
        <img src={logo} alt="" />
      </a>
      <div>
        <ul id="navbar" className={this.state.clicked ?"#navbar active":"#navbar" }>
        <li><a href="/">SEARCH ITEAM</a></li>
          <li><a href="/">PROFILES</a></li>
          <li><a href="/">HOME</a></li>
          <li><a href="/Shop">SHOP</a></li>
          <li><a href="/">CART</a></li>
          <li><a href="/">CONTECT US</a></li>
          
        </ul>
      </div>
      <div id="mobile" onClick={this.handleclick}>
<i id="bar"className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
      </div>
    </nav>
    </>
  )
}
}
export default Navbar;