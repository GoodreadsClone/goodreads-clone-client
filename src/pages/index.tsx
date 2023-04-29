import NextHead from '@/components/NextHead'
import { Button, Container, Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { useSession, signIn, signOut } from "next-auth/react"
import InitForm from '@/components/InitForm'

export default function Home() {
  const { data: session } = useSession()
  return (
    <>
      <NextHead/>
      <main>
        <Container minWidth='100%' height='100px' bg='rgb(243, 240, 230)' centerContent>
          <Box padding='6' color='black' width='container.md' textAlign='left'>
            <Heading>goodreads</Heading>
          </Box>
        </Container>

        <Container minWidth='80%' padding='6'>
          <SimpleGrid minChildWidth='220px' spacing='40px'>
            <Box>
              <InitForm/>
            </Box>
            <Box>
              <Text fontSize='lg'>Deciding what to read next?</Text>
              <Text fontSize='md'>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</Text>
            </Box>
            <Box>
              <Text fontSize='lg'>What are your friends reading?</Text>
              <Text fontSize='md'>Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.</Text>
            </Box>
          </SimpleGrid>
        </Container>

      </main>
    </>
  )
}
