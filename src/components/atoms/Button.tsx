// inisialisasi tipe data untuk props
type ButtonProps = {
    label: string;
    className: string;
    onClick: () => void;
}

// deklarasi function dengan parameter props
function Button({label, className, onClick}: ButtonProps){
    return (
        <button className={className} onClick={onClick}>{label}</button>
    )
}

export default Button;