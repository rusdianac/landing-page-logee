import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css"; // Untuk styling tambahan jika diperlukan
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";

const SliderComponent = () => {
  // Konfigurasi untuk slider React Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.06, // Tampilkan 3 slide sekaligus
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Tombol panah ke kanan
    prevArrow: <PrevArrow />, // Tombol panah ke kiri
  };

  return (
    <div className="slider-container">
      <h2> Layanan Terbaik untuk Kebutuhan Logistik Anda </h2>
      <h1> Solusi Logistik Terpadu LOGEE </h1>
      <Slider {...settings}>
        <div className="slide">
          <img src={slide1} alt="Logistics Delivery Management" />
          <div className="caption">
            <h3>Sales Monitoring & Control</h3>
            <p>Platfom digital yang digunakan untuk automatisasi seluruh fungsi-fungsi terkait proses penjualan (sales stage) dan mengatur tenaga penjual (sales force management).</p>
            <button className="cta-button">Pelajari Lebih Lanjut</button>
          </div>
        </div>
        <div className="slide">
          <img src={slide4} alt="Transportation Management" />
          <div className="caption">
            <h3>Transportation Management</h3>
            <p>One stop solution digital platform untuk menghubungkan pemilik barang dan pemilik armada dalam proses pengiriman barang, baik secara domestik</p>
            <button className="cta-button">Pelajari Lebih Lanjut</button>
          </div>
        </div>
        <div className="slide">
          <img src={slide2} alt="Sales-Order Fulfillment Management" />
          <div className="caption">
            <h3>Fulfillment Center Service</h3>
            <p>Menawarkan layanan sistem pemesanan terpadu dan manajemen inventaris, serta integrated dashboard yang menyajikan informasi lengkap berbasis data..</p>
            <button className="cta-button">Pelajari Lebih Lanjut</button>
          </div>
        </div>
        <div className="slide">
          <img src={slide5} alt="Transportation Management" />
          <div className="caption">
            <h3>Sales-Order Fulfillment Management</h3>
            <p>Tingkatkan bisnis Anda dengan platform digital terintegrasi dari LOGEE. Pantau aktivitas penjualan, pemenuhan pesanan, dan operasional gudang dengan mudah.</p>
            <button className="cta-button">Pelajari Lebih Lanjut</button>
          </div>
        </div>
        <div className="slide">
          <img src={slide3} alt="Transportation Management" />
          <div className="caption">
            <h3>Logistics Delivery Management</h3>
            <p>Optimalkan penjualan, pemenuhan pesanan dan penyimpanan, serta manajemen jadwal pengiriman dengan platform digital komprehensif dari LOGEE.</p>
            <button className="cta-button">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

// Komponen tombol panah kanan
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      &#10095;
    </div>
  );
};

// Komponen tombol panah kiri
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      &#10094;
    </div>
  );
};

export default SliderComponent;
