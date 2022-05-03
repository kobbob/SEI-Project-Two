import { useState, useEffect } from 'react'
import { Container, Box, Text, SimpleGrid, IconButton, useBreakpointValue, Stack, Heading } from '@chakra-ui/react'
import Slider from 'react-slick'


const ShowMovie = () => {

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState('')

  return (
    
   <Container mt='50px'>
     <SimpleGrid columns={{sm:1, md: 2}} spacing='20px'>
       {/* these are the dots */}
       <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
       <Slider {...settings}>
         <Box>
           1
         </Box>
         <Box>
           2
         </Box>
         <Box>
           3
         </Box>
       </Slider>
       <Box bg='gray.300' pl={3} pr={3}>
        {/* info */}
        <Text fontSize='4xl'>
          Title Year
        </Text>
        <Text>
        Director:
        </Text>
        <Text>
          Character
        </Text>
        <Text>
          Full line
        </Text>
        <Text>
          Wow Counter
        </Text>
       </Box>
     </SimpleGrid>
   </Container>
  )
}

export default ShowMovie