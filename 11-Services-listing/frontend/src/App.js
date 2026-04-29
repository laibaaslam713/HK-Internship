import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;