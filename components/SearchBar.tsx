import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input } from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

interface IProps {
    onChange:(value:string)=>void
}
export default function SearchBar(props:IProps) {

    const [value, setValue] = useState()
    const debounced = useDebouncedCallback(

        useCallback((value) => {
            setValue(value)
            props.onChange(value)
        }, []),
        700,

        { maxWait: 2000 }
    )

    return (
        <div>
            <Flex maxWidth={600} h={50} align="center" borderWidth="1px" borderRadius="xl" bg="white">
                <SearchIcon ml={5} mr={3} />
                <Input 
                    variant="unstyled" 
                    placeholder="Search by mission name" 
                    onChange={(e) => debounced(e.target.value)}
                    />
            </Flex>
        </div>
    )
}
