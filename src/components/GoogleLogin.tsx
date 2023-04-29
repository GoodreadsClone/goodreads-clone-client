import { FcGoogle } from 'react-icons/fc';
import { Button, Text } from '@chakra-ui/react';

const GoogleLogin = () => {
    return (
        <Button
            w='80%'
            variant={'outline'}
            marginBottom='10px'
            leftIcon={<FcGoogle />}>
            <Text>Continue with Google</Text>
        </Button>
    )
}

export default GoogleLogin