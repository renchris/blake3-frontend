import { Flex, Heading } from '@chakra-ui/react'

const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading as="h1" size="h1">{title}</Heading>
  </Flex>
)

export default Hero
