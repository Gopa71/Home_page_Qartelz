
import React from "react";
import "./App.css";
import Home from "./Components/AllComponents/Home";
import ThemeContext from "./Components/ContextWrapper/ThemeContext";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Opstmt from "./Pages/Opstmt";
import assetliab from "./Pages/assetliab";
import ocaocl from "./Pages/ocaocl";
import ratio from "./Pages/ratio";
import wctlassmt from "./Pages/wctlassmt";
import ff from "./Pages/ff";
import kfi from "./Pages/kfi";


function App() {
  return (
    <div>
      <ThemeContext>
       <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/opstmt" Component={Opstmt}/>
        <Route path="/assetliab" Component={assetliab}/>
        <Route path="/ocaocl" Component={ocaocl } />
        <Route path="/ratio" Component={ratio }/>
        <Route path="/wctlassmt" Component={wctlassmt} />
        <Route path="/ff" Component={ff} />
        <Route path="/kfi" Component={kfi} />

      </Routes>
      </BrowserRouter>
    </ThemeContext>

    </div>
  );
}

export default App;
