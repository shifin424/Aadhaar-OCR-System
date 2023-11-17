
const InputBox = ({ className, id, type, onChange, value }) => {
    return (
        <div>
            <input id={id} className={className} value={value} type={type} onChange={onChange} />
        </div>
    )
}

export default InputBox