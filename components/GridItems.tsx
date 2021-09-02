import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'


interface IProps {
    data:any
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
                                    image={item.links.flickr_images}
                                    title={item.mission_name}
                                    subtitle={item.rocket.rocket_name}
                                    link={item.links?.article_link}
                                    description={item?.details}
                                    />
                            )
                        })
                        : (
                            <Flex height="100vh">
                                <Text>
                                No matching records
                                </Text>
                            </Flex>
                        )
                    }
                </SimpleGrid>
            </Box>
        </div>
    )
}
