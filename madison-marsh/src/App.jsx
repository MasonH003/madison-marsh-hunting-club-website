import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, History, ClubRules, AboutUs } from './pages';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;