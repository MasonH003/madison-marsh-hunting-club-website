import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, History, ClubRules, AboutUs, SigninSignup, AccountOverview, MemberPage, EmergencyContacts } from './pages';

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
          <Route path = "/MemberPage" element = {<MemberPage/>}/>
          <Route path = "/EmergencyContacts" element = {<EmergencyContacts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;