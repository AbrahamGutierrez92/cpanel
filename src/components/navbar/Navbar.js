import React from 'react';
import "./navbar.scss";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import ListIcon from '@material-ui/icons/List';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
         <div className="search">
             <input type="text" placeholder="Search..." />
             <SearchIcon />
         </div>

         <div className="items">
           <div className="item">
             <LanguageIcon  className="icon" />
             English
           </div>

           <div className="item">
             <Brightness4Icon className="icon" />
           </div>

           <div className="item">
             <FullscreenIcon className="icon" />
           </div>

           <div className="item">
             <NotificationsIcon className="icon" />
             <div className="counter">1</div> 
           </div>

           <div className="item">
             <ChatIcon className="icon" />
             <div className="counter">4</div>
           </div>

           <div className="item">
             <ListIcon className="icon" />
           </div>

           <div className="item">
             <img src="https://abrahamgutierrez92.xyz/static/media/abraham.3e2feb87.jpg" className="avatar"/>
           </div>
         </div>
      </div> 
    </div>
  )
}

export default Navbar;