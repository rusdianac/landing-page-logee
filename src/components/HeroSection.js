import React from "react";
import "./HeroSection.css"; // import file CSS untuk styling
import playbut from "../assets/images/playbut.png";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="transformasi">Transformasi Digital Terdepan </span>
          <br /> Bisnis Logistik Anda
        </h1>
        <p>
          Logee hadir menghubungkan seluruh <span className="pemain">pemain logistik</span>
          <span> dalam </span>
          <span className="ekosistem">
            satu <br /> ekosistem
          </span>
          , memberikan solusi nyata untuk keuntungan bisnis Anda.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-trial" onClick={() => window.location.href = 'https://logee.id/products?hl=id'}>Coba 7 Hari Gratis!</button>
          <button className="btn btn-video" onClick={() => window.open('https://www.youtube.com/watch?v=O1AVm-FEV8o&t=2s', '_blank')}>
            <img src={playbut} alt="icon" style={{ width: "15px", marginRight: "10px" }} />
            Tonton Video
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
