import { Header, Footer } from '../sections';
import { TextSquare, HistoryCard } from '../components';
import sika from '../assets/images/sika.jpg';
import biglizz from '../assets/images/biglizz.jpg';
import dorcester from '../assets/images/dorcester.jpg';

function History() {
    
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    return (
    <hist>
      <Header/>
      <div className = "text-6xl font-thin text-MMHCCream bg-MMHCBlack flex flex-row justify-center p-4 pb-7 pt-5">
        Maryland's Rich History
      </div>
      <div class="join rounded-none left-0">
        <img
            src = {sika}
            alt="History of the Sika Deer"
            className = "w-4/12 h-96 object-cover join-item" 
          />

        <TextSquare 
            width={'50'} 
            height={'96'} 
            color={'MMHCGreen'} 
            textColor={'MMHCCream'} 
            text={lorem} 
            title={'Sika Deer'}
            leftright={'left'}/>
      </div>

      <div class="join rounded-none left-0">
        <TextSquare 
            width={'50'} 
            height={'96'} 
            color={'MMHCBrown'} 
            textColor={'MMHCCream'} 
            text={lorem} 
            title={'Dorcester County'}
            leftright={'right'}/>
        <img
            src = {dorcester}
            alt="History of Dorcester County"
            className = {`w-4/12 h-96 object-cover join-item`} 
          />
      </div>
    
      <div class="join rounded-none left-0">
        <img
            src = {biglizz}
            alt="History of Dorchester Ghost Stories: Big Lizz"
            className = "w-4/12 h-96 object-cover join-item" 
          />

        <TextSquare 
            width={'50'} 
            height={'96'} 
            color={'MMHCGreen'} 
            textColor={'MMHCCream'} 
            text={lorem} 
            title={'Dorchester Ghost Stories: Big Lizz'}
            leftright={'left'}/>
      </div>

      <Footer/>
    </hist>
  );
}

/*
<HistoryCard
            imgleft={true}
            src={dorcester}
            altText={'History of Dorcester County'}
            width={'50'}
            height={'96'}
            color={'MMHCBrown'}
            textColor={'MMHCCream'}
            text={lorem}
            title={'Dorcester County'}
        />
*/

export default History;