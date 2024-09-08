import apiService from "../services/apiService";
import { useState, useEffect } from "react";
import Conversation from "../components/inbox/Conversation";
import { getUserId } from "../lib/actions";

export type UserType = {
    id: string;
    name: string;
    avatar: string;
};

export type ConversationType = {
    id: string;
    participants: UserType[];
};

const InboxPage = async () => {
    const userId = await getUserId();
    console.log("userIDdd: ", userId);

    if (!userId) {
        return (
            <main className="max-w-[1500px] mx-auto px-6 space-y-4">
                <h1 className='mt-6 mb-12 text-3xl'>Inbox Page</h1>
                <p>Please log in to view this page</p>
            </main>
        )
    }

    const conversations = await apiService.get('/api/chat');

    return (
        <main className="max-w-[1500px] mx-auto px-6 space-y-4">
            <h1 className='mt-6 mb-12 text-3xl'>Inbox Page</h1>

            {conversations.map((conversation: ConversationType) => {
                return (
                    <Conversation 
                        userId={userId}
                        key={conversation.id}
                        conversation={conversation}
                    />
                )
            })}

        </main>
    )
}

export default InboxPage;
