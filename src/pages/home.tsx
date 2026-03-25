import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  Button,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";
import { Link as RouterLink } from "react-router-dom";
import { FaLeaf, FaBuilding, FaHome, FaTools } from "react-icons/fa";

export default function Home() {
  const heroImage =
    "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop";

  return (
    <Box>
      {/* 1. Hero Section */}
      <Box
        w="full"
        minH={{ base: "70vh", md: "80vh" }}
        backgroundImage={`url('${heroImage}')`}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          bg="blackAlpha.700"
          display="flex"
          alignItems="center"
        >
          <Container maxW="4xl" textAlign="center" color="white">
            <Heading size="3xl" mb={6} fontWeight="extrabold">
              Express Cleaning Janitorial Services
            </Heading>

            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="blue.300"
              mb={6}
              fontStyle="italic"
            >
              "No Job Too Big, No Job Too Small. We At Express Clean It All"
            </Text>

            <Text fontSize="lg" opacity={0.9} mb={8}>
              Professional cleaning solutions across the US since 2002.
              Licensed, Bonded, and Insured.
            </Text>

            <Stack
              direction={{ base: "column", sm: "row" }}
              justify="center"
              gap={4}
            >
              <Button size="xl" colorPalette="blue" px={10} asChild>
                <RouterLink to="/contact">Request a Free Quote</RouterLink>
              </Button>
              <Button
                size="xl"
                variant="outline"
                colorPalette="white"
                px={10}
                asChild
              >
                <RouterLink to="/about">Read more</RouterLink>
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>

      {/* 2. Unified Features Section */}
      <Box bg={useColorModeValue("gray.50", "gray.950")}>
        <Container maxW="6xl" py={20}>
          <Heading textAlign="center" mb={4}>
            Why Choose Express Cleaning?
          </Heading>
          <Text textAlign="center" color="gray.500" mb={12} fontSize="lg">
            Setting the elite standard in sanitation and sustainability.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
            <Feature
              icon={FaBuilding}
              title="Commercial"
              desc="Complete office and facility maintenance tailored to your schedule."
            />
            <Feature
              icon={FaHome}
              title="Residential"
              desc="Detailed home cleaning that lets you reclaim your weekend."
            />
            <Feature
              icon={FaTools}
              title="Specialized"
              desc="Post-construction and deep-cleaning for high-traffic environments."
            />

            {/* Eco-Friendly Card with distinct styling */}
            <Feature
              icon={FaLeaf}
              title="Eco-Friendly"
              desc="We use 100% biodegradable products. Safe for your family, pets, and the planet."
              isEco
            />
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

// Updated Feature Component with Icon support
function Feature({
  icon,
  title,
  desc,
  isEco,
}: {
  icon: any;
  title: string;
  desc: string;
  isEco?: boolean;
}) {
  const cardBg = useColorModeValue(
    isEco ? "green.50" : "white",
    isEco ? "green.900/20" : "gray.900",
  );
  const borderColor = useColorModeValue(
    isEco ? "green.200" : "gray.100",
    isEco ? "green.800" : "gray.800",
  );
  const accentColor = isEco ? "green.500" : "blue.500";

  return (
    <Box
      p={8}
      bg={cardBg}
      borderRadius="xl"
      borderWidth="1px"
      borderColor={borderColor}
      _hover={{
        shadow: "2xl",
        transform: "translateY(-5px)",
        borderColor: accentColor,
      }}
      transition="all 0.3s"
    >
      <Flex align="center" gap={3} mb={4}>
        <Icon as={icon} color={accentColor} boxSize={6} />
        <Heading
          size="md"
          color={isEco ? "green.700" : "inherit"}
          _dark={{ color: isEco ? "green.300" : "white" }}
        >
          {title}
        </Heading>
      </Flex>
      <Text
        color={useColorModeValue("gray.600", "gray.400")}
        fontWeight={isEco ? "medium" : "normal"}
      >
        {desc}
      </Text>
    </Box>
  );
}
