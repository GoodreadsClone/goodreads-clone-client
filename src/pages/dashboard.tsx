import InitForm from "@/components/InitForm"
import { Center, Container } from "@chakra-ui/react"
import { useSession, signOut } from "next-auth/react"

export default function Dashboard(){
    const { data: session } = useSession()
    if (session) {
        return (
          <>
            <p>Dashboard</p>
          </>
        )
      }
      return (
        <div>
            <Container padding='100px'>
                <Center>
                    <InitForm/>
                </Center>
            </Container>
        </div>
      )
}