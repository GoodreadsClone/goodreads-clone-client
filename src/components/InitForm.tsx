import { Box, Button, Text } from '@chakra-ui/react'
import { useState } from 'react'
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

    const resetState = () => {
        setShowLogin(false)
        setShowSignUp(false)
    }

    let content
    if(showLogin) {
        content = (
            <div>
                <Login/>
                <Text onClick={resetState}>
                    <button>back</button>
                </Text>
            </div>
        )
    } else if (showSignUp) {
        content = (
            <div>
                <Register/>
                <Text onClick={resetState}>
                    <button>back</button>
                </Text>
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
                { content }
            </Box>
        </>
    )
}

export default InitForm