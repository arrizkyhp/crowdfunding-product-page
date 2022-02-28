import { DataProvider } from "context/data/DataContext";
import { NavbarProvider } from "context/navbar/NavbarContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/style.css"
import Navbar from "./layout/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <NavbarProvider>
      <DataProvider>
        <Router>
          <div className="flex flex-col justify-between font-commisioner">
            <div className="flex flex-col relative items-center bg-[url('assets/images/image-hero-mobile.jpg')] md:bg-[url('assets/images/image-hero-desktop.jpg')]  max-h-[19.5rem] bg-no-repeat md:h-96 w-full bg-contain md:bg-cover">
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </Router>
      </DataProvider>
    </NavbarProvider>
  );
}

export default App;
