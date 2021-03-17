import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {defaultHero} from "./utils/constants";
import {SWContext} from "./utils/context";
import {useState} from "react";

const App = () => {
const [hero, setHero] = useState<string>(defaultHero);

        return (
            <SWContext.Provider value={{
                hero, changeHero: setHero
            }}>
                <div className='container-fluid'>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </SWContext.Provider>
        );
    }


export default App;
