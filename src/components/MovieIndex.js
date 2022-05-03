
import { Link } from "react-router-dom"

//chakra
import { Box, Image, SimpleGrid } from '@chakra-ui/react'

const MovieIndex = () => {
  
  return (
    <div className="wrapper">
      <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing='40px' width='900px'>
      <Box maxW='sm' borderWidth='1px' overflow='hidden' rounded='10px' borderColor='gray.300'>
        <Link to='/'>
      <Image width='100%' src='https://upload.wikimedia.org/wikipedia/en/3/3e/Wedding_crashers_poster.jpg' alt='' />
      </Link>
      <Box p={2} textAlign='center'>
        Wedding Crashers (2005)
      </Box>
    </Box>
      </SimpleGrid>
    </div>

  )
}


export default MovieIndex