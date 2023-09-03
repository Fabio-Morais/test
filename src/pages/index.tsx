
import {
  ChakraProvider,
  theme, Modal, useDisclosure,
} from "@chakra-ui/react"
import {Favorite} from "@/pages/Favorite";
import Table from "@/pages/Table";
export default function Home() {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>


          <Table onOpen2={onOpen}/>
          <Favorite isOpen={isOpen} onClose={onClose}/>
    </>
  )
}
