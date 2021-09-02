import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Button color="teal.500">
        Chakra UI Button
      </Button>
    </>
  )
}

export default Home
