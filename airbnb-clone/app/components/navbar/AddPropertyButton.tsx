"use client";

import useLoginModal from '@/app/hooks/useLoginModal';
import useAddPropertyModal from '@/app/hooks/useAddPropertyModal';

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  userId
}) => {
  const LoginModal = useLoginModal()
  const AddPropertyModal = useAddPropertyModal()

  const airbnbYourHome = () => {
    if (userId) {
      AddPropertyModal.open()
    } else {
      LoginModal.open()
    }
    
  }
  return (
    <div 
      onClick={airbnbYourHome}
      className="cursor-pointer p-4 text-sm font-semibold rounded-full hover:bg-gray-100"
    >
      Add property
    </div>
  )
}

export default AddPropertyButton;