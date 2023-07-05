import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./app.scss";
import { Footer, Header } from "./components";
import { Home } from "./features";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
