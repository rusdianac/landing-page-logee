import React, { useState, useRef, useEffect } from "react";
import "./FAQ.css"; // file CSS untuk animasi
import arah from "../assets/images/arah.png";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        {question}
        <img src={arah} alt="arrow icon" className={`arrow-icon ${isOpen ? "rotate" : ""}`} />
      </div>
      <hr className={`faq-divider ${isOpen ? "open" : ""}`} />
      <div ref={contentRef} className="faq-answer" style={{ height: height }}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Memastikan animasi hanya berjalan setelah komponen dimuat
    setIsLoaded(true);
  }, []);
  const faqData = [
    {
      question: "Apa itu LOGEE? ",
      answer: "LOGEE adalah platform solusi logistik terintegrasi yang menawarkan berbagai layanan mulai dari manajemen transportasi hingga pemenuhan pesanan dengan teknologi canggih.",
    },
    {
      question: "Bagaimana cara kerja LOGEE? ",
      answer: "LOGEE bekerja dengan menghubungkan berbagai pihak dalam ekosistem logistik melalui platform digital yang memudahkan manajemen distribusi, inventaris, dan pengiriman.",
    },
    {
      question: " Apakah LOGEE aman digunakan?",
      answer: "Ya, LOGEE dilengkapi dengan sistem keamanan tingkat tinggi untuk melindungi data pengguna serta menjaga privasi dan kerahasiaan informasi bisnis. ",
    },
    {
      question: "Bagaimana memulai menggunakan layanan LOGEE?",
      answer: "Tentu, LOGEE menyediakan fitur analitik dan dashboard yang memungkinkan Anda untuk memantau performa logistik dan membuat keputusan berdasarkan data real-time.",
    },
    {
      question: "Layanan apa saja yang ditawarkan oleh LOGEE? ",
      answer: "LOGEE menawarkan berbagai layanan seperti manajemen transportasi, pusat pemenuhan, monitoring penjualan, solusi pergudangan, dan analitik logistik berbasis data.",
    },
    {
      question: "Apakah LOGEE terintegrasi dengan sistem lain? ",
      answer: "Ya, LOGEE terbuka untuk integrasi dengan berbagai platform bisnis lain guna memastikan alur logistik yang seamless dan efisien. ",
    },
    {
      question: "Bagaimana LOGEE membantu bisnis saya?",
      answer: "Dengan teknologi otomatisasi dan Al, LOGEE membantu Anda mengoptimalkan alur kerja logistik, mempercepat proses, dan mengurangi biaya operasional. ",
    },
    {
      question: "Apakah saya bisa mendapatkan laporan analitik?",
      answer:
        "Anda bisa memulai dengan mendaftar di platform kami dan memilih layanan yang sesuai dengan kebutuhan logistik Anda. Tim kami siap membantu Anda selama proses onboarding. Tentu, LOGEE menyediakan fitur analitik dan dashboard yang memungkinkan Anda untuk memantau performa logistik dan membuat keputusan berdasarkan data real-time.",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Frequency Asked Question</h1>
      </div>
      <div className="faq-columns">
        <div className="faq-column">
          {faqData.slice(0, 4).map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className="faq-column">
          {faqData.slice(4, 8).map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
