import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";
import store from "./reduxStore/index";
import SignIn from "./components/pages/SignIn";
import HomePage from "./components/pages/HomePage";
import './App.css';
function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route/>
          </Routes>
        </BrowserRouter> 
      </div>
    </ReduxProvider>
  );
};

export default App;
