import { Container, Text } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Container textAlign='center' mb={2}>
      <Text fontSize='xs' as='u'>Source: <a href="https://owen-wilson-wow-api.herokuapp.com/">Owen Wilson Wow API</a></Text>
    </Container>
  )
}


export default Footer