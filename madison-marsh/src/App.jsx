import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
{/**

import { useEffect, useState } from "react";
import { supabase } from './Supabase';

export default function App() {
  const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("countries").select();
      setCountries(data);
    }
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  )
}
*/}