import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { user } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behaviour: "smooth" });
  }, [message]);
  return (
    <div
      className={message.senderId == user.uid ? "message owner" : "message"}
      ref={ref}
    >
      <div className="message__info">
        <img
          src={
            message.senderId == user.uid ? user.photoURL : data.user.photoURL
          }
          alt="user image"
        />
        <span className="message__time">just now</span>
      </div>

      <div className="message__content">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="message image" />}
      </div>
    </div>
  );
};

export default Message;
