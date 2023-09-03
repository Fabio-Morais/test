import * as React from "react"
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import useModalStore from "../../useModalStore";

// @ts-ignore
export const PreviewModal = () => {
    const { isOpen, onOpen, onClose } = useModalStore(); // Use the Zustand store
    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        sdsd
                    </ModalBody>

                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>


    )
}
