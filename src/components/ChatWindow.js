import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/ikonlogee.png"; // Pastikan lokasi logo sesuai dengan struktur folder
import restart from "../assets/images/restart.png";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(true); // Kontrol untuk menampilkan pilihan
  const [showRestart, setShowRestart] = useState(false); // Kontrol untuk menampilkan tombol Restart Chat
  const messagesEndRef = useRef(null); // Referensi ke elemen terakhir pesan dan Referensi untuk scroll otomatis
  const [loading, setLoading] = useState(false); // State untuk animasi loading

  useEffect(() => {
    // Chatbot menyapa pengguna di awal
    const initialMessage = { sender: "bot", text: "Hi there! How can we help you today?" };
    setMessages([initialMessage]);
  }, []);

  // Scroll ke pesan terakhir
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const getCurrentTime = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM"; // Tentukan AM atau PM

    // Konversi jam dari format 24 jam ke 12 jam
    hours = hours % 12;
    hours = hours ? hours : 12; // Jam 0 diubah jadi 12
    return `${day} ${month}, ${hours}:${minutes} ${ampm}`;
  };

  const handleOptionClick = (option) => {
    const userMessage = { sender: "user", text: option };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    // Tampilkan animasi loading sebagai pesan sementara
    setLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: "loading" }, // Pesan loading sementara
    ]);

    // Respons bot tergantung pada pilihan
    setTimeout(() => {
      const botResponse = {
        sender: "bot",
        text: option === "Connect me to sales" ? "Could you let us know how many freight shipments your company has done in the last year?" : "I'm a logistics provider Got it! Thank you for your interest in working with Flexport.",
      };
      // Hapus pesan loading dan tambahkan jawaban bot
      setMessages((prevMessages) => {
        const newMessages = prevMessages.filter((msg) => msg.text !== "loading"); // Hapus loading
        return [...newMessages, botResponse];
      });
      setLoading(false); // Sembunyikan animasi loading
    }, 2000);

    // Sembunyikan pilihan setelah dipilih dan tampilkan tombol Restart Chat
    setShowOptions(false);
    setShowRestart(true);
  };

  const restartChat = () => {
    const initialMessage = { sender: "bot", text: "Hi there! How can we help you today?" };
    setMessages([initialMessage]); // Reset pesan awal
    setShowOptions(true); // Tampilkan opsi kembali
  };

  return (
    <div className="chat-window">
      {/* Bagian header dengan logo */}
      <div className="chat-header">
        <img src={logo} alt="Logo" className="chat-logo" />
        <div className="chat-header-text">
          <h3>Logee</h3>
          <p>You are chatting with Logee</p>
        </div>
      </div>

      <div className="chat-messages">
        <div className="chat-header-time">{getCurrentTime()}</div> {/* Tampilkan Waktu chat */}
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender} ${msg.text === "loading" ? "no-background" : ""}`}>
            {msg.text === "loading" ? (
              <div className="loading-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            ) : (
              <span>{msg.text}</span>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Referensi untuk scroll ke pesan terakhir */}
        {/* Tampilkan pilihan hanya jika showOptions bernilai true */}
        {showOptions && (
          <div className="options">
            <button onClick={() => handleOptionClick("Connect me to sales")} className="option-button">
              Connect me to sales.
            </button>
            <button onClick={() => handleOptionClick("I want a quote.")} className="option-button">
              I want a quote.
            </button>
          </div>
        )}
      </div>

      {/* Tambahkan tombol Restart Chat di bawah chat window */}
      {!showOptions && (
        <div className="restart-chat">
          <button onClick={restartChat} className="restart-button">
            <img src={restart} alt="Logo" className="restart-logo" />
            <h3>Restart Conversation</h3>
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
