import { Link } from 'react-router-dom'

//chakra
import { Image, Container } from '@chakra-ui/react'

//import image
import owenHead from './images/owenHead.webp'

const LandingPage = () => {


  return (
    <Container className='wrapper'>
        <Image className='img' src={owenHead} alt='Owen Wilson' />
        <div className="middle">
          <Link to='/movies' className="text">Click me!</Link>
        </div>
    </Container>
  )
}

export default LandingPage


