'use client' // without this statement, it is a server component.. so we need to make this a client component for the CustomButton's onClick(console.log) funcion to work

import { useState, useEffect, useRef } from "react"
import Custombutton from "../forms/CustomButton"
import { ConversationType } from "@/app/inbox/page"
import useWebSocket, { ReadyState } from "react-use-websocket"
import { MessageType } from "@/app/inbox/[id]/page"
import { UserType } from "@/app/inbox/page"

interface ConversationDetailProps {
    userId: string,
    token: string,
    conversation: ConversationType,
    messages: MessageType[]
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    token,
    userId,
    messages,
    conversation
}) => {
    const messagesDiv = useRef(null);
    const [newMessage, setNewMessage] = useState("");
    const myUser = conversation.participants?.find((user) => user.id === userId);
    const otherUser = conversation.participants?.find((user) => user.id !== userId);
    const [realTimeMessages, setRealTimeMessages] = useState<MessageType[]>([]);

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`, {
        share: false,
        shouldReconnect: () => true,
    });

    useEffect(() => {
        console.log("Connection state changed: ", readyState);
    }, [readyState]);

    useEffect(() => {
        if (lastJsonMessage && typeof lastJsonMessage === 'object' && 'name' in lastJsonMessage && 'body' in lastJsonMessage) {
            const message: MessageType = {
                id: '',
                name: lastJsonMessage.name as string,
                body: lastJsonMessage.body as string,
                sent_to: otherUser as UserType,
                created_by: myUser as UserType,
                conversationId: conversation.id,
            }

            setRealTimeMessages((realTimeMessages) => [...realTimeMessages, message]);
        }
        scrollToBottom();
    }, [lastJsonMessage]);
    
    const sendMessage = async () => {
        console.log("Sending message: ");
        sendJsonMessage({
            event: 'chat_message',
            data: {
                body: newMessage,
                name: myUser?.name,
                sent_to_id: otherUser?.id,
                conversation_id: conversation.id
            }
        });

        setNewMessage("");
        setTimeout(() => {
            // scrollToBottom();
        }, 50)
    }

    const scrollToBottom = () => {
        if (messagesDiv.current) {
            messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
        }
    }

    return (
        <>
            <div
                ref={messagesDiv} 
                className="max-h-[400px] overflow-auto flex flex-col space-y-4"
            >

                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`w-[80%] py-4 px-6 rounded-xl ${message.created_by.name === myUser?.name ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}
                    >
                        <p className="font-bold text-gray-500">{message.created_by.name}</p>
                        <p>{message.body}</p>
                    </div>
                ))}


                {realTimeMessages.map((message, index) => (
                    <div 
                        key={index} 
                        className={`w-[80%] py-4 px-6 rounded-xl ${message.name === myUser?.name ? 'ml-[20%] bg-blue-200' : 'bg-gray-200'}`}
                    >
                        <p className="font-bold text-gray-500">{message.name}</p>
                        <p>{message.body}</p>
                    </div>
                ))}

            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 rounded-lg outline-none "
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />

                <Custombutton 
                    label="Send"
                    onClick={sendMessage}
                />
            </div>
        </>
        
    )
}

export default ConversationDetail