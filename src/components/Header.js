import React , {useState , useEffect} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import HeaderOption from './HeaderOption';
import { Avatar } from '@material-ui/core'
import AppsIcon from '@material-ui/icons/Apps';

function Header() {


    return (
        <div className="header">
            <div className="header__left">
                    <img src="https://s.yimg.com/nq/nr/img/yahoo_mail_global_english_white_1x.png" alt=""/>
                    <div className="header__search">
                        <input type="text" placeholder="Search messages , documents , photos or people"/>
                    </div>
                    <div className="searchIcon">
                    <SearchIcon/>
                    </div>
            </div>

            <div className="header__right">
                <div className="avatar_frame">
                    <Avatar src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/1/5f6d2c93a53d1-bpfull.jpg" className="headerOption__icon"/>
                    <p>Ashley</p>
                </div>
                <HeaderOption Icon={AppsIcon}/>
                <HeaderOption Icon={HomeIcon} title="Home"/>
                {/* <HeaderOption Icon={icon} title={theme} click={toggleTheme}/> */}
              
            </div>
        </div>
    )
}

export default Header
