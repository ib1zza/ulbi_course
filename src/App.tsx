import React, {Suspense} from 'react';
import Counter from "./components/Counter";
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import AboutPageAsync from "./pages/AboutPage/AboutPage.async";
import MainPageAsync from "./pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div>
            <Link to={"/about"}>About</Link>
            <Link to={"/"}>Main</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                    <Route path="/" element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    );
};

export default App;