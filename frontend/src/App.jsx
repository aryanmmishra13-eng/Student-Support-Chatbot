 import { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import ChatWindow from "./components/chatwindow";
import InputBox from "./components/inputbox";
import "./App.css";
import { sendMessage } from "./services/api";

function App() {

  const [messages, setMessages] = useState([]);

  const handleSend = async (message) => {

    if (!message.trim()) return;

    // Show user's message immediately
    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {

      // Get chatbot reply
      const reply = await sendMessage(message);
      console.log(reply);

      const botMessage = {
        sender: "bot",
        text: reply.answer
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {

      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Unable to connect to the chatbot.",
        },
      ]);

    }

  };

  return (
    <div className="app">

      <Sidebar />

      <div className="main">

        <Header />

        <ChatWindow
          messages={messages}
        />

        <InputBox
          onSend={handleSend}
        />

      </div>

    </div>
  );
}

export default App;