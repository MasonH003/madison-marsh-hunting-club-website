{/* import { Navbar } from 'flowbite-react'; */}
import { NavButton } from '../components';

const Header = () => {
    return (
        <header className = "flex flex-row items-center place-content-around pt-4 pb-4 static bg-MMHCBrown">
            <a href = "/Home">
                <div className = "flex flex-col font-semibold text-2xl text-MMHCCream">
                    <h1>Madison Marsh</h1>
                    <h1>Hunting Club</h1>
                </div>
            </a>
            <nav className = "flex flex-row justify-center items-center font-thin">
                <a href = "/Home">
                <NavButton label = "Home"/>
                </a>
                <a className = "dropdown dropdown-hover" href = "">
                <NavButton tabindex = "0" label = "About"/>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-MMHCCream text-MMHCGreen rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </a>
                <a className = "dropdown dropdown-hover" href = "">
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