import { Menus } from "./Navi";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Agaram, Thenali, Vikatan } from "./MyComps";
import { NewAccount } from "./SignUp";
import { Login } from "./Login";
import { Home } from "./Home";
import { Transactions, Transactions01 } from "./Transcations";
import { ProUp } from "./ProUp";

const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Menus/>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/sign" exact element={<NewAccount/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/showt" exact element={<Transactions01/>}/>
          <Route path="/update" exact element={<ProUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;