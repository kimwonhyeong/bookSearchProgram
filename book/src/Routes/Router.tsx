import React from 'react';
import Home from "./Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchTitle from './SearchTitle';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/search" element={<SearchTitle/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
