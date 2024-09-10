'use client'

import useLoginModal from "../hooks/useLoginModal";
import { useRouter } from "next/navigation";
import apiService from "../services/apiService";

interface ContactButtonProps {
  userId: string | null;
  landlordId: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
    userId,
    landlordId
  }) => {
    console.log("button clicked");
    const loginModal = useLoginModal();
    const router = useRouter();

    const startConversation = async () => {
        if (userId) {
            console.log("Starting conversation");

            const conversation = await apiService.get(`/api/chat/start/${landlordId}/`);
            if (conversation.conversation_id){
                router.push(`/inbox/${conversation.conversation_id}`);
            }
        } else {
            loginModal.open();
        }
    }
    
    return (
        <div 
          onClick={startConversation}
          className="cursor-pointer mt-6 py-4 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnbDark transition"
        >
            Contact
        </div>
    )
}

export default ContactButton