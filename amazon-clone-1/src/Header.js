import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
function Header(){
    const [{ basket,user }] = useStateValue();
    const login = () => {
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <nav className="header">
        <Link to="/">
            {/*Logo */}
        <img 
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
        />
        </Link>
        {/*Search Box*/}
        <div className="header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
        </div>

        {/*Links*/}
        <div className="header__nav">
            {/*first link*/}
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className="header__option">
                    <span className="header__optionLineOne">Hello {user ?.email}</span>
    <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign in'}</span>
                </div>
            </Link>

            {/*second link*/}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
           

            {/*third link*/}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>

            {/*forth link checkout*/}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>

        </div>
        </nav>
        
        
    );
}
export default Header;