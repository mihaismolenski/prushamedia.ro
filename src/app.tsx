import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./app.scss";
import { Footer, Header, ScrollToTop } from "./components";
import { Home, Portofolio, Stories } from "./features";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:storyId" element={<Stories />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
