import React from "react";
import ChatContain from "../Components/ChatContain";
import ChatSide from "../Components/ChatSide";

const ChatPage = () => {
  return (
    <main className="main" id="top">
      <div className="container" style={{ marginTop: "5%" }} data-layout="container">
        <div className="content">
          <div className="card card-chat overflow-hidden">
            <div className="card-body d-flex p-0 h-100">
              <ChatSide />
              <ChatContain />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChatPage;
