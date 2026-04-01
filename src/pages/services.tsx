import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Stack,
  Icon,
  Button,
  List,
  Badge,
  Flex,
  Image,
} from "@chakra-ui/react";
import {
  FaCheckCircle,
  FaBuilding,
  FaHome,
  FaTools,
  FaHospital,
  FaLeaf,
  FaBrush,
  FaTint, // Added for Power Washing
} from "react-icons/fa";
import { useColorModeValue } from "../components/ui/color-mode";
import { Link as RouterLink } from "react-router-dom";

export default function Services() {
  const sectionBg = useColorModeValue("blue.50", "gray.900");
  const mainImage = "/images/serviceimage.JPG";

  return (
    <Box>
      {/* Hero Header */}
      <Box bg="blue.600" color="white" py={20}>
        <Container maxW="4xl" textAlign="center">
          <Flex justify="center" gap={3} mb={4}>
            <Badge colorPalette="white" px={3}>
              Our Expertise
            </Badge>
            <Badge
              colorPalette="green"
              px={3}
              variant="solid"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <Icon as={FaLeaf} boxSize={3} /> 100% Biodegradable Products
            </Badge>
          </Flex>
          <Heading size="3xl" mb={6} fontWeight="extrabold">
            Tailored Cleaning Solutions
          </Heading>
          <Text fontSize="xl" opacity={0.9}>
            From Baltimore office suites to residential estates, we combine
            elite sanitation with eco-conscious biodegradable products.
          </Text>
        </Container>
      </Box>

      {/* Visual Proof Header */}
      <Container maxW="6xl" mt={-10}>
        <Box
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="2xl"
          height={{ base: "200px", md: "400px" }}
        >
          <Image
            src={mainImage}
            alt="Pristine cleaning results"
            w="full"
            h="full"
            objectFit="cover"
          />
        </Box>
      </Container>

      {/* Main Services Grid */}
      <Container maxW="6xl" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
          <ServiceCard
            icon={FaBuilding}
            title="Commercial Janitorial"
            description="Daily or weekly maintenance for corporate offices and retail spaces using non-toxic agents."
            items={[
              "Trash Removal & Recycling",
              "Eco-Friendly Restroom Sanitation",
              "Floor Buffing & Care",
              "Biodegradable Surface Cleaning",
            ]}
          />

          <ServiceCard
            icon={FaBrush}
            title="Carpet Cleaning"
            description="Deep steam cleaning and stain removal using high-performance, eco-friendly extractors."
            items={[
              "Deep Fabric Steaming",
              "Biodegradable Stain Removal",
              "High-Traffic Area Restoration",
              "Eco-Safe Deodorizing",
              "Quick-Dry Tech Solutions",
            ]}
          />

          {/* NEW: Power Washing Service */}
          <ServiceCard
            icon={FaTint}
            title="Power Washing"
            description="Exterior pressure washing for siding, decks, and walkways using eco-safe detergents."
            items={[
              "Siding & Brick Deep Wash",
              "Driveway & Walkway Clearing",
              "Deck & Patio Restoration",
              "Bio-Safe Algae & Mold Removal",
              "Commercial Exterior Maintenance",
            ]}
          />

          <ServiceCard
            icon={FaHospital}
            title="Medical & Healthcare"
            description="Strict OSHA-compliant sanitation using medical-grade, biodegradable disinfectants."
            items={[
              "Certified Surface Disinfecting",
              "Exam Room Sterilization",
              "Non-Toxic Waiting Area Care",
              "Eco-Safe Biohazard Awareness",
            ]}
          />

          <ServiceCard
            icon={FaHome}
            title="Residential Deep Clean"
            description="Premium home cleaning focusing on health, allergens, and pet-safe biodegradable products."
            items={[
              "Kitchen Degreasing (Bio-Safe)",
              "Chemical-Free Bathroom Detailing",
              "Allergen-Focused Vacuuming",
              "Pet-Safe Floor Cleaning",
            ]}
          />

          <ServiceCard
            icon={FaTools}
            title="Post-Construction"
            description="Removing heavy debris and fine dust with systematic, eco-conscious methods."
            items={[
              "Heavy Debris Removal",
              "Fine Dust Extraction",
              "Eco-Friendly Sticker/Label Removal",
              "Final Polish & Air Freshening",
            ]}
          />
        </SimpleGrid>
      </Container>

      {/* Call to Action Banner */}
      <Box bg={sectionBg} py={16}>
        <Container maxW="4xl" textAlign="center">
          <Icon as={FaLeaf} color="green.500" boxSize={10} mb={4} />
          <Heading size="lg" mb={4}>
            Safe for Your Space, Safe for the Planet
          </Heading>
          <Text mb={8} color="gray.600" _dark={{ color: "gray.400" }}>
            We exclusively use **biodegradable products** across all our
            services. No harsh chemicals, no toxic fumes—just a brilliant,
            healthy clean for your Baltimore home or business.
          </Text>
          <Button
            asChild
            colorPalette="blue"
            size="xl"
            px={10}
            _hover={{ transform: "scale(1.05)" }}
          >
            <RouterLink to="/contact">Get My Eco-Friendly Quote</RouterLink>
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

function ServiceCard({ icon, title, description, items }: any) {
  return (
    <Stack
      p={8}
      borderWidth="1px"
      borderRadius="2xl"
      bg={useColorModeValue("white", "gray.800")}
      shadow="sm"
      transition="all 0.3s"
      _hover={{
        shadow: "xl",
        borderColor: "blue.400",
        transform: "translateY(-5px)",
      }}
    >
      <Flex align="center" gap={4} mb={4}>
        <Icon as={icon} boxSize={10} color="blue.500" />
        <Heading size="lg">{title}</Heading>
      </Flex>

      <Text color="gray.500" mb={6}>
        {description}
      </Text>

      <List.Root gap={3} variant="plain">
        {items.map((item: string) => (
          <List.Item key={item} display="flex" alignItems="center" gap={2}>
            <Icon as={FaCheckCircle} color="green.500" />
            <Text fontSize="sm" fontWeight="medium">
              {item}
            </Text>
          </List.Item>
        ))}
      </List.Root>
    </Stack>
  );
}
