import { gql, useQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'
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

const Home: NextPage = () => {

  const { data } = useQuery(QUERY)
  console.log(data)

  return (
    <>
      <Box pl="5%" pr="5%" bg="gray.100">
        <Box pt={50} pb={5}>

          <SearchBar />
        </Box>
        
        <Box borderWidth="1px" borderRadius="xl" bg="white">
          <GridItems />
        </Box>

      </Box>
    </>
  )
}

export default Home
