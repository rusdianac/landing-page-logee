import React from "react";
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
              <img src={instagram} alt="Instagram" />
              <a href="https://www.instagram.com/t"></a>
            </li>
            <li className="logo-container">
              <img src={facebook} alt="Facebook" />
              <a href="https://www.facebook.com"></a>
            </li>
            <li className="logo-container">
              <img src={twitter} alt="Twitter" />
              <a href="https://www.twitter.com/"></a>
            </li>
            <li className="logo-container">
              <img src={linkedin} alt="LinkedIn" />
              <a href="https://www.linkedin.com/"></a>
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
            <form>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Berlangganan</button>
            </form>
            <p>*Kami Akan Mengirimkan Pembaruan Mingguan Untuk Manajemen Yang Lebih Optimal</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
