interface CustomButtonProps {
    label: string
    onClick: () => void // if not mandatory: onClick?: () => void
}

const Custombutton: React.FC<CustomButtonProps> = ({
    label,
    onClick
}) => {
    return(
        <div 
            onClick={onClick}
            className="inline-block px-3 py-2 bg-airbnb hover:bg-airbnbDark transition text-white rounded-lg cursor-pointer"
        >
            {label}
        </div>
    )
}
export default Custombutton;