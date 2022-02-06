import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/style.css"
import Navbar from "./components/layout/Navbar";
import { Home } from "./components/pages/Home";

function App() {
  return (
   <Router>
     <div className="flex flex-col justify-between font-commisioner">
       <div className="flex flex-col relative items-center bg-[url('assets/images/image-hero-desktop.jpg')] h-96 w-full bg-cover">
        <Navbar />
         <div className="bg-gradient-to-b from-black w-full h-20 absolute"></div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
       </div>
     </div>
   </Router>
  );
}

export default App;
