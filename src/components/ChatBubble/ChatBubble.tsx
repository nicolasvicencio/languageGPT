import { Message } from "@/types/types";
import parseDate from "@/utils/parseDate";
import React from "react";

type Props = {
  message: Message;
};

export default function ChatBubble({ message }: Props) {
  const { role } = message;
  const isUser = role === "user" ? true : false;
  return (
    <div
      className={`
       ${
         isUser
           ? "bg-yellow-100 text-gray-800 self-end animate-fade-left animate-ease-in"
           : "bg-white text-gray-600 animate-fade-right animate-ease-in"
       } p-2 text-sm  rounded-lg shadow-md max-w-[40%]`}
    >
      <p>{message.content}</p>
      <span className="text-xs text-gray-400 hover:text-gray-500 cursor-default text-right">
        {parseDate(message.created_at!)}
      </span>
    </div>
  );
}
