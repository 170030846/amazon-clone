import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return (
    <div className="home">
        <img
        className="home__image"
         src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        /> 

        {/* {Product id, title, price,Rating, image} */}
        <div className="home__row">
        <Product
        id="1"
        title="How to Win Friends and Influence People"
        price={15}
        rating={5}
        image="https://www.amazon.in/images/I/51bwFsBc0TL.jpg"
        />
        <Product
        id="2"
        title="Mi Smart Band 4- India's No.1 Fitness Band"
        price={2500}
        rating={4}
        image="https://www.amazon.in/images/I/71ZSpNjEl0L._SL1500_.jpg"
        />
        </div>


        <div className="home__row">
        <Product
        id="3"
        title="OnePlus 7 Pro (Mirror Grey, 8GB RAM, Fluid AMOLED Display) "
        price={42999}
        rating={5}
        image="https://www.amazon.in/images/I/51s0Mb5li8L._SL1000_.jpg"
        />
        <Product
        id="4"
        title="Apple AirPods with Wireless Charging Case "
        price={17999}
        rating={5}
        image="https://www.amazon.in/images/I/71IPFP9WJIL._SL1500_.jpg"
        />
         <Product
        id="5"
        title="Bosch 7 kg Fully-Automatic Front Loading Washing Machine"
        price={29499}
        rating={3}
        image="https://www.amazon.in/images/I/81HApTZ8D8L._SL1500_.jpg"
        />
        </div>

        <div className="home__row">
        <Product
        id="6"
        title="Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD"
        price={48000}
        rating={4}
        image="https://www.amazon.in/images/I/71el-PAu1IL._SL1500_.jpg"
        />
       
        </div>
    </div>
    );
}

export default Home;