import React, { useContext } from "react";
import "./Home.css";
import { EmailContext } from "./Context";
import { json, useNavigate } from "react-router-dom";
import { LoginPage } from "./LoginPage";

const Home = () => {
  const [email, setEmail] = useContext(EmailContext);
  const auth = localStorage.getItem("auth");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const ourProducts = () => {
    navigate("../products");
  };

  if (auth) {
    return (
      <form className="homePage">
        <div className="upper">
          <div className="para">
            <text className="titlePara">Support + FAQs</text>
            <p>
              Find quick answers to your questions and get the most out of Font
              Awesome with our step-by-step docs and troubleshooting tips.
            </p>
          </div>
          <img className="question" src="/question.png"></img>
        </div>
        <div className="middle">
          <div className="para">
            <text className="titlePara">How can we help?</text>
            <p>
              We've gathered some of our most frequently asked questions and
              links to help answer any questions you may have below.
            </p>
          </div>
          <div onClick={ourProducts} className="button">
            <div>Our products</div>
            <img src="/book.png" />
          </div>
          <div className="button">
            <div>Pro Support</div>
            <img src="/support.png" />
          </div>
        </div>
        <div className="info">
          <div className="infoColumn">
            <text className="titlePara">My info</text>
            <text className="infoDiv">Email : {email}</text>
            <div onClick={logout} className="logout">
              Logout
            </div>
          </div>
          <img className="infoImg" src="/info.png" />
        </div>
      </form>
    );
  } else {
    navigate("/");
    return <LoginPage />;
  }
};

export default Home;
