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
const normImage = (img:string) => img.length > 0 ? img[0] : "/images/blue.png"
const openLink = (url:string)=>{
    window.open(url, "_blank")
}
export default function Card(props:IProps) {
    return (
        <div>
            <Box borderWidth="1px" minHeight="410px" borderRadius="xl">
                <Image src={normImage(props.image)} />
                <Box p={5}>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Text fontSize="xl" fontWeight="semibold">
                            {props.title}
                        </Text>
                        {
                            props.link != null ?
                                <ExternalLinkIcon w={5} h={5} onClick={()=>openLink(props.link)}/>
                                : <ExternalLinkIcon w={5} h={5} color="gray.200"/>
                        }
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
