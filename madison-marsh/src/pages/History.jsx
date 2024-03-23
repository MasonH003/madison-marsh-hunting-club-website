import { Header, Footer } from '../sections';
import { TextSquare } from '../components';
import sika from '../assets/images/sika.jpg';
import group from '../assets/images/hunting-group.jpg';
import dorcester from '../assets/images/dorcester.jpg';

function History() {
  return (
    <hist>
      <Header/>
      <div className = "text-4xl font-thin text-MMHCCream bg-MMHCBlack flex flex-row justify-center p-4">
        Maryland's Rich History
      </div>
      <div class="join left-0">
        <img
            src = {sika}
            alt="History of the Sika Deer"
            className = "w-full h-96 object-cover join-item" 
          />

        <TextSquare 
            width={'50'} 
            height={'96'} 
            color={'MMHCGreen'} 
            textColor={'MMHCCream'} 
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} 
            title={'Sika Deer'}/>
      </div>
      <Footer/>
    </hist>
  );
}

export default History;