import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input } from '@chakra-ui/react'
import React from 'react'

export default function SearchBar() {
    return (
        <div>
            <Flex w={600} h={50} align="center" borderWidth="1px" borderRadius="xl" bg="white">
                <SearchIcon ml={5} mr={3}/>
                <Input variant="unstyled" placeholder="Search by missions" />
            </Flex>
        </div>
    )
}
