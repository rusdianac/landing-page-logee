import React, { useRef, useEffect } from "react";
import "./AnimatedSection.css"; // ini untuk CSS animasi

const AnimatedSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__visible");
          } else {
            entry.target.classList.remove("animate__visible");
          }
        });
      },
      {
        threshold: 0.1, // Elemen akan mulai muncul ketika 10% dari elemen terlihat
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      const elements = currentSection.querySelectorAll(".produk");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentSection) {
        const elements = currentSection.querySelectorAll(".produk");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="layanan">
      <div ref={sectionRef} className="content">
        <div className="container">
          <div className="service">
            <h3>Jaringan Logistik Terintegrasi</h3>
            <h2>Tumbuh Bersama Logee</h2>
            <p>LOGEE telah menjadi bagian dari aktor logistik yang tumbuh dan berkembang dalam satu ekosistem. Kembangkan bisnis dan usaha logistik Anda bersama ribuan armada dan mitra outlet ekosistem LOGEE.</p>
            <button className="cta-button">Tentang Kami</button>
          </div>
          <div className="produks">
            <div className="produk animate__hiddenLeft">
              <h1>450</h1> <p>Trucker</p>
            </div>
            <div className="produk animate__hiddenRight">
              <h1>51.200</h1> <p>Fleet</p>
            </div>
            <div className="produk animate__hiddenLeft">
              <h1>25.500</h1> <p>Outlet</p>
            </div>
            <div className="produk animate__hiddenRight">
              <h1>500</h1> <p>Distributor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSection;
