import { gql } from '@apollo/client'


export const GET_MISSIONS_BY_NAME = gql`
    query GetMissions($missionName: String!) {
        launchesPast(find:{mission_name:$missionName}) {
            mission_name
        }
    }
`
