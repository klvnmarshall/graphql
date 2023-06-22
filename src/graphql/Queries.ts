import {gql} from "@apollo/client";

export const LOCATIONS_QUERY = gql `
    query GetLocations {
        locations {
            id
            name
            description
            photo
        }
    }`

export const GET_DOGS = gql`
    query GetDogs {
        dogs {
            id
            breed
            images {
                url
            }
        }
    }`


export const GET_DOG_PHOTO= gql `
    query Dog($breed: String!) {
        dog(breed: $breed) {
            id
            displayImage
        }
    }
`
