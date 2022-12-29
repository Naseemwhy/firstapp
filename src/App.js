import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Header from "./components/header/header";
import Cards from "./components/cards/cards";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
