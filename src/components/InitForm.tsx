import { Box, Input, InputGroup, InputRightElement, Button, Text, Center } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import { useSession, signIn, signOut } from "next-auth/react"
import { use, useState } from 'react'
import Login from './Login';
import GoogleLogin from './GoogleLogin';
import Register from './Register';

const InitForm = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [showLogin, setShowLogin] = useState(false)
    const handleShowLogin = () => setShowLogin(!showLogin)

    const [showSignUp, setShowSignUp] = useState(false)
    const handleShowSignUp = () => setShowSignUp(!showSignUp)

    let content
    if(showLogin && !showSignUp) {
        content = (
            <div>
                <Login handleShowSignUp={handleShowSignUp} />
            </div>
        )
    } else if (showSignUp && !showLogin) {
        content = (
            <div>
                <Register/>
            </div>
        )
    } else {
        content = (
            <div>
                <GoogleLogin/>
                <Button w='80%' marginBottom='10px' bg='rgb(51, 30, 19)' color='white' onClick={handleShowSignUp}>Sign up with Email</Button>
                <Text fontSize='sm' marginBottom='10px'>By creating an account, you agree to the Goodreads Terms of Service and Privacy Policy.</Text>
                <hr></hr>
                <Button w='80%' margin='10px' bg='rgb(51, 30, 19)' color='white' onClick={handleShowLogin}>Login</Button>
            </div>
        )
    }

    return(
        <>
            <Box h='auto' w='100%' p={5} color='black' border='1px' borderRadius='10px' textAlign='center'>
                <Text fontSize='lg'marginBottom='10px'>Discover & read more</Text>
                {
                  content
                }
              
            </Box>
        </>
    )
}

export default InitForm