import "./App.css";
import { LoginPage } from "./components/LoginPage";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { EmailContext } from "./components/Context";
import { useState, useEffect, useMemo } from "react";
import Products from "./components/Products";

function App() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(email));
  }, [email]);
  return (
    <EmailContext.Provider value={[email, setEmail]}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </EmailContext.Provider>
  );
}

export default App;
