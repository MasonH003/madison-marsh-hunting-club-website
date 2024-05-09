import { Header, Hero, ThreeCards, Footer, Faq, News } from '../sections';
import { getPerms } from '../components/PermissionGetter.js';
import React, { useEffect, useState } from 'react';

function Home() {
  

  return (
    <home>
      <Header/>
      <Hero/>
      <div className = "text-xl font-thin text-MMHCCream bg-MMHCBrown flex flex-row justify-center p-4">
        Scroll for more info
      </div>
      <ThreeCards className = ""/>
      <News/>
      <h1 className = "flex justify-center p-4 text-4xl bg-base-100 text-MMHCBrown">Frequently Asked Questions</h1>
      <Faq/>
      <Footer/>
    </home>
  );
}

export default Home;