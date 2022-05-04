import { useEffect, useState } from 'react'
import axios from 'axios'


//chakra
import { Container, Box, AspectRatio, SimpleGrid, Image, Button, Text, useColorModeValue } from '@chakra-ui/react'

const MovieIndex = () => {


  // state
  const [randWow, setRandWow] = useState(false)

  //array of all wows with no duplicates
  const [wows, setWows] = useState([])
  const [filteredWows, setFilteredWows] = useState([])

  //functions
  const getRandWow = async () => {
    try {
      const { data } = await axios.get('https://owen-wilson-wow-api.herokuapp.com/wows/random')
      setRandWow(data)

    } catch (error) {
      console.log(error)
    }
  }

  const handleMovieClick = (item) => {
    const getRandWowFromMovie = async (item) => {
      try {
        const { data } = await axios.get(`https://owen-wilson-wow-api.herokuapp.com/wows/random?movie=${item}`)
        setRandWow(data)

      } catch (error) {
        console.log(error)
      }
    }
    getRandWowFromMovie(item)
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  useEffect(() => {
    getRandWow()
  }, [])

  useEffect(() => {
    const getWows = async () => {
      try {
        const { data } = await axios.get('https://owen-wilson-wow-api.herokuapp.com/wows/ordered/0-29')
        setWows(data)

      } catch (error) {
        console.log(error)
      }
    }
    getWows()
  }, [])

  useEffect(() => {
    let filteredArray = []
    wows.forEach(wow => wow.current_wow_in_movie === 1 ? filteredArray.push(wow) : '')
    setFilteredWows(filteredArray)
  }, [wows])

  const handleClick = () => {
    getRandWow()
  }

  const bg = useColorModeValue('gray.100', 'gray.600')
  const bdr = useColorModeValue('gray.300', 'gray.500')

  return (
    <>
      <Container maxW='900px' mt='50px'>

        {randWow ?
          <>

            <Box borderWidth='1px' overflow='hidden' borderRadius={10} borderColor={bdr}>
              <Box p={5} pb={0}>
                <AspectRatio ratio={16 / 9}>
                  <iframe title={randWow[0].movie}
                    src={randWow[0].video['1080p']}
                    width='100%'
                    height='100%'
                  ></iframe>
                </AspectRatio>
              </Box>

              <Box p={2} textAlign='center'>
                <Text m={2} fontWeight='bold' fontSize='2xl'>{randWow[0].movie} ({randWow[0].year})</Text>
                <Text>Line in Movie: <Text display='inline' as='i'> "{randWow[0].full_line}"</Text></Text>
                <Text>Current Wow in Movie: {randWow[0].current_wow_in_movie} of {randWow[0].total_wows_in_movie} </Text>
                <Text>Timestamp: {randWow[0].timestamp}</Text>
                <Button bg={bg} m={4} onClick={handleClick}>
                  Generate New Wow
                </Button>
                <Text> Or click on a movie below!</Text>
              </Box>
            </Box>
            <SimpleGrid mt={5} mb={5} columns={{ sm: 2, md: 3, lg: 4 }} spacing={10}>
              {filteredWows.map((item, index) => {
                const { movie, year, poster } = item
                return (
                  <Box key={index} maxW='sm' borderWidth='1px' overflow='hidden' rounded='10px' borderColor={bdr}>
                    <Image onClick={() => handleMovieClick(`${movie}`)} _hover={{ cursor: 'pointer' }} width='100%' src={poster} alt={movie} />
                    <Box p={2} textAlign='center'>
                      <Text fontWeight='bold'>{movie}</Text> <Text>({year})</Text>
                    </Box>
                  </Box>
                )
              })}
            </SimpleGrid>
          </>
          :
          <h2>Loading...</h2>}
      </Container >


    </>


  )
}


export default MovieIndex