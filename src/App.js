import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>

                <Routes>


                    <Route exact path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="*" element={<Page404 />}/>

                </Routes>

            </div>



        );
    }
}

export default App;
