import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


//chakra
import { Container, Box, Image, SimpleGrid } from '@chakra-ui/react'

const MovieIndex = () => {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get('https://owen-wilson-wow-api.herokuapp.com/wows/ordered/0-29')
        setMovies(data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  }, [])



  return (
    <Container mt='50px'>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing='40px'>
        {movies.map(item => {
          const { movie, year, poster } = item
          if (item.current_wow_in_movie !== 1) return
          return (
            <Box maxW='sm' borderWidth='1px' overflow='hidden' rounded='10px' borderColor='gray.300'>
              <Link to={`/movies/${movie}`}>
                <Image width='100%' src={poster} alt={movie} />
              </Link>
              <Box p={2} textAlign='center'>
                {movie} ({year})
              </Box>
            </Box>
          )
        })}
      </SimpleGrid>
    </Container >

  )
}


export default MovieIndex