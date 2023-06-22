import {useQuery} from "@apollo/client";
import {GET_DOGS} from "../graphql/Queries";

// @ts-ignore
function Dogs({onDogSelected}) {

    const {data, loading, error} = useQuery(GET_DOGS)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error! {error.message}</div>

    return (
        <select name="dog" onChange={onDogSelected}>
            {data.dogs.map((dog: any) => <option key={dog.id}>{dog.breed}</option>)}
        </select>
    )
}


export default Dogs
