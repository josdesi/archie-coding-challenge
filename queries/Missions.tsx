import { gql } from '@apollo/client'


export const GET_MISSIONS_BY_NAME = gql`
    query GetMissions($missionName: String!) {
        launchesPast(find:{mission_name:$missionName}) {
            mission_name
        }
    }
`

export const GET_MISSIONS = gql`
    query GetMissions {
        launchesPast(limit:10) {
            mission_name            
        }
    }
`
