import { gql, useQuery } from '@apollo/client'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import type { NextPage } from 'next'
import GridItems from '../components/GridItems'
import SearchBar from '../components/SearchBar'



const QUERY = gql`
  {
    launchesPast(limit: 10) {
      mission_name
    }
  }
`

const searchBarOnChange = (value:string)=>{
  if(value!="")
    alert("####: "+value)
}

const Home: NextPage = () => {

  const { data, loading, error } = useQuery(QUERY)
  console.log(data)

  return (
    <>
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

export default Home
