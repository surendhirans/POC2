import {Menus} from "./Navi";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Daily, News, Surya } from "./MyComps";
 import {BrowserRouter,Routes,Route} from "react-router-dom"
import { NewAccount } from "./SignUp";
import { Login } from "./Login";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Menus />
    <Routes>
    <Route path="/" exact element={<Login />} />
      <Route path="/sign" exact element={<NewAccount />} />
      <Route path="/second/:sam" exact element={<News />} />
      <Route path="/third/:katt" exact element={<Daily />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;