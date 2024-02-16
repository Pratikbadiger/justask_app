import React from "react";
import "../css/Shop.css";
import img1 from"../assets/images/Products-images/boat.webp"
import img2 from"../assets/images/Products-images/boat2.webp"
import img3 from"../assets/images/Products-images/madrabbit.webp"
import img4 from"../assets/images/Products-images/madrabbit2.webp"
import img5 from"../assets/images/Products-images/madrabbit3.webp"
import img6 from"../assets/images/Products-images/jbl.webp"
import img7 from"../assets/images/Products-images/boatwatch.webp"

const Shop=()=>{
    return(
        <>
        <h1>Welcome to Shop</h1>
        <div className="shop">
            <ul>
                <li>
                    <img src={img1} alt="" />
                    <p>boAt Rockerz 650 <br></br>with 60 Hours Battery Backup<br></br> Bluetooth Headset<br></br>  (Active Black, On the Ear)</p>
                    <p>₹1,799</p>
                </li>
                <li>
                    <img src={img2} alt="" />
                      <p>boAt Rockerz 551<br></br> ANC with Hybrid ANC, 100 HRS Playback, <br></br>40mm Drivers & ASAP Charge Bluetooth Headset </p>
                    <p>₹3500</p>
                </li>
                <li>
                    <img src={img3} alt="" />
                      <p> MadRabbit Touch ANC Bluetooth Headset <br></br> (Black, On the Ear)</p>
                    <p>₹7499</p>
                </li>
                <li>
                    <img src={img4} alt="" />
                      <p>MadRabbit Soul Earbuds Alpha with<br></br> Built-in Mics Bluetooth Headset <br></br> (Black, True Wireless)
</p>
                    <p>₹1399</p>
                </li>
                <li>
                    <img src={img5} alt="" />
                      <p> MadRabbit Bass-on Wireless Pro <br></br>Bluetooth Headset  </p>
                    <p>₹1199</p>
                </li>
                <li>
                    <img src={img6} alt="" />
                      <p> JBL C50HI Wired Headset <br></br> (Black, In the Ear)</p>
                    <p>₹799</p>
                </li>
                <li>
                    <img src={img7} alt="" />
                      <p></p>
                    <p>₹799</p>
                </li>

            </ul>
        </div>
        </>
        
    )
   

}

export default Shop;