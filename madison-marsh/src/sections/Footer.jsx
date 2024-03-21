import logo from '../assets/images/MMHC-Dark-Logo.png';

const Footer = () => {
  return (
    <footer className = "bg-MMHCCream">
        <div className = "flex flex-col p-8 pt-2 items-center">
            <img src={logo} alt="Logo" width="150" height="100"/>
            <div className = " text-center text-MMHCBrown text-xl">
                <h1>Madison Marsh Hunting Club</h1>
                <h1>Insert slogan here</h1>
                <h1>Copyright © 2024 - All right reserved</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer