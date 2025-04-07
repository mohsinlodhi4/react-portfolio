import React from 'react'
import {Link} from 'react-router-dom'

function showHideMenu(){
    var menuWrap = document.getElementsByClassName('header_wrap');
    if(menuWrap[0].style.display == '' || menuWrap[0].style.display == 'none'){
        menuWrap[0].style.display = 'block';
    }else{
        menuWrap[0].style.display = 'none';
    }
}

const Header = () => {
    const showMenu = ()=>{
        console.log("show")
    }    

  return (
    <div className="header_wrapper">
        <button onClick={() => showHideMenu()} className="mobile-menu-btn common_btn">Menu</button>
        <div className="container">
            <div className="header_wrap">
                <div className="header_link">
                    <div className="header_nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#aboutus">About Us</a></li>
                            {/* <li><Link to="/gallery">Gallery</Link></li> */}
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills1">Skills</a></li>
                        </ul>
                    </div>
                    <div className="header_btn">
                        <a href="#footer_form" className="common_btn">Let's Chat </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
