import { BookmarkProvider } from "context/bookmark/BookmarkContext";
import { DataProvider } from "context/data/DataContext";
import { ModalProvider } from "context/modal/ModalContext";
import { NavbarProvider } from "context/navbar/NavbarContext";
import { BrowserRouter} from "react-router-dom";
import "./assets/css/style.css"
import Navbar from "./layout/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
      <NavbarProvider>
        <DataProvider>
          <ModalProvider>
            <BookmarkProvider>
              <BrowserRouter>
                  <div className="flex flex-col justify-between font-commisioner">
                    <div className="flex flex-col relative items-center bg-[url('assets/images/image-hero-mobile.jpg')] md:bg-[url('assets/images/image-hero-desktop.jpg')] bg-grey-custom-100  max-h-[25rem] bg-no-repeat md:h-96 w-full bg-cover">
                      <Navbar />
                        <Home />
                    </div>
                  </div>
                </BrowserRouter>
            </BookmarkProvider>
          </ModalProvider>
        </DataProvider>
      </NavbarProvider>
  );
}

export default App;
