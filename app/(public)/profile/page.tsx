'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faAngleRight, faCalendarDay, faEnvelope, faFlag, faHouse, faPhone, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { RequestNumberModal } from '@/modals/RequestNumberModal';
import { OpenImageModal } from '@/modals/OpenImageModal';


export default function ProfilePage() {
  
  const {isOpen: isOpenRequestNumber, onOpen: onOpenRequestNumber, onClose: onCloseRequestNumber} = useDisclosure();
  const {isOpen: isOpenImage, onOpen: onOpenImage, onClose: onCloseImage} = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<any>()

  const photos = [
    {id: "1", url: "https://i.imgur.com/vxomUvP.jpg", alt: "1"},
    {id: "2", url: "https://i.imgur.com/UFELpbb.jpg", alt: "2"},
    {id: "3", url: "https://i.imgur.com/1eSEJIv.jpg", alt: "3"},
    {id: "4", url: "https://i.imgur.com/R0BLqO8.jpg", alt: "4"},
    {id: "5", url: "https://i.imgur.com/Om1nkJ6.jpg", alt: "5"},
    {id: "6", url: "https://i.imgur.com/TuBU316.jpg", alt: "6"},
    {id: "7", url: "https://i.imgur.com/mR9JJ80.jpg?1", alt: "7"},
    {id: "8", url: "https://i.imgur.com/7ZLgSIH.jpg", alt: "8"},
  ]

  const handleOpenImage = (item: any) => {
    setSelectedImage(item)
    onOpenImage()
  }

  return (
    <>
      <div className='flex flex-col w-full items-center'>
        <div className="parallax-container">
          <div className='container-gradient'></div>
        </div>
        <div className='relative flex w-full h-20'>
          <div className='absolute h-40 w-40 overflow-hidden rounded-full -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-gray-200'>
            <img
              alt="Woman listing to music"
              src="https://i.imgur.com/xiRYZ5K.jpg"
              className='w-full h-full object-cover object-top'
            />
          </div>
        </div>
        <h2 className='text-gray-200 text-2xl text-center'>Maryorie Belén Hernández Collao</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-8 max-w-5xl'>
          <div className='h-auto w-full bg-smokyblack p-5 rounded-lg my-3'>
            <p className='text-small text-gray-200 mb-7'>Datos personales</p>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faCalendarDay} className='text-gray-400 mr-3 font-awesome-icon'/>
              <p className='text-gray-400 text-xs truncate cursor-default'>20 de marzo de 1990</p>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faPhone} className='text-gray-400 mr-3'/>
              <button onClick={onOpenRequestNumber} className=' text-gray-400 text-xs truncate cursor-pointer hover:underline'>
                +56 9 9644 XXXX
              </button>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faEnvelope} className='text-gray-400 mr-3 font-awesome-icon'/>
              <Link href="mailto:mhernandezcollao@gmail.com" className='text-gray-400 text-xs truncate hover:underline'>
                mhernandezcollao@gmail.com
              </Link>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faFlag} className='text-gray-400 mr-3'/>
              <p className='text-gray-400 text-xs truncate cursor-default'>Chilena</p>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faInstagram} className='text-gray-400 mr-3'/>
              <Link href='https://www.instagram.com/mhernandezcollao/?hl=es-la' target="_blank" className='text-gray-400 text-xs truncate hover:underline'>
                @mhernandezcollao
              </Link>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faFacebook} className='text-gray-400 mr-3'/>
              <Link href='https://www.instagram.com/mhernandezcollao/?hl=es-la' target="_blank" className='text-gray-400 text-xs truncate hover:underline'>
                May Hernandez
              </Link>
            </div>
            <div className='flex items-center my-2'>
              <FontAwesomeIcon icon={faLinkedin} className='text-gray-400 mr-3'/>
              <Link href='https://www.linkedin.com/in/maryorie-hernandez-collao-749479205/?originalSubdomain=cl' target="_blank" className='text-gray-400 text-xs truncate hover:underline'>
                Maryorie Hernandez Collao
              </Link>
            </div>
          </div>
          <div className='h-auto w-full bg-smokyblack p-5 rounded-lg my-3 md:col-span-2'>
            <div className='flex justify-between mb-7'>
              <p className='text-small text-gray-200'>Galeria</p>
              <div className='flex items-center'>
                <p className='text-small text-gray-200 mr-2'> Ver mas </p>
                <FontAwesomeIcon icon={faAngleRight} className='text-gray-400'/>
              </div>
            </div>
            <div className='flex flex-wrap md:grid md:grid-cols-4 gap-3 w-full justify-center'>
              {
                photos.map((item: any)=>(
                    <div key={item.id} className=' relative w-40 h-28 md:w-full md:h-24 rounded-lg bg-white overflow-hidden'>
                      <img onClick={()=> handleOpenImage(item)} src={item.url} alt="" className='w-full h-full object-cover object-top translate-all duration-500 img-hover cursor-pointer' />
                    </div>
                ))
              }
            </div>
          </div>
              <div className='h-20'></div>
        </div>
      </div>


      {/* Modals */}
      <RequestNumberModal 
        isOpen={isOpenRequestNumber} 
        onClose={onCloseRequestNumber}
      />

      {selectedImage && (
        <OpenImageModal 
          isOpen={isOpenImage} 
          onClose={onCloseImage}
          selectedImage={selectedImage}
        />
      )}
    </>
  )
}
