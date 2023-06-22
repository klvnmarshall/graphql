import {NetworkStatus, useLazyQuery} from "@apollo/client";
import {GET_DOG_PHOTO} from "../graphql/Queries";

function DelayedQuery() {

    const [getDog, {loading, error, data, networkStatus, refetch}] = useLazyQuery(GET_DOG_PHOTO, {
        notifyOnNetworkStatusChange: true
    })

    if (networkStatus === NetworkStatus.refetch) return <p>Refetching ...</p>

    if (loading) return <p>Loading ...</p>

    if (error) return <p>Error! {error.message}</p>

    return (
        <div>
            {data?.dog && <img src={data.dog.displayImage} alt=""/>}
            <button onClick={() => getDog({variables: {breed: 'bulldog'}})}>
                Click me!
            </button>
            <button onClick={() => refetch({breed: 'bulldog'})}>
                Refetch!
            </button>
        </div>
    );

}

export default DelayedQuery
