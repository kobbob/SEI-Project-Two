import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


//chakra
import { Container, Box, AspectRatio } from '@chakra-ui/react'

const MovieIndex = () => {

  const [wow, setWow] = useState(false)


  useEffect(() => {
    const getWow = async () => {
      try {
        const { data } = await axios.get('https://owen-wilson-wow-api.herokuapp.com/wows/ranom')
        setWow(data)

      } catch (error) {
        console.log(error)
      }
    }
    getWow()
  }, [])




  return (
    <Container mt='50px'>

      {wow ?
        <>

          <Box borderWidth='1px' overflow='hidden' borderRadius={10} borderColor='gray.300'>
            <AspectRatio ratio={16/9}>
              <iframe title={wow[0].movie}
                src='https://videos.ctfassets.net/bs8ntwkklfua/7AUtahGti2EMClGmW1rrZP/96e65cd64cce56684670c996ee94afd1/Bottle_Rocket_Wow_1_720p.mp4'
                width='100%'
                height='100%'
              ></iframe>
            </AspectRatio>

            <Box p={2} textAlign='center'>
              {wow[0].movie} ({wow[0].year})
            </Box>
          </Box>
        </>
        :
        <h2>oops</h2>}
    </Container >

  )
}


export default MovieIndex