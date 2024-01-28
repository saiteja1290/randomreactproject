import React from 'react'
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                pos={'fixed'}
                left={'4'}
                top={'4'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}
                onClick={onOpen}
            >
                <BiMenuAltLeft />
            </Button>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    {/* <div>hey</div> */}
                    <DrawerHeader>Video Hub</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>
                            <Button onClick={onClose} variant={'ghost'}>
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'}>
                                <Link to={'/videos'}>Videos</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'}>
                                <Link to={'/videos?category=free'}>Free Videos</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'}>
                                <Link to={'/upload'}>Upload</Link>
                            </Button>
                        </VStack>
                        <HStack position={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                            <Button onClick={onClose}>
                                <Link to={'/login'}>Log In</Link>

                            </Button>
                            <Button onClick={onClose}>
                                <Link to={'/signup'}>Sign Up</Link>

                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header