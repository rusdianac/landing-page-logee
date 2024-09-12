import React, { useState, useEffect } from "react";
import gambar1 from "../assets/images/gambar1.png"; // Adjust the path to your images
import gambar2 from "../assets/images/gambar2.png";
import gambar3 from "../assets/images/gambar3.png";
import gambar4 from "../assets/images/gambar4.png";
import "./ImageSlider.css";

function ImageSlider() {
  const images = [gambar1, gambar2, gambar3, gambar4]; // Add paths to your local images here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Function to change the image when a text section is clicked
  const handleTextClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="stats-section">
      <div className="image-container">
        {/* Display the current image */}
        <img src={images[currentImageIndex]} alt="Warehouse" className="main-image" />
      </div>

      <div className="text-section">
        <h3>Komitmen Kami untuk Solusi Logistik Terbaik</h3>
        <h2>Kenapa Harus LOGEE?</h2>

        {/* Text Section 1 */}
        <div className={`statitem ${currentImageIndex === 0 ? "highlighted" : ""}`} onClick={() => handleTextClick(0)}>
          <h3>Terbuka</h3>
          <p>Memudahkan integrasi dengan berbagai platform, membuka peluang baru untuk kolaborasi dan ekspansi.</p>
        </div>

        {/* Text Section 2 */}
        <div className={`statitem ${currentImageIndex === 1 ? "highlighted" : ""}`} onClick={() => handleTextClick(1)}>
          <h3>Aman</h3>
          <p>Data dilindungi oleh sistem keamanan canggih dari Telkom, memastikan privasi dan keamanan informasi bisnis Anda.</p>
        </div>

        {/* Text Section 3 */}
        <div className={`statitem ${currentImageIndex === 2 ? "highlighted" : ""}`} onClick={() => handleTextClick(2)}>
          <h3>Cerdas</h3>
          <p>Didukung oleh kecerdasan buatan (AI), LOGEE mengoptimalkan proses logistik untuk hasil yang lebih efisien dan strategis.</p>
        </div>

        {/* Text Section 4 */}
        <div className={`statitem ${currentImageIndex === 3 ? "highlighted" : ""}`} onClick={() => handleTextClick(3)}>
          <h3>Netral</h3>
          <p>Melayani semua pelaku logistik secara adil dan transparan.</p>
        </div>
      </div>
    </section>
  );
}
export default ImageSlider;
