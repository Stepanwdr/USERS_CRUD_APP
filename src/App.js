import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Dashboard from "./pages/Dashboard";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Dashboard/>}/>
             </Routes>
        </BrowserRouter>
);
};

export default App;