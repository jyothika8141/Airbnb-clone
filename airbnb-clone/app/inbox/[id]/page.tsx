import { getUserId } from "@/app/lib/actions"
import apiService from "@/app/services/apiService";
import ConversationDetail from "@/app/components/inbox/ConversationDetail"
import { UserType } from "../page";
import { getAccessToken } from "@/app/lib/actions";

export type MessageType = {
    id: string;
    name: string;
    body: string;
    conversationId: string;
    sent_to: UserType;
    created_by: UserType;
}

const ConversationPage = async ({ params }: { params: {id: string }}) => {
    const userId = await getUserId();
    const token = await getAccessToken();

    if (!userId || !token) {
        return (
            <main className="max-w-[1500px] mx-auto px-6 space-y-4">
                <h1 className='mt-6 mb-12 text-3xl'>Inbox Page</h1>
                <p>Please log in to view this page</p>
            </main>
        )
    }

    console.log("here123");

    

    const conversation = await apiService.get(`/api/chat/${params.id}/`);

    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <ConversationDetail 
                token={token}
                userId={userId}
                messages={conversation.messages}
                conversation={conversation.conversation}
            />
        </main> 
    )
}

export default ConversationPage