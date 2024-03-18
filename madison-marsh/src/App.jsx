import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "/Home" element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;