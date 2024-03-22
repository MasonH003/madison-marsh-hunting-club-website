import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, History, ClubRules, AboutUs, SigninSignup, AccountOverview } from './pages';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "/Home" element = {<Home/>}/>
          <Route path = "/History" element = {<History/>}/>
          <Route path = "/AboutUs" element = {<AboutUs/>}/>
          <Route path = "/ClubRules" element = {<ClubRules/>}/>
          <Route path = "/SigninSignup" element = {<SigninSignup/>}/>
          <Route path = "/AccountOverview" element = {<AccountOverview/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;