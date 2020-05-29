import React from "react";

import "./Chat-Title.css";

const ChatTitle = ({ selectedConversation, onDeleteConversation }) => {
  let chatTitle = null;
  let deleteConversationHandler = null;

  if (selectedConversation) {
    console.log("Chat-Title selectedConversation", selectedConversation);
    chatTitle = selectedConversation.title;
    deleteConversationHandler = () => {
      onDeleteConversation();
    };
  }
  return (
    <div id="chat-title">
      <span>{chatTitle}</span>
      <img
        src={require("../../images/icons/trash-logo.svg")}
        alt="Delete Conversation"
        onClick={deleteConversationHandler}
      />
    </div>
  );
};

export default ChatTitle;
