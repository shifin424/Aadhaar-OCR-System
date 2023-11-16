
const InputBox = ({ className, id, type, onChange }) => {
    return (
        <div>
           <input id={id} className={className} type={type} onChange={onChange}/>
        </div>
    )
}

export default InputBox