import Slider from "react-slick";
import { Container, Box, Text, SimpleGrid } from '@chakra-ui/react'
import OwenFace from './images/OwenFace.webp'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'


const ShowMovie = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIcon w={6} h={6} _hover={{color: "teal"}}/>,
    prevArrow: <ArrowBackIcon w={6} h={6} _hover={{color: "teal"}}/>,
  }



  return (

    <Container mt='50px'>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing='20px'>
        <Slider {...settings}>
          <div>
           <img src={OwenFace} alt="" />
          </div>
          <div>
          <img src={OwenFace} alt="" />
          </div>
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