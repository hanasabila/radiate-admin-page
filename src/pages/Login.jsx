import React from "react";
import { Box, Button, FormControl, Image, Input, Text, VStack } from "@chakra-ui/react";
import Logo from "../assets/Long.png"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const goTo = useNavigate()
    return (
        <div class='login'>
            <Box display="flex" justifyContent="center" alignItems="center" bg="gray100" h="100vh">
                <Box
                    w={['full', 'md']}
                    p={[8, 10]}
                    bg="neutralW"
                    borderRadius="20"
                    boxShadow="base"
                >
                    <VStack spacing={1} align='flex-start' w='full'>
                        <VStack spacing={1} align={['flex-start', ' center']} w='full'>
                            <Image src={Logo} mb='24px' />
                            <Text fontSize='30px' as='b'>Sign In</Text> 
                            <Text> Enter your email and password to login</Text>
                        </VStack>
                    </VStack>

                    <FormControl mb='20px' mt='32px'>
                        <Input type='email' variant='outline' rounded='10' placeholder='Email Address' />
                    </FormControl>

                    <FormControl mb='16px'>
                        <Input type='password' variant='outline' rounded='10' placeholder='Password' />
                    </FormControl>

                    <Button
                        w='full'
                        mt='20px'
                        colorScheme="orange"
                        bgColor="orange2"
                        mb='10px'
                        onClick={() => goTo('/')}
                    >
                        Login
                    </Button>

                </Box>
            </Box>
        </div>
    );
}