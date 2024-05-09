export default function Dropdown({ allOptions = [], name, changeHandler, id }) {

    return (
        <div className="dropdown-wrapper">
            <label htmlFor={name}>{name}</label>
            <select className="dropdown-filter" id={name} onChange={changeHandler} name={name}>
                <option key={0} value="Default">Default</option>
                {allOptions.map((option, index) => {
                    return <option key={index + 1} value={option}>{option}</option>
                })}
            </select>
        </div>
    )
}