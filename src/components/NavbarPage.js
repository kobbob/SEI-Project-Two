import { Link } from 'react-router-dom'
import { Flex, Button, HStack, chakra, useColorMode, Image, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import owenHead from './images/owenHead.webp'
import title from './images/Title.png'


const NavbarPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('gray.100', 'gray.700')
 

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
          
          <Link to='/'>
          <Image width='30px' src={owenHead}/>
          </Link>

          {/* // Nav Items */}
          <HStack as="nav" spacing="5">


            <Image src={title}/>

          </HStack>
          {/* // Call to action items */}
          <HStack>
            <Button bg={bg} onClick={toggleColorMode}>
             {colorMode === 'dark' ? 
             <SunIcon/> :
             <MoonIcon/>}
            </Button>
          </HStack>

        </Flex>
      </chakra.header>
    </>
  )
}

export default NavbarPage

