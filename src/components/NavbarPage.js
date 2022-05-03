import { Link } from 'react-router-dom'
import { Flex, Button, HStack, chakra } from '@chakra-ui/react'



const NavbarPage = () => {
  return (
    <>
      <chakra.header id="header" bg='gray.300'>
        <Flex
          w="100%"
          px="6"
          py="5"
          align="center"
          justify="space-between"
        >
       {/* // Logo */}
          <Link to=''>🍿</Link>

  {/* // Nav Items */}
          <HStack as="nav" spacing="5">

            
              <Button variant="nav"> item 1 </Button>
              <Button variant="nav"> item 2 </Button>
            

          </HStack>
{/* // Call to action items */}
          <HStack>
            <Button>
              Hello
            </Button>
          </HStack>

        </Flex>
      </chakra.header>
    </>
  )
}

export default NavbarPage

