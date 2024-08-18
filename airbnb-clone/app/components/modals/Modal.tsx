'use client'

import { useCallback, useEffect, useState } from "react"

interface ModalProps {
    label: string
    close: () => void
    content: React.ReactElement
    isOpen: boolean
}

const Modal: React.FC<ModalProps> = ({
    label,
    content,
    isOpen, 
    close
}) => {
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        setShowModal(false)
        
        //when set to false, the translate will kick in and move it out from the screen, it will wait for 300ms before removing fromt the screen
        setTimeout(() => {
            close()
        }, 300)
    }, [close])

    if (!isOpen){
        return null
    }

    return (
        <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
            <div className="relative w-[90%] md:[80%] lg:w-[700px] my-6 h-auto">
                {/* the `` is so that the classname can also be passed as parameters */}
                <div className={`translate duration-600 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'} `}>
                    <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
                        
                        <header className="h-[80px] flex items-center p-6 rounded-xl justify-center relative border">
                            <div 
                                onClick={handleClose}
                                className="p-3 absolute right-3 hover:bg-gray-300 rounded-full cursor-pointer"
                            >
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>

                            <h2 className="text-lg font-bold">{label}</h2>
                        </header>

                        <section className="p-6">
                            {content}
                        </section>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal