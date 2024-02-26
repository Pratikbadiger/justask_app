import { Component } from "react";
import logo from "../assets/images/logo-removebg-preview.png";
import { CgProfile } from "react-icons/cg";
import { SearchOutlined} from '@ant-design/icons';
import { Input } from 'antd';
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
      <a href="Profiles"><CgProfile className="profile"/></a>
      <div className="keys">
        <ul id="navbar" className={this.state.clicked ?"#navbar active":"#navbar" }>
          <li><a href="/">HOME</a></li>
          <li><a href="Shop">SHOP</a></li>
          <li><a href="Cart">CART</a></li>
          <li><a href="FeedBack">FEEDBACK</a></li>
        </ul>
      </div>
      <div className='search-bar' style={{ display: "flex", justifyContent: "center" }}>
                            <Input
                                style={{ borderRadius: "20px", border: "1px solid #1e81b0" }}
                                placeholder="Search"
                                prefix={<SearchOutlined style={{}} />}
                                className="search-input"
                            />
                      
      <div id="mobile" onClick={this.handleclick}>
<i id="bar"className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
      </div>
      </div>
    </nav>
    </>
  )
}
}
export default Navbar;