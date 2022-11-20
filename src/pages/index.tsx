import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import Hero from '../components/Hero'
import Container from '../components/Container'
import Main from '../components/Main'
import DarkModeSwitch from '../components/DarkModeSwitch'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import Blake3 from '../components/Blake3'

const Index = () => (
  <Container height="100vh">
    <Box mt="10vh">
      <Hero title="Blake3" />
      <Blake3 />
    </Box>
    <CTA />
  </Container>
)

export default Index
