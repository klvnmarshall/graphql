// @ts-ignore
function SearchInput({value, onChange}) {
    return (
        <div className="Search">
            <input
                   placeholder="Search here"
                   onChange={event => onChange(event.target.value)}/>
        </div>


    )
}

export default SearchInput
