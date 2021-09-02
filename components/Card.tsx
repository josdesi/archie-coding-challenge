import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'


const paragraph: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam obcaecati dicta quis quo praesentium quos, voluptatibus officia. Vel iste ea amet sapiente eveniet qui, tempora aliquam nesciunt asperiores, voluptatem quasi?"
const truncateDescription = (str: string) => str?str.substring(0,100)+"...":""
export default function Card() {
    return (
        <div>
            <Box maxW="320px" borderWidth="1px" minHeight="400px" borderRadius="xl">
                <Image src="https://bit.ly/2k1H1t6" />
                <Box p={5}>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Text fontSize="xl" fontWeight="semibold">
                            Mission_Name
                        </Text>
                        <ExternalLinkIcon />
                    </Flex>
                    <Text color="teal.400">
                        Rocket_Name
                    </Text>
                    <Text>
                        {truncateDescription(paragraph)}
                    </Text>
                </Box>
            </Box>
        </div>
    )
}
