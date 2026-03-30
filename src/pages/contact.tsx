import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  Stack,
  SimpleGrid,
  Text,
  Icon,
  Container,
  Link,
  Flex,
  Circle,
  Image,
  Badge,
} from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaLeaf,
  FaAward,
} from "react-icons/fa";
import { useColorModeValue } from "../components/ui/color-mode";

export default function Contact() {
  const cardBg = useColorModeValue("white", "gray.900");
  const sectionBg = useColorModeValue("blue.50", "gray.950");

  // High-quality trust image
  const trustImage = "/images/contactimage.JPG";

  return (
    <Box>
      {/* 1. Hero Header */}
      <Box bg="blue.600" color="white" py={{ base: 16, md: 24 }}>
        <Container maxW="4xl" textAlign="center">
          <Badge colorPalette="white" mb={4} px={3}>
            Reliable • Licensed • Insured
          </Badge>
          <Heading size="3xl" mb={6} fontWeight="extrabold">
            Get Your Free Estimate
          </Heading>
          <Text fontSize="xl" opacity={0.9}>
            Serving Baltimore and surrounding areas with 22 years of excellence.
          </Text>
        </Container>
      </Box>

      {/* 2. Main Contact Section (Rearranged for Size) */}
      <Container maxW="6xl" py={20} mt={-10}>
        <Stack gap={16}>
          {/* TOP ROW: Large Form & Trust Image */}
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            gap={12}
            alignItems="stretch"
          >
            {/* THE FORM: Now significantly larger and more prominent */}
            <Box
              bg={cardBg}
              p={{ base: 8, md: 12 }}
              borderRadius="3xl"
              boxShadow="2xl"
              borderWidth="1px"
              borderColor={useColorModeValue("gray.100", "gray.800")}
            >
              <Heading size="lg" mb={8} color="blue.600">
                Request a Service
              </Heading>
              <form action="https://formspree.io/f/mjgaloyq" method="POST">
                <Stack gap={6}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                    <Input
                      placeholder="Full Name"
                      name="name"
                      size="xl"
                      variant="subtle"
                      required
                    />
                    <Input
                      placeholder="Email Address"
                      type="email"
                      name="email"
                      size="xl"
                      variant="subtle"
                      required
                    />
                  </SimpleGrid>
                  <Input
                    placeholder="Service Type (Commercial, Residential, Post-Construction)"
                    name="service"
                    size="xl"
                    variant="subtle"
                  />
                  <Textarea
                    placeholder="Tell us about your space (Sq Ft, specific needs...)"
                    name="message"
                    size="xl"
                    variant="subtle"
                    rows={6}
                    required
                  />
                  <Button
                    type="submit"
                    colorPalette="blue"
                    size="xl"
                    width="full"
                    height="70px"
                    fontSize="xl"
                    fontWeight="bold"
                    _hover={{ transform: "scale(1.02)" }}
                  >
                    Send Request Now
                  </Button>
                </Stack>
              </form>
            </Box>

            {/* TRUST IMAGE & QUICK INFO */}
            <Stack gap={8} justify="center">
              <Box
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="xl"
                height="400px"
              >
                <Image
                  src={trustImage}
                  alt="Professional Cleaning"
                  objectFit="cover"
                  w="full"
                  h="full"
                />
              </Box>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                <ContactItem
                  icon={FaPhoneAlt}
                  label="Call"
                  value="443-856-2347"
                  href="tel:4438562347"
                />
                <ContactItem
                  icon={FaEnvelope}
                  label="Email"
                  value="contactus@expresscleaning.com"
                  href="mailto:contactus@expresscleaning.com"
                />
              </SimpleGrid>
            </Stack>
          </SimpleGrid>

          {/* 3. FIXED MAP SECTION */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">
              Our Baltimore Service Location
            </Heading>
            <Box
              h="450px"
              w="full"
              borderRadius="3xl"
              overflow="hidden"
              boxShadow="lg"
              border="8px solid"
              borderColor={cardBg}
            >
              {/* Replace the 'q=' part with your actual address if needed */}
              <iframe
                title="Express Cleaning Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.662125345638!2d-76.5413039!3d39.3412345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c80629630c729b%3A0xc6c4f9f2584100!2s6671%20Knottwood%20Ct%2C%20Baltimore%2C%20MD%2021214!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              />
            </Box>
            <Text
              textAlign="center"
              mt={4}
              color="gray.500"
              fontWeight="medium"
            >
              Po. Box 28105 Baltimore Maryland 21239
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

// Custom Contact Detail Component
function ContactItem({ icon, label, value, href }: any) {
  const bg = useColorModeValue("blue.50", "whiteAlpha.100");
  return (
    <Flex align="center" gap={4} p={6} bg={bg} borderRadius="2xl">
      <Circle size="50px" bg="blue.500" color="white">
        <Icon as={icon} boxSize={5} />
      </Circle>
      <Box>
        <Text
          fontSize="xs"
          fontWeight="bold"
          color="gray.500"
          textTransform="uppercase"
        >
          {label}
        </Text>
        {href ? (
          <Link href={href} fontWeight="bold" _hover={{ color: "blue.500" }}>
            {value}
          </Link>
        ) : (
          <Text fontWeight="bold">{value}</Text>
        )}
      </Box>
    </Flex>
  );
}
