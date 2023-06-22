

// @ts-ignore
function Thumbnail({location}) {
    return(
        <div className="Thumbnail">
            <img src={location.photo} alt={location.name}/>
        </div>
    )
}

export default Thumbnail
