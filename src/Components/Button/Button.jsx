
const Button = ({ onClick, text, className }) => {
    return (
        <div>
            <button
                onclick={onClick}
                className={`text-white px-14 py-2 rounded-lg  transition w-full ${className}`}
            >
                {text}
            </button>
        </div>
    )
}

export default Button