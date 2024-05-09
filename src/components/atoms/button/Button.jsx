export default function Button({ text = "Button", classname, icons }) {
    const classList = "cmp-btn " + classname;
    return (
        <button className={classList}>
            {icons?.map((item, index) => {
                return <img key={index} className="cmp-btn__icon" src={item} alt="icon" />
            })}
            <span className="cmp-btn__text">{text}</span>
        </button>
    );
}