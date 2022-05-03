import { Image, Box } from '@chakra-ui/react'
import OwenFace from './images/OwenFace.webp'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  

  return (
    <div className="wrapper">
    <Box maxW='sm' borderWidth='1px' overflow='hidden'>
      <Image width='100%' src='https://upload.wikimedia.org/wikipedia/en/3/3e/Wedding_crashers_poster.jpg' alt='' />

      <Box >
        
        
      </Box>
    </Box>
    </div>
  )
}

export default LandingPage


{/* <Box boxSize='sm'>
      <Link to='/movies'>
        <Image src={OwenFace} alt='Owen Wilson' />
      </Link>
    </Box> */}