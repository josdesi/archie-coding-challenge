import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import type { NextPage } from 'next'
import GridItems from '../components/GridItems'
import SearchBar from '../components/SearchBar'
import client from '../config/ApolloClient'
import { GET_MISSIONS, GET_MISSIONS_BY_NAME } from '../queries/Missions' 


interface IProps {
  data: any
}


const Home: NextPage<IProps> = (props:IProps) => {
  
  const [executeSearch, { data, loading }] = useLazyQuery(GET_MISSIONS_BY_NAME)
 
  const searchBarOnChange = (value:string)=>{
    executeSearch({
      variables: { missionName: value },
    });
  }

  console.log(data)

  return (
    <>
      {JSON.stringify(props.data)}
      {JSON.stringify(data)}
      <Box pl="5%" pr="5%" bg="gray.100">
        <Box pt={50} pb={5}>

          <SearchBar onChange={searchBarOnChange}/>
        </Box>
        
        <Box borderWidth="1px" borderRadius="xl" bg="white">
          {
              loading ?
                (
                  <Flex justifyContent="center" height="100vh" pt={20}>
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"                    
                    />
                  </Flex>
                ):
                <GridItems /> 
            }
        </Box>

      </Box>
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  const { data } = await client.query({
    query: GET_MISSIONS
  });

  return {
    data: data
  };
}

export default Home
