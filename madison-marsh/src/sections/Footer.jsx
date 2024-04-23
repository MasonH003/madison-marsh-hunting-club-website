import logo from '../assets/images/MMHC-Dark-Logo.png';

const Footer = () => {
  return (
    <footer className = "bg-neutral">
        <div className = "flex flex-col p-8 pt-2 items-center">
            <img src={logo} alt="Logo" width="150" height="100"/>
            <div className = " text-center text-base-100 text-2xl">
                <h1>Madison Marsh Hunting Club</h1>
                <h1>"Stewards of the Land, Rooted in Tradition"</h1>
                <h1>Copyright © 2024 - All right reserved</h1>
            </div>
        </div>
        <div className = "flex flex-col items-center bg-primary pb-10 pt-10 text-xl">
          <h1>Insert Phone number</h1>
          <h1>Contact Us</h1>
          <h1>Privacy Policy</h1>
          <h1>Site Map</h1>
        </div>
    </footer>
  )
}

export default Footer