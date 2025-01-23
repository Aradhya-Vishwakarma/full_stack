import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
// import About from './components/About'
import Header from "./components/Header";
import Backendtest from "./components/Backendtest";

export default function App() {
  return ( 
    <>
      <div className="bg-slate-100 h-screen">
        <BrowserRouter>
          {/* <Home/> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Backendtest" element={<Backendtest />}></Route>
            {/* <Route path='/about' element= {< Home/>} ></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
