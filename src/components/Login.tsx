import { Input, Button } from '@chakra-ui/react'
import GoogleLogin from './GoogleLogin'

const Login = () => {
    return(
        <>
            <Input placeholder='Email' marginBottom='10px'></Input>
            <Input placeholder='Password' marginBottom='10px'></Input>
            <hr></hr>
            <Button w='80%' margin='10px' bg='rgb(51, 30, 19)' color='white' marginBottom='10px'>Login</Button>
            <p>or</p>
            <GoogleLogin/>
        </>
    )
}

export default Login