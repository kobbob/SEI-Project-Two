
import { Link } from "react-router-dom"

//chakra
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'

const MovieIndex = () => {
  return (
    <div className="wrapper">
      <SimpleGrid minChildWidth='250px' spacing='40px' width={900}>
        <Box bg='tomato' height='450px' >
          <Box>
            {/* image */}
            
              <Image width='100%'  maxH='450px' objectFit='cover'  src='https://upload.wikimedia.org/wikipedia/en/3/3e/Wedding_crashers_poster.jpg'/>
              
          </Box>
          <Box align='center' mt='10px'>
            {/* Text */}
            <Text >
             Wedding Crashers (2005)
            </Text>
          </Box>
        </Box>
        <Box bg='tomato' height='450px'></Box>
        <Box bg='tomato' height='450px'></Box>
        <Box bg='tomato' height='450px'></Box>
        <Box bg='tomato' height='450px'></Box>
        <Box bg='tomato' height='450px'></Box>
      </SimpleGrid>
    </div>

  )
}


export default MovieIndex