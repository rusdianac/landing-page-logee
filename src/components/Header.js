import "./Header.css";
import logee from "../assets/images/logee.png";
import logeeScrolled from "../assets/images/logo2.png";
import React, { useState, useEffect } from "react"; // Tambahkan useEffect
import { FaChevronDown } from "react-icons/fa";
import "./DropDown.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("ID");
  const [scrollHeader, setScrollHeader] = useState(false); // Tambahkan state untuk scroll

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Tambahkan useEffect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrollHeader ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={scrollHeader ? logeeScrolled : logee} alt="icon" /> {/* Ganti logo berdasarkan kondisi scroll */}
      </div>
      <nav className="nav">
        <div className="header-left">
          <a href="https://logee.id/products?hl=id">Produk</a>
          <a href="https://logee.id/solutions?hl=id">Solusi</a>
          <a href="https://logee.id/contact-us?hl=id">Hubungi</a>
          <a href="https://logee.id/news?hl=id">Artikel</a>
        </div>
      </nav>
      <div className="auth-buttons">
        <div className="dropdown-container">
          <button className="transparent-button" onClick={toggleDropdown}>
            {selectedOption} <FaChevronDown className="icon" />
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={() => handleItemClick("ID")}>
                ID
              </button>
              <button className="dropdown-item" onClick={() => handleItemClick("EN")}>
                EN
              </button>
            </div>
          )}
        </div>

        <button className="btn btn-register"><a href="https://app.logee.id/login">Daftar</a></button>
        <button className="btn btn-login"><a href="https://app.logee.id/login">Masuk</a></button>
      </div>
    </header>
  );
}

export default Header;
