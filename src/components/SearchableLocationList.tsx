// @ts-ignore
import SearchInput from "./SearchInput";
import React, {useState} from "react";
import LocationList from "./LocationList";
import {LocationData} from "../interfaces/LocationData";
import {useQuery} from "@apollo/client";
import {LOCATIONS_QUERY} from "../graphql/Queries";

// @ts-ignore
function SearchableLocationList() {
    const {loading, error, data} =  useQuery(LOCATIONS_QUERY)
    const [searchText, setSearchText] = useState('')

    if (loading) return <div className="App"> Loading ....</div>
    if (error) return <div className="App"> Error : error.message</div>

    const foundLocations = filterLocations(data.location, searchText)
    return (
        <>
            <SearchInput value={searchText}
                         onChange={(text: string) => setSearchText(text)}/>

            <LocationList locations={foundLocations}
                          onRemove={(id: number) => console.log(`remove ${id}`)}
                          emptyHeading={`No matches for "${searchText}"`}/>
        </>
    )

    // @ts-ignore
    function filterLocations(locations: LocationData[], searchText: string): LocationData[] {
        return locations.filter(location=> location.name.toLowerCase().includes(searchText.toLowerCase()))
    }
}

export default SearchableLocationList
