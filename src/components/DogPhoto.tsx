import {NetworkStatus, useQuery} from "@apollo/client";
import {GET_DOG_PHOTO} from "../graphql/Queries";

// @ts-ignore
function DogPhoto({breed}) {
    const { loading, error, data , refetch, networkStatus} = useQuery(GET_DOG_PHOTO, {
        variables: { breed },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: "network-only",
        nextFetchPolicy: "cache-first"
    });

    if (networkStatus === NetworkStatus.refetch) return <div> Refetching!</div>

    if (loading) return <div>Loading image</div>

    if (error) return <div>Error! {error.message}</div>

    return (
        <div>
            <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} alt="" />
            <button onClick={() => refetch({ breed: 'african' })}>
                Refetch new breed!
            </button>
            <button
                onClick={() => refetch({breed: 'dalmatian'})}>Refetch!
            </button>
        </div>
    )
}

export default DogPhoto
