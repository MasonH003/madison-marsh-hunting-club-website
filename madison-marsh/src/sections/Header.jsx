{/* import { Navbar } from 'flowbite-react'; */}
import { NavButton } from '../components';
import logo from '../assets/images/MMHC-Logo-Two.png';
import { getPerms } from '../components/PermissionGetter.js';
import React, {useState, useEffect } from 'react';

const Header = () => {
    const [userId, setUserId] = useState(-1);
    const [perms, setPerms] = useState(-1);
    getPerms( setUserId, setPerms );


    //console.log( "perms is: " + perms );
    return (
        <header className = "bg-primary shadow-lg flex flex-row sticky top-0 z-50 items-center place-content-around pt-2 pb-2">
            <a className = "flex flex-row items-center" href = "/Home">
                <img src={logo} alt="Logo" width="250" height="200"/>
            </a>
            <nav className = "flex flex-row justify-center items-center font-thin">
                <a href = "/Home">
                <NavButton label = "Home"/>
                </a>

                <a className = "dropdown dropdown-hover" href = "/AboutUs">
                <NavButton tabIndex = "0" label = "About"/>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-MMHCCream text-MMHCGreen rounded-box w-52">
                        <li><a href = "/AboutUs">About Us</a></li>
                        <li><a href = "/ClubRules">Club Rules</a></li>
                    </ul>
                </a>

                <a className = "dropdown dropdown-hover" href = "/History">
                <NavButton tabIndex = "0" label = "History"/>
                    <ul tabIndex="0" class="dropdown-content z-[1] menu p-2 shadow bg-MMHCCream text-MMHCGreen rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </a>

                <a href = "">
                <NavButton label = "Forum"/>
                </a>

                <a href = "/SigninSignup">
                <NavButton label = "Account"/>
                </a>
            </nav>
            <div className = "flex flex-col">
                { perms >= 3 ? 
                <>
                <button className ="btn btn-outline btn-info">Admin View</button>
                </>
                : 
                <div className = "nothing" ></div>
                }

                { perms >= 2 ? 
                <>
                <a href = "/MemberPage">
                    <button className ="btn btn-outline btn-warning">Members</button>
                </a>
                <a href = "/EmergencyContacts">
                <button className ="btn btn-outline btn-error">Emergency</button>
                </a>
                </>
                :
                <div className = "nothin"> </div> 
                }
            </div>
        </header>
    )
}

export default Header