import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import GridItems from '../components/GridItems'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
