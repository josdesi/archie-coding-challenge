import { useQuery, useLazyQuery, gql } from '@apollo/client'

export const GET_MISSIONS = gql`
    query GetMissions {
        launchesPast {
            mission_name
            rocket {
                rocket_name
            }
            links {
                article_link
                flickr_images
            }
            details
        }
    }
`

export const GET_MISSIONS_BY_NAME = gql`
    query GetMissions($missionName: String!) {
        launchesPast(find:{mission_name:$missionName}) {
            mission_name
            rocket {
                rocket_name
            }
            links {
                article_link
                flickr_images
            }
            details
        }
    }
`
