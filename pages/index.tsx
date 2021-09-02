import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import GridItems from '../components/GridItems'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
    <Box p={10} pl="5%" pr="5%" justifyContent='center'>

      <GridItems />      
    </Box>
    </>
  )
}

export default Home
