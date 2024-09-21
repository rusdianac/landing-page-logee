import React, { useState } from "react";
import "./Footer.css"; // Import file CSS untuk styling

// Import ikon lokal
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import lokasi from "../assets/images/lokasi.png";
import logoikon from "../assets/images/logoikon.png";
import garis from "../assets/images/garis.png";

const Footer = () => {
  const [emailInput, setEmailInput] = useState(""); // State for email input
  const [message, setMessage] = useState(""); // State for response message

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Send POST request to backend
    try {
      const response = await fetch("http://localhost:5001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput }),
      });

      const data = await response.json();
      if (response.status === 200) {
        setMessage("Thank you for subscribing!");
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error sending subscription request.");
    }
  };

  return (
    <footer className="footer-container">
      <div className="logoikon">
        <img src={logoikon} alt="Logo" />
      </div>
      <div className="garis">
        <img src={garis} alt="Logo" />
      </div>

      <div className="footer-allsection">
        <div className="footer-sosmed">
          <ul>
            <li className="logo-container">
              <a href="https://www.instagram.com/logee.id/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li className="logo-container">
              <a href="https://www.facebook.com/people/Logeeid/100084864591594/" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
              
            </li>
            <li className="logo-container">
            <a href="https://twitter.com/logee_id" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
            </li>
            <li className="logo-container">
            <a href="https://id.linkedin.com/company/logee-indonesia" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            </li>
          </ul>
        </div>

        <div className="footer-seperator">
          <div className="footer-kontak">
            <h3>Kontak</h3>
            <ul>
              <li>
                <img src={phone} alt="phone" />
                +62 811 1255 250
              </li>
              <li>
                <img src={email} alt="email" />
                info@logee.id
              </li>
              <li>
                <img src={lokasi} alt="lokasi" />
                Gedung Telkom DBT, Jln. Prof. Dr. Soepomo no. 139, Jakarta Selatan, 12810 - Indonesia
              </li>
            </ul>
          </div>

          <div className="footer-tautan">
            <h3>Tautan</h3>
            <ul>
              <li>
                <a href="/leap">LEAP</a>
              </li>
              <li>
                <a href="/artikel">Artikel</a>
              </li>
              <li>
                <a href="/hubungi">Hubungi Kami</a>
              </li>
              <li>
                <a href="/syarat">Syarat & Ketentuan</a>
              </li>
              <li>
                <a href="/privacy">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-solusi">
            <h3>Solusi</h3>
            <ul>
              <li>
                <a href="/transportasi">Transportasi</a>
              </li>
              <li>
                <a href="/distribusi">Distribusi</a>
              </li>
              <li>
                <a href="/visibility">Visibility</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-newsletter">
        <div className="kotak-newsletter">
          <h3>Berlangganan Buletin Kami</h3>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)} // Update email input state
              required
            />
            <button type="submit">Berlangganan</button>
          </form>
          <p>*Kami Akan Mengirimkan Pembaruan Mingguan Untuk Manajemen Yang Lebih Optimal</p>
          {message && <p>{message}</p>} {/* Display success or error message */}
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;