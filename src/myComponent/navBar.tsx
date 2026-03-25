import {
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
  Container,
  Link as ChakraLink,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";
import { FaShieldAlt } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import {
  ColorModeButton,
  useColorModeValue,
} from "../components/ui/color-mode";

// 1. CLEAR TYPES FOR TYPESCRIPT
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

// 2. STABLE NAVLINK COMPONENT
const NavLink = ({ to, children, onClick }: NavLinkProps) => {
  // Explicitly defining colors for high visibility on iPhone screens
  const textColor = useColorModeValue("gray.800", "white");
  const hoverBg = useColorModeValue("blue.50", "whiteAlpha.100");

  return (
    <ChakraLink
      asChild
      fontWeight="bold"
      fontSize="md"
      color={textColor}
      display="block"
      py={2}
      px={3}
      borderRadius="md"
      _hover={{
        color: "blue.600",
        textDecoration: "none",
        bg: hoverBg,
      }}
      onClick={onClick}
    >
      <RouterLink to={to}>{children}</RouterLink>
    </ChakraLink>
  );
};

export default function Navbar() {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("white", "gray.950")}
      px={4}
      shadow="sm"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Container maxW="6xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* LOGO AREA */}
          <RouterLink to="/" style={{ textDecoration: "none" }}>
            <Flex align="center" gap={3}>
              <Box
                bg="blue.600"
                p={2}
                borderRadius="lg"
                display="flex"
                alignItems="center"
              >
                <Icon as={FaShieldAlt} color="white" boxSize={5} />
              </Box>
              <Text
                fontWeight="black"
                letterSpacing="tighter"
                fontSize="xl"
                color={useColorModeValue("gray.800", "white")}
              >
                EXPRESS{" "}
                <Text as="span" color="blue.600">
                  CLEANING
                </Text>
              </Text>
            </Flex>
          </RouterLink>

          {/* DESKTOP & BUTTONS */}
          <Flex align="center" gap={4}>
            <Stack
              direction="row"
              gap={6}
              display={{ base: "none", md: "flex" }}
              mr={4}
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Stack>

            <ColorModeButton />

            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={open ? onClose : onOpen}
              variant="ghost"
              aria-label="Toggle Menu"
            >
              {open ? <LuX /> : <LuMenu />}
            </IconButton>
          </Flex>
        </Flex>
      </Container>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <Box
          pb={8}
          display={{ md: "none" }}
          bg={useColorModeValue("white", "gray.950")}
          px={6}
          borderTop="1px solid"
          borderColor={useColorModeValue("gray.100", "gray.800")}
        >
          <Stack as="nav" gap={2} pt={4}>
            <NavLink to="/" onClick={onClose}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={onClose}>
              Services
            </NavLink>
            <NavLink to="/about" onClick={onClose}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={onClose}>
              Contact
            </NavLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
