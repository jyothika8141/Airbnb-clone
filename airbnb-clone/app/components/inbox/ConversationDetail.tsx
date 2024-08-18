'use client' // without this statement, it is a server component.. so we need to make this a client component for the CustomButton's onClick(console.log) funcion to work
import Custombutton from "../forms/CustomButton"

const ConversationDetail = () => {
    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">Jyothika Manoj</p>
                    <p>Hello there, how can I help you?</p>
                </div>

                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">Mr Alien</p>
                    <p>Blaf gah jo hi humaa</p>
                </div>

            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 rounded-lg outline-none "
                />

                <Custombutton 
                    label="Send"
                    onClick={() => console.log("The send is clicked")}

                />
            </div>
        </>
        
    )
}

export default ConversationDetail