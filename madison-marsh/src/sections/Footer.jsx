import logo from '../assets/images/MMHC-Dark-Logo.png';

const Footer = () => {
  return (
    <footer className = "bg-neutral">
        <div className = "flex flex-col p-8 pt-2 items-center">
            <img src={logo} alt="Logo" width="150" height="100"/>
            <div className = " text-center text-base-100 text-xl">
                <h1>Madison Marsh Hunting Club</h1>
                <h1>"Stewards of the Land, Rooted in Tradition"</h1>
                <h1>Copyright © 2024 - All right reserved</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer