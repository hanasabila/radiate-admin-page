import { Box,
        Flex,
        Image,
        Text,
        CloseButton,
        Icon,
        IconButton,
        HStack,
        Avatar,
        VStack,
        MenuList,
        MenuItem,
        MenuDivider,
        Menu,
        useDisclosure,
        Drawer,
        DrawerContent,
        MenuButton, 
        useColorModeValue} from '@chakra-ui/react'
import Logo from "../assets/LongW.png"
import {
    FiHome,
    FiUsers,
    FiSmile,
    FiFile,
    FiBell,
} from 'react-icons/fi'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';



const LinkItems = [
    { name: 'Home', icon: FiHome },
    { name: 'Users', icon: FiUsers },
    { name: 'Counselors', icon: FiSmile },
    { name: 'Courses', icon: FiFile },
];

const SidebarContent = ({ onClose, ...rest}) => {
    return (
        <Box
            transition="3s ease"
            bg="orange1"
            borderRight="1px"
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            color="white"
            fontWeight='semibold'
            {...rest}
        >
            <Flex h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Image src={Logo} />
                <CloseButton display={{ base:'flex', md:'none'}} onClick={onClose} />
            </Flex>

            {LinkItems.map((link, index) => (
                <Box key={index}
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer">
                        <Flex align="center">
                            {link.icon && (
                                <Icon
                                    mr="4"
                                    fontSize="16"
                                    as={link.icon}
                                />
                            )}
                            {link.name}
                        </Flex>
                </Box>
            ))}
        </Box>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg="white"
            borderBottomWidth="1px"
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}
        >
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<HamburgerIcon />}
            />

            <Image src={Logo} display={{ base: 'flex', md: 'none' }} />

            <HStack spacing={{ base:'0', md: '6'}}>
                <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />} />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">Justina Clark</Text>
                                    <Text fontSize="xs" color="gray900">
                                        Admin
                                    </Text>
                                </VStack>
                                <Box display={{ base:'none', md:'flex' }}>
                                    <ChevronDownIcon />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg="background"
                            borderColor="gray500">
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH="100vh" bg="gray.100">
            <SidebarContent onClose={() => onClose} display={{ base:'none', md: 'block'}} />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }}></Box>
        </Box>
    );
};

export default Sidebar;

