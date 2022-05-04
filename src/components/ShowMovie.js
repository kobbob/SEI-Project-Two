import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


//Chakra
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Container, Box, Text, SimpleGrid } from '@chakra-ui/react'
//Carousel
import Slider from 'react-slick'

const ShowMovie = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIcon w={6} h={6} _hover={{color: "teal"}}/>,
    prevArrow: <ArrowBackIcon w={6} h={6} _hover={{color: "teal"}}/>,
  }
  const { movie } = useParams()
  console.log(movie)

  return (

    <Container mt='50px'>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing='20px'>
        <Slider {...settings}>
          <div>
           <img src='' alt="" />
          </div>
          <div>
          <img src='' alt="" />
          </div>
        </Slider>
        <Box bg='gray.300' pl={3} pr={3} ml={3}>
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