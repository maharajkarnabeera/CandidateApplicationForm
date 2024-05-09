export default function Dropdown({allOptions=[], name, changeHandler, id}) {

    return (
        <select id={id} onChange={changeHandler} name={name}>
            <option key={0} value="Default">Default</option>
            {allOptions.map((option, index)=>{
                return <option key={index+1} value={option}>{option}</option>
            })}
        </select>
    )
}