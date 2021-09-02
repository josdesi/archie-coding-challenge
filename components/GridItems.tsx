import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

let dataDummy: any[] = new Array<any>();
([...Array(100)]).map((item: number) => {
    dataDummy.push({
        id: item
    })
})
export default function GridItems() {
    return (
        <div>
            <Box p={10} justifyContent='center'>

                <SimpleGrid spacing={10} minChildWidth="250px">

                    {
                        dataDummy.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    image="https://bit.ly/2k1H1t6"
                                    title="Mission_Name"
                                    subtitle="Rocket_Name"
                                    link="http://www.google.com"
                                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam obcaecati dicta quis quo praesentium quos, voluptatibus officia. Vel iste ea amet sapiente eveniet qui, tempora aliquam nesciunt asperiores, voluptatem quasi?"
                                />
                            )
                        })
                    }
                </SimpleGrid>
            </Box>
        </div>
    )
}
