/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="main-page">
          <div className="container">
            <div className="image-banner">
              <img src="/img/logo@text.svg" className="logo-text" alt="" />
              <div className="liamas-content">
                <div className="img-box">
                  <img src="/img/liamas-5.png" alt="" />
                </div>
                <div className="img-box">
                  <img src="/img/liamas-4.png" alt="" />
                </div>
                <div className="img-box">
                  <img src="/img/liamas-3.png" alt="" />
                </div>
                <div className="img-box">
                  <img src="/img/liamas-2.png" alt="" />
                </div>
                <div className="img-box">
                  <img src="/img/liamas-1.png" alt="" />
                </div>
                <span className="hi-there">
                  <img src="/img/hi.svg" alt="" />
                </span>
              </div>
              <p className="banner-title">Premium NFT Brand </p>
            </div>
            <div className="home-content">
              <h2>heading</h2>
              <p>
                Funky LIamas is a premium NFT Brand of 10,000 unique Bulls.
                It&#39;s the notion born on Solana with the intention to blur
                the line between Web 3 and Real Life. This is what “BullPreme
                City” aims to bring through its innovative solutions, special
                utilities and rousing movements.
              </p>
            </div>
          </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
