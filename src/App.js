import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Provider template={AlertTemplate} {...options}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
