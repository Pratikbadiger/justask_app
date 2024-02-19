import { Component } from "react";
import logo from "../assets/images/logo-image.jpg";
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

      <div className='search-bar' style={{ display: "flex", justifyContent: "center" }}>
                            <Input
                                style={{ borderRadius: "20px", border: "1px solid #1e81b0" }}
                                placeholder="Search"
                                prefix={<SearchOutlined style={{}} />}
                                className="search-input"
                            />
                        
      <div>
        <ul id="navbar" className={this.state.clicked ?"#navbar active":"#navbar" }>
          <li><a href="#">PROFILES</a></li>
          <li><a href="/">HOME</a></li>
          <li><a href="Shop">SHOP</a></li>
          <li><a href="">CART</a></li>
          <li><a href="FeedBack">FEEDBACK</a></li>
          
        </ul>
      </div>
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