'use client';

import { useRouter } from 'next/navigation';
import { ConversationType } from "@/app/inbox/page";

interface ConversationProps {
    conversation: ConversationType;
    userId: string;
}

const Conversation: React.FC<ConversationProps> = ({
    conversation, 
    userId,
}) => {
    const router = useRouter();
    const otherUser = conversation.participants.find((user) => user.id !== userId);
   

    if (!otherUser) {
        // Handle the case where otherUser is not found
        return <div>No other user found in this conversation</div>;
    }


    return (
        <div className="cursor pointer px-6 py-4 border border-gray-300 rounded-xl">
            <p className="mb-6 text-xl">{otherUser?.name} </p>

            <p 
                onClick={() => router.push(`/inbox/${conversation.id}`)}
                // onClick={() => console.log("testing...")}
                className="text-airbnbDark">Go to Conversation
            </p>
        </div>
    )
}

export default Conversation;