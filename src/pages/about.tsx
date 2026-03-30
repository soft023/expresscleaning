import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  Image,
  SimpleGrid,
  Icon,
  Flex,
  VStack,
  Badge,
} from "@chakra-ui/react";
import {
  FaAward,
  FaUsers,
  FaEye,
  FaRocket,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import { useColorModeValue } from "../components/ui/color-mode";

export default function About() {
  const sectionBg = useColorModeValue("blue.50", "gray.900");

  // Tomorrow we will move this image into your /public folder
  const teamImage = "/images/aboutimage.JPG";

  return (
    <Box>
      {/* 1. Hero Header */}
      <Box bg="blue.600" color="white" py={20}>
        <Container maxW="4xl" textAlign="center">
          <Badge colorPalette="green" mb={4} px={3} variant="solid">
            Eco-Conscious Excellence
          </Badge>
          <Heading size="3xl" mb={6} fontWeight="extrabold">
            The Express Cleaning Story
          </Heading>
          <Text fontSize="xl" opacity={0.9}>
            A legacy of professional janitorial excellence spanning two decades.
          </Text>
        </Container>
      </Box>

      {/* 2. Story & Image Section */}
      <Container maxW="6xl" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={12} alignItems="center">
          <Box borderRadius="2xl" overflow="hidden" boxShadow="2xl">
            <Image
              src={teamImage}
              alt="Professional Express Cleaning Team"
              objectFit="cover"
              h={{ base: "300px", md: "500px" }}
              w="full"
              // fallbackSrc="https://via.placeholder.com/1200x800?text=Express+Cleaning+Team"
            />
          </Box>

          <Stack gap={6}>
            <Heading size="xl" color="blue.600">
              From New Jersey to Baltimore
            </Heading>
            <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.400" }}>
              Founded in **New Jersey in 2002**, Express Cleaning began with a
              vision to redefine janitorial standards through reliability and
              hard work. After years of successful operation in the Garden
              State, we brought our expertise to **Baltimore**, where we
              continue to treat every facility as if it were our own.
            </Text>
            <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.400" }}>
              Today, we prioritize health by using **100% biodegradable
              products** that ensure a safe environment for Baltimore’s diverse
              businesses, from corporate offices to specialized facilities.
            </Text>
            <Box
              p={6}
              borderLeft="4px solid"
              borderColor="green.400"
              bg={useColorModeValue("green.50", "green.900/20")}
            >
              <Text
                fontWeight="bold"
                fontSize="lg"
                fontStyle="italic"
                color="green.700"
                _dark={{ color: "green.300" }}
              >
                "We don't just clean for appearance; we clean for health,
                carrying our 20-year legacy of New Jersey excellence into the
                heart of Maryland."
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* 3. MISSION & VISION SECTION */}
      <Box bg={sectionBg} py={20}>
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={16}>
            <VStack align="start" gap={4}>
              <Flex align="center" gap={3}>
                <Icon as={FaRocket} color="blue.500" boxSize={6} />
                <Heading size="lg">Our Mission</Heading>
              </Flex>
              <Text
                fontSize="lg"
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
                To provide elite, **eco-friendly**, and systematic cleaning
                solutions that empower businesses to thrive. We are committed to
                using biodegradable agents that protect both your professional
                image and the planet.
              </Text>
            </VStack>

            <VStack align="start" gap={4}>
              <Flex align="center" gap={3}>
                <Icon as={FaEye} color="blue.500" boxSize={6} />
                <Heading size="lg">Our Vision</Heading>
              </Flex>
              <Text
                fontSize="lg"
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
                To be the most trusted name in US janitorial services,
                recognized for leading the industry toward a **greener future**
                through innovation, integrity, and sustainable sanitation
                practices.
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* 4. CORE VALUES */}
      <Container maxW="6xl" py={20}>
        <Heading textAlign="center" mb={16}>
          Our Core Values
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          <ValueCard
            icon={FaHeart}
            title="Integrity First"
            desc="We operate with transparency. Being licensed, bonded, and insured isn't just a status—it's our promise of accountability."
          />
          <ValueCard
            icon={FaAward}
            title="Excellence Always"
            desc="We don't believe in 'clean enough.' Our teams are trained to hit every corner, ensuring a pristine finish every single time."
          />
          <ValueCard
            icon={FaLeaf}
            title="Sustainability"
            color="green.500"
            desc="Our commitment to the environment is absolute. We exclusively use biodegradable cleaning products to ensure a non-toxic workspace."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function ValueCard({ icon, title, desc, color = "blue.500" }: any) {
  return (
    <VStack
      p={8}
      bg={useColorModeValue("white", "gray.800")}
      borderRadius="2xl"
      shadow="md"
      align="start"
      gap={4}
      borderTop="4px solid"
      borderColor={color}
      _hover={{ shadow: "xl", transform: "translateY(-5px)" }}
      transition="all 0.3s"
    >
      <Icon as={icon} boxSize={8} color={color} />
      <Heading size="md">{title}</Heading>
      <Text color="gray.500" fontSize="sm">
        {desc}
      </Text>
    </VStack>
  );
}
