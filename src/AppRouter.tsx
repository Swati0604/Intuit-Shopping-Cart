import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Page404 from "./views/Page404";
import Home from "./views/Home";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
