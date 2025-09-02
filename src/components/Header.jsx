import React, { useState } from 'react';
import '../css/Header.css';
import { CiShoppingBasket, CiLight } from "react-icons/ci";
import { IoMdMoon } from "react-icons/io";
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';

function Header() {
    const [theme, setTheme] = useState(false);
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.basket); 

    const changeTheme = () => {
        const root = document.getElementById('root');
        setTheme(!theme);
        if (!theme) {
            root.style.backgroundColor = "#000";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "#000";
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} className='header'>
            <div className='flex-row'>
                <img className='logo' src="./src/images/total-logo.png" alt="logo" />
                <p className='logo-text'>Buy NOW</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Search something' />
                <div>
                    {theme
                        ? <IoMdMoon className='icon' onClick={changeTheme} />
                        : <CiLight className='icon' onClick={changeTheme} />
                    }

                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="primary">
                        <MailIcon color="action" />
                        <CiShoppingBasket className='icon' />
                    </Badge>
                </div>
            </div>
        </div>
    );
}

export default Header;
