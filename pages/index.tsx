import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      {
        ([...Array(100)]).map(() => {
          return (
            <Card
              image="https://bit.ly/2k1H1t6"
              title="Mission_Name"
              subtitle="Rocket_Name"
              link="http://www.google.com"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam obcaecati dicta quis quo praesentium quos, voluptatibus officia. Vel iste ea amet sapiente eveniet qui, tempora aliquam nesciunt asperiores, voluptatem quasi?"
            />
          )
        })
      }
    </>
  )
}

export default Home
