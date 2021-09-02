import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'


interface IProps {
    data:any,
    type:string
}

export default function GridItems(props:IProps) {
    return (
        <div>
            <Box p={10} justifyContent='center'>

                <SimpleGrid spacing={10} minChildWidth="250px">

                    {
                        (props.data?.launchesPast.length > 0) ?

                        (props.data?.launchesPast)?.map((item:any) => {
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
                        : (
                            <Flex height="100vh">
                                <Text>
                                "No matching records"
                                </Text>
                            </Flex>
                        )
                    }
                </SimpleGrid>
            </Box>
        </div>
    )
}
