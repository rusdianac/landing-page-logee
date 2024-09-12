import React, { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import "./ChatBot.css";
import chatlogo from "../assets/images/chatlogo.png";

const ChatBot = () => {
  // State untuk menampilkan atau menyembunyikan chat window
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatWindow = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("Chat window status berubah: ", isOpen);
  }, [isOpen]);

  return (
    <div>
      {/* Tombol chatbot dengan ikon */}
      <div className="chatbot-button" onClick={toggleChatWindow}>
        <img src={chatlogo} alt="Chatbot Icon" className="chatbot-icon" />
      </div>

      {/* Gunakan className dinamis untuk animasi */}
      <div className={`chat-window-container ${isOpen ? "open" : "close"}`}>
        <ChatWindow />
      </div>
    </div>
  );
};

export default ChatBot;
