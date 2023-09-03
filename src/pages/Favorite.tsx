import * as React from "react"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

// @ts-ignore
export const Favorite = ({isOpen, onClose}) => (
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
);
