import { Box, Input, InputGroup, InputRightElement, Button, Text, Center } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'
import GoogleLogin from './GoogleLogin'

const Register = () => {

    return(
        <>
            <Input placeholder='Email' marginBottom='10px'></Input>
            <Input placeholder='Password' marginBottom='10px'></Input>
            <Input placeholder='Reenter Password' marginBottom='10px'></Input>
            <hr></hr>
            <Button w='80%' margin='10px' bg='rgb(51, 30, 19)' color='white'>Sign Up</Button>
            <p>or</p>
            <GoogleLogin/>
        </>
    )
}

export default Register