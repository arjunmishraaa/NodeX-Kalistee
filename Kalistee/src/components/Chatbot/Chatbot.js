import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("chatbotId", "udYtNMEkWG6vALfjefbXB");
    script.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/udYtNMEkWG6vALfjefbXB"
      width="200px"
      height="400px"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        border: "none",
        zIndex: 9999,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    ></iframe>
  );
};

export default Chatbot;
