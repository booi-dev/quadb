import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Drama from "./components/drama/Drama";
import DramaView from "./components/drama/DramaView";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/drama/:dramaId" element={<DramaView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
