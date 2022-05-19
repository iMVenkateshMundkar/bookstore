// import React, {useState, useEffect} from "react";
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

function Header(){
    return (
        <div className="header">
            <div className='logo'>
                <img className='logo-img' src="" alt="" />
            </div>
            <div className='input-search'>
                <input type="text" placeholder='Search by Title, Author, Publisher or ISBN' className='input-search-bar' />
                <SearchIcon className='input-search-icon hover'/>
            </div>
            <div className='info'>
                <div className='signUp-In hover'>
                    <span>Hello Guest</span><br />
                    <span>Sign In</span>
                </div>
                <div className='cartPage hover'>
                    <ProductionQuantityLimitsIcon className='cart-Icon' />
                </div>
                <div className='orders hover'>My Orders</div>
            </div>
        </div>
    )
}

export default Header;
