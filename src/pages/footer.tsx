import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  Heading,
  Separator,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import the icons
import { useColorModeValue } from "../components/ui/color-mode";

export default function Footer() {
  const bg = useColorModeValue("gray.50", "gray.950");
  const iconColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Box bg={bg} mt={20} borderTop="1px solid" borderColor="gray.100">
      <Container maxW="6xl" py={12}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={8} mb={10}>
          <Stack gap={4}>
            <Heading size="md" color="blue.600">
              Express Cleaning
            </Heading>
            <Text fontSize="sm">
              Professional janitorial solutions since 2002. Licensed, Bonded,
              and Insured.
            </Text>
            {/* Social Icons Row */}
            <Stack direction="row" gap={4}>
              <SocialIcon
                icon={<FaFacebook />}
                label="Facebook"
                // href="https://facebook.com/expresscleaning"
              />
              <SocialIcon
                icon={<FaLinkedin />}
                label="LinkedIn"
                // href="https://linkedin.com/company/express-cleaning"
              />
              <SocialIcon
                icon={<FaInstagram />}
                label="Instagram"
                // href="https://instagram.com/expresscleaning"
              />
            </Stack>
          </Stack>

          <Stack gap={4}>
            <Text fontWeight="bold">Quick Links</Text>
            <Link href="/" fontSize="sm">
              Home
            </Link>
            <Link href="/about" fontSize="sm">
              About Us
            </Link>
            <Link href="/contact" fontSize="sm">
              Contact
            </Link>
          </Stack>

          <Stack gap={4}>
            <Text fontWeight="bold">Our Services</Text>
            <Text fontSize="sm">Office Cleaning</Text>
            <Text fontSize="sm">Home Sanitation</Text>
            <Text fontSize="sm">Industrial Janitorial</Text>
          </Stack>

          <Stack gap={4}>
            <Text fontWeight="bold">US Headquarters</Text>
            <Text fontSize="sm"> Po. Box 28105 Baltimore</Text>
            <Text fontSize="sm">Maryland MD 21239</Text>
            <Text fontSize="sm" fontWeight="bold">
              (443) 856-2347
            </Text>
          </Stack>
        </SimpleGrid>

        <Separator mb={6} />

        <Text fontSize="xs" textAlign="center" color="gray.500">
          © {new Date().getFullYear()} Express Cleaning Janitorial Services. All
          rights reserved. Designed by{" "}
          <Link
            href="mailto:fasasisheriffdeen@gmail.com"
            fontWeight="bold"
            // color="red.600"
            color="gray.500"
            _hover={{
              textDecoration: "none",
              color: "blue.600",
            }}
          >
            Sheriffdeen Fasasi
          </Link>
        </Text>
      </Container>
    </Box>
  );
}

// Helper Component for Social Buttons
function SocialIcon({
  icon,
  label,
}: {
  icon: React.ReactElement;
  label: string;
}) {
  return (
    <IconButton
      aria-label={label}
      variant="ghost"
      size="md"
      color="blue.600"
      _hover={{
        bg: "blue.50",
        color: "blue.700",
        transform: "translateY(-2px)",
      }}
      transition="all 0.2s"
    >
      {icon}
    </IconButton>
  );
}
