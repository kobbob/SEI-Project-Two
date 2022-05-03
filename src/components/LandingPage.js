import { Image, Box } from '@chakra-ui/react'
import OwenFace from './images/OwenFace.webp'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  

  return (
    <div className="wrapper">
    <Box boxSize='sm'>
      <Link to='/movies'>
        <Image src={OwenFace} alt='Owen Wilson' />
      </Link>
    </Box>
    </div>
  )
}

export default LandingPage


