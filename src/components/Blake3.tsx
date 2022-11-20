import React, { useState } from 'react'
import {
  Flex, FlexProps, Text, Textarea,
} from '@chakra-ui/react'

const Blake3 = (props: FlexProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: any) => {
    const currentValue = e.target.value
    setInputValue(currentValue)
  }

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      width="75vw"
      mt="5vh"
      bg="gray.50"
      color="black"
      _dark={{
        bg: 'gray.900',
        color: 'white',
      }}
      transition="all 0.15s ease-out"
      {...props}
    >
      <Flex direction="column" width="35vw">
        <Text>
          Blake3 Input
        </Text>
        <Textarea
          height="50vh"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Here is a sample placeholder"
        />
      </Flex>
      <Flex direction="column" width="35vw">
        <Text>
          Blake3 Output
        </Text>
        <Textarea height="50vh" />
      </Flex>
    </Flex>

  )
}

export default Blake3
