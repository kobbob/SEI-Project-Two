import { Image, Container } from '@chakra-ui/react'
import owenHead from './images/owenHead.webp'
import { Link } from 'react-router-dom'

const LandingPage = () => {


  return (
    <Container>
      <Link to='/movies'>
        <Image src={owenHead} alt='Owen Wilson' />
      </Link>
    </Container>
  )
}

export default LandingPage


