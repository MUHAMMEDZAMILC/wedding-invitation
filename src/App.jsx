import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TemplateView from "./pages/TemplateView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template/:id" element={<TemplateView />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
