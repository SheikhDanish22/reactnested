import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import AboutCompany from "./AboutCompany";
import AboutService from "./AboutService";
import AboutProduct from "./AboutProduct";
import Contact from "./Contact";
import Nofound from "./Nofound";

const App=()=>{
    return(
        <>
        <BrowserRouter>
         <Routes>
             <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path="Home" element={<Home/>}/>
             <Route path="About" element={<About/>}>
             <Route path="AboutCompany" element={<AboutCompany/>}/>
             <Route path="AboutService" element={<AboutService/>}/>
             <Route path="AboutProduct" element={<AboutProduct/>}/>
             </Route>
             <Route path="Contact" element={<Contact/>}/>
             <Route path="*" element={<Nofound/>}/>
   
        </Route>
         
         </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}
export default App;