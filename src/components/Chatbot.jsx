import { useState, useContext } from "react";
import { askAI } from "../gemini";
import { ElectionContext } from "../context/ElectionContext";
import { Icon } from "@iconify/react";

function ChatBot() {
  const { candidates } = useContext(ElectionContext);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [chats, setChats] = useState([
    {
      sender: "bot",
      text: "Hello! Ask me anything about the election.",
    },
  ]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setChats((prev) => [...prev, userMessage]);

    setLoading(true);

    const aiReply = await askAI(message, candidates);

    const botMessage = {
      sender: "bot",
      text: aiReply,
    };

    setChats((prev) => [...prev, botMessage]);

    setMessage("");

    setLoading(false);
  };

  return (
    <>
      {show ? (
        <div className="chatbot-container position-absolute end-0 bottom-0 me-2 mb-2">
        <div className="d-flex justify-content-between align-items-center">
         <h6 className="mb-0">Election AI Chatbot</h6>
         
            <button
                       className="btn p-0"
                         onClick={()=>setShow(false)}
                     >
                       {" "}
                       <Icon
                         icon="akar-icons:cross"
                         width="20"
                         style={{ color: "black" }}
                       />
                     </button>         
        </div>
         

          <div className="chat-area">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={
                  chat.sender === "user" ? "user-message" : "bot-message"
                }
              >
                {chat.text}
              </div>
            ))}

            {loading && <div className="bot-message">Typing...</div>}
          </div>

          <div className="input-area">
            <input
              type="text"
              placeholder="Ask something..."
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />

            <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      ) : (
        <button className="btn btn-secondary position-absolute end-0 bottom-0 me-2 mb-2"
        onClick={()=>setShow(true)}>
          Ask from AI
        </button>
      )}
    </>
  );
}

export default ChatBot;
