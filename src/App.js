import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/"
          element=
          {<>
          <div className="app_page">
            <Sidebar/>
            <RecommendedVideos/>
          </div>
          </>}/>
          <Route path="/search/:searchTerm" 
          element=
          {<>
            <div className="app_page">
            <Sidebar/>
            <SearchPage/>
          </div>
          </>}/>
        </Routes>
     </BrowserRouter>

      
    </div>
  );
}

export default App;
