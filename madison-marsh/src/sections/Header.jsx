{/* import { Navbar } from 'flowbite-react'; */}
import { NavButton } from '../components';
import logo from '../assets/images/MMHC-Logo-Two.png';

const Header = () => {
    
    
    
    return (
        <header className = "flex flex-row sticky top-0 z-50 items-center place-content-around pt-4 pb-4 bg-MMHCBrown">
            <a className = "flex flex-row items-center" href = "/Home">
                <img src={logo} alt="Logo" width="250" height="200"/>
            </a>
            <nav className = "flex flex-row justify-center items-center font-thin">
                <a href = "/Home">
                <NavButton label = "Home"/>
                </a>

                <a className = "dropdown dropdown-hover" href = "/AboutUs">
                <NavButton tabindex = "0" label = "About"/>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-MMHCCream text-MMHCGreen rounded-box w-52">
                        <li><a href = "/AboutUs">About Us</a></li>
                        <li><a href = "/ClubRules">Club Rules</a></li>
                    </ul>
                </a>

                <a className = "dropdown dropdown-hover" href = "/History">
                <NavButton tabindex = "0" label = "History"/>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-MMHCCream text-MMHCGreen rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </a>

                <a href = "">
                <NavButton label = "Forum"/>
                </a>

                <a href = "">
                <NavButton label = "Account"/>
                </a>
            </nav>
            <div className = "flex flex-col">
                <button class="btn btn-outline btn-info">Admin View</button>
                <button class="btn btn-outline btn-warning">Members</button>
                <button class="btn btn-outline btn-error">Emergency</button>
            </div>
        </header>
    )
}

export default Header