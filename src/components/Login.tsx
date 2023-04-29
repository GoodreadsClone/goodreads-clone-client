import { Box, Input, InputGroup, InputRightElement, Button, Text, Center } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import GoogleLogin from './GoogleLogin'

const Login = ({handleShowSignUp}) => {

    return(
        <>
            <Input placeholder='Email' marginBottom='10px'></Input>
            <Input placeholder='Password'></Input>
            <hr></hr>
            <Button w='80%' margin='10px' bg='rgb(51, 30, 19)' color='white' marginBottom='10px'>Login</Button>
            <p>or</p>
            <GoogleLogin/>
            <Button w='80%' marginBottom='10px' bg='rgb(51, 30, 19)' color='white' onClick={handleShowSignUp}>Sign up with Email</Button>
        </>
    )
}

export default Login