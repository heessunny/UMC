import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TV from'./pages/TV'; 
import Movies from'./pages/Movies'; 
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";


function App() {
    
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header/>
      <div className="App">
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Celebirity" element={<Celebirity />} />
          <Route path="/*" element={<NotFound/>} />
         
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;