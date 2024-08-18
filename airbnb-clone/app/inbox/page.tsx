import Conversation from "../components/inbox/Conversation";

const InboxPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 space-y-4">
            <h1 className='mt-6 mb-12 text-3xl'>Inbox Page</h1>

            <Conversation />
            <Conversation />
            <Conversation />

        </main>
    )
}

export default InboxPage;
