type ButtonProps = {
    label: string;
    className: string;
    onClick: () => void;
}

function Button({label, className, onClick}: ButtonProps){
    return (
        <button className={className} onClick={onClick}>{label}</button>
    )
}

export default Button;