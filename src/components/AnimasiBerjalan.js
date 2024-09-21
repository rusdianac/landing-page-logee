import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ikon1 from "../assets/images/ikon1.png";
import ikon2 from "../assets/images/ikon2.png";
import ikon3 from "../assets/images/ikon3.png";
import ikon4 from "../assets/images/ikon4.png";
import ikon5 from "../assets/images/ikon5.png";
import ikon6 from "../assets/images/ikon6.png";
import ikon7 from "../assets/images/ikon7.png";
import ikon8 from "../assets/images/ikon8.png";
import ikon9 from "../assets/images/ikon9.png";
import ikon10 from "../assets/images/ikon10.png";
import ikon11 from "../assets/images/ikon11.png";
import "./AnimasiBerjalan.css";

const AnimasiBerjalan = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6, // Menampilkan 5 logo sekaligus
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="animasi-section">
      <h2>Logee dipercaya oleh banyak mitra untuk menangani rantai pasok mereka</h2>
      <div className="logo-carousel">
        <Slider {...settings}>
          <div>
            <img src={ikon1} alt="VTP Logo" />
          </div>
          <div>
            <img src={ikon2} alt="JICT Logo" />
          </div>
          <div>
            <img src={ikon3} alt="Pupuk Logo" />
          </div>
          <div>
            <img src={ikon4} alt="NLE Logo" />
          </div>
          <div>
            <img src={ikon5} alt="PTPN Logo" />
          </div>
          <div>
            <img src={ikon6} alt="VTP Logo" />
          </div>
          <div>
            <img src={ikon7} alt="JICT Logo" />
          </div>
          <div>
            <img src={ikon8} alt="Pupuk Logo" />
          </div>
          <div>
            <img src={ikon9} alt="NLE Logo" />
          </div>
          <div>
            <img src={ikon10} alt="PTPN Logo" />
          </div>
          <div>
            <img src={ikon11} alt="PTPN Logo" />
          </div>
        </Slider>
        <button className="cta-button" onClick={() => window.location.href = 'https://logee.id/news?hl=id'}>Telusuri Kisah Mereka</button>
      </div>
    </div>
  );
};

export default AnimasiBerjalan;
