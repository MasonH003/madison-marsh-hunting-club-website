import { Header, Hero, ThreeCards, Footer } from '../sections';

function Home() {
  return (
    <home>
      <Header/>
      <Hero/>
      <div className = "text-xl font-thin text-MMHCCream bg-MMHCBrown flex flex-row justify-center p-4">
        Scroll for more info
      </div>
      <ThreeCards/>
      <Footer/>
    </home>
  );
}

export default Home;