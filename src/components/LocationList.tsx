import Location from "./Location";
import {LocationData} from "../interfaces/LocationData";

// @ts-ignore
function LocationList({locations, emptyHeading, onRemove}) {
    const count = locations.length;
    let heading = emptyHeading;
    if (count > 0) {
        const noun = count > 1 ? 'Locations' : 'Location';
        heading = count + ' ' + noun;
    }
    return (
        <section>
            <h2>{heading}</h2>
            {locations.map((location: LocationData) => <Location key={location.id} location={location} onRemove={console.log(`remove ${location.id}`)}/>)}
        </section>
    );
}

export default LocationList
