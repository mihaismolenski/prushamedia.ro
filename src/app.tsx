import {BrowserRouter, Route, Routes} from "react-router-dom";

import "./app.scss";
import {Footer, Header} from "./components";
import {Home, Portofolio, Stories} from "./features";

export const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portofolio" element={<Portofolio/>}/>
                    <Route path="/stories" element={<Stories/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
