import React, {Component} from "react";
import {About, Contact, Experience, Footer, Header, NavBar, Portfolio} from "./components";

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <NavBar/>
                <About/>
                <Experience/>
                <Portfolio/>
                <Contact/>
                <Footer/>
            </>
        );
    }
}

export default App;