import { Header, Hero, ThreeCards, Footer, Faq, News } from '../sections';

function Home() {
  return (
    <home>
      <Header/>
      <Hero/>
      <div className = "text-xl font-thin text-MMHCCream bg-MMHCBrown flex flex-row justify-center p-4">
        Scroll for more info
      </div>
      <div className = "bg-accent text-6xl flex justify-center font-thin p-3">Welcome to the Marsh</div>
      <ThreeCards/>
      <News/>
      <Faq/>
      <Footer/>
    </home>
  );
}

export default Home;