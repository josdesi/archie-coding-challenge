import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'


interface IProps {
    image:string,
    title:string,
    subtitle:string,
    link:string,
    description:string
}


const truncateDescription = (str: string) => str?str.substring(0,100)+"...":""
const onClickIcon = (url:string)=>{
    window.open(url, "_blank")
}
export default function Card(props:IProps) {
    return (
        <div>
            <Box maxW="320px" borderWidth="1px" minHeight="400px" borderRadius="xl">
                <Image src={props.image} />
                <Box p={5}>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Text fontSize="xl" fontWeight="semibold">
                            {props.title}
                        </Text>
                        <ExternalLinkIcon onClick={()=>{onClickIcon(props.link)}}/>
                    </Flex>
                    <Text color="teal.400">
                        {props.subtitle}
                    </Text>
                    <Text>
                        {truncateDescription(props.description)}
                    </Text>
                </Box>
            </Box>
        </div>
    )
}
