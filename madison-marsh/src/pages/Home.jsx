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
      <h1 className = "flex justify-center p-4 text-4xl bg-base-100 text-MMHCBrown">Frequently Asked Questions</h1>
      <Faq/>
      <Footer/>
    </home>
  );
}

export default Home;