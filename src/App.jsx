import { BrowserRouter, Route, Routes } from "react-router";
import { NoPage } from "./pages/NoPage";
import { Home } from "./pages/Home";
import { Fruits } from "./pages/Fruits";
import { FruitApp } from "./pages/FruitApp";
import { Navigation } from "./pages/Navigation";
import { Footer } from "./pages/Footer";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <div className="main">
          <Routes>
            <Route index element={<Home />} />
            <Route path="fruits" element={<Fruits />} />
            <Route path="fruit-app" element={<FruitApp />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
