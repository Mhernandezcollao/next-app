import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

interface Props {
    isOpen: boolean;
    onClose: () => void;
    selectedImage: any
}

export const OpenImageModal = ({isOpen, onClose, selectedImage}: Props) => {
  return (
    <Modal
        placement='center'
        size='xs'
        backdrop="blur" 
        isOpen={isOpen} 
        onClose={onClose}
        classNames={{
            closeButton: "bg-white text-black",
          }}
    >
        <ModalContent>
            <ModalBody className='p-0'>
                <div className='h-full w-full'>
                    <img src={selectedImage.url} alt="" className='h-96 w-full object-cover'/>
                </div>
            </ModalBody>
        </ModalContent>
    </Modal>
  )
}
