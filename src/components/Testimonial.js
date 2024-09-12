import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";
import avatar4 from "../assets/images/avatar4.png";
import avatar5 from "../assets/images/avatar5.png";
import transparan from "../assets/images/transparan.png";
import quote from "../assets/images/quote.png";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

// Daftar quote yang akan ditampilkan
const quotes = [
  {
    text: "Logistik Logee memudahkan pengiriman barang besar dengan tarif yang kompetitif. Kami sangat puas dengan kecepatan dan keamanan layanan mereka.",
    author: "Umar",
    location: "Bandung",
  },
  {
    text: "Sejak bermitra dengan Logee, proses logistik kami menjadi jauh lebih sederhana dan efisien. Mereka benar-benar memahami kebutuhan bisnis kami.",
    author: "Siti",
    location: "Jakarta",
  },
  {
    text: "Layanan Logee luar biasa! Dengan tracking real-time dan uh customer service yang responsif, kami selalu yakin bahwa barang kami akan sampai tepat waktu.",
    author: "Ali",
    location: "Surabaya",
  },
  {
    text: "Pelayanan Logee sangat profesional! Pengiriman tepat waktu dan barang sampai dalam kondisi sempurna. Kami tidak pernah kecewa sejak menggunakan jasa mereka.",
    author: "Nur",
    location: "Medan",
  },
  {
    text: "Tim Logee selalu memberikan solusi logistik yang efisien dan ramah anggaran. Pengalaman kami sangat positif, dan kami merasa seperti mitra bisnis yang benar-benar diperhatikan.",
    author: "Budi",
    location: "Yogyakarta",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Awalnya avatar pertama berada di posisi pertama

  // Untuk mengatur perubahan otomatis avatar setiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % avatars.length);
    }, 4000); // Ubah setiap 2 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, []);

  // Fungsi untuk mengatur posisi avatar berdasarkan indeksnya
  const getAvatarClass = (index) => {
    const relativeIndex = (index - activeIndex + avatars.length) % avatars.length;
    if (relativeIndex === 0) return "avatar-left"; // Posisi pertama
    if (relativeIndex === 1) return "avatar-left-mid"; // Posisi kedua
    if (relativeIndex === 2) return "avatar-center"; // Posisi ketiga (highlighted)
    if (relativeIndex === 3) return "avatar-right-mid"; // Posisi keempat
    if (relativeIndex === 4) return "avatar-right"; // Posisi kelima
    return "";
  };

  return (
    <div className="testimonial-section" style={{ backgroundImage: `url(${transparan})` }}>
      <div className="testimonial-content">
        <img src={quote} alt="Quote" className="quote-image" />
        <blockquote>
          <p>{quotes[activeIndex].text}</p> {/* Menampilkan quote sesuai avatar yang di-highlight */}
        </blockquote>
        <hr className="quote-divider" />
        <div className="user-details">
          <div className="avatar-list">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className={`avatar-item ${getAvatarClass(index)}`} // Menentukan posisi avatar
              />
            ))}
          </div>
          <div className="user-info">
            <h4>{quotes[activeIndex].author}</h4> {/* Menampilkan nama sesuai avatar */}
            <p>{quotes[activeIndex].location}</p> {/* Menampilkan lokasi sesuai avatar */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
