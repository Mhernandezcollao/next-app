import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react'
import React from 'react'

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const RequestNumberModal = ({isOpen, onClose}: Props) => {
    
  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">¿Necesitas mi número de celular?</ModalHeader>
                    <ModalBody>
                        <Input
                            label="Nombre"
                            placeholder="Ingresar nombre"
                        />
                        <Textarea
                            label="Motivo"
                            placeholder="Ingresa un motivo"
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="bordered" onPress={onClose}>
                            Cerrar
                        </Button>
                        <Button color="success" variant='bordered' onPress={onClose}>
                            Solicitar
                        </Button>
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    </Modal>
  )
}

