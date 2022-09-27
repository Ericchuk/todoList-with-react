function InputSection({setInputValue, onClick}){
    return (
        <section className="input-section">
            <aside className="input-section-input">
                <input type="text" placeholder="Enter a task" onChange={(e) => {
                    setInputValue(e.target.value)
                }}/>
            </aside>
            <aside className="input-section-button">
                <button onClick={onClick}>Add</button>
            </aside>
        </section>
    )
}

export default InputSection;