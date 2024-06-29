import React from "react";
import {
  Grid,
  Box,
  Flex,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import samir from "/images/my.jpeg"; // Importing the image
import rafi from "/images/Rafi.jpeg"; // Importing the image

function Members() {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "white");

  const members = [
    {
      name: "Samir",
      role: "Web Developer",
      description:
        "Web developer with over 3+ years of experience in frontend and backend.",
      profileLink: "https://samiroutlook.github.io/Samir/",
      image: samir, // Adding the image for Samir
    },
    {
      name: "Rafi",
      role: "MS Office Specialist",
      description:
        "MS Office and data entry specialist with over 4+ years of experience.",
      image: rafi,
    },
    {
      name: "Roshan",
      role: "Graphic Designer",
      description:
        "Graphic designer with over 3+ years of experience in Adobe Illustrator and Canva.",
    },
    {
      name: "Arean",
      role: "Video Editor",
      description: "Video editor with over 3+ years of experience.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Flex
        w="full"
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        pt={14}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          w="full"
          maxW="1500px"
          px={4}
          justifyItems="center" // Center the items horizontally within the grid
        >
          {members.map((member, idx) => (
            <Box
              key={idx}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="lg"
              bgColor={bgColor}
              textAlign="center"
              w="full"
              maxW={{ base: "full", md: "350px", lg: "400px" }}
              h="420px"
              maxH="full"
              mt={6} // Add margin-top
              mb={6} // Add margin-bottom
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image
                borderRadius="full"
                boxSize="120px"
                src={
                  member.image ||
                  `https://via.placeholder.com/150?text=Image+${idx + 1}`
                } // Use Samir's image or a placeholder
                alt={`Profile ${member.name}`}
                mx="auto"
                mt={4}
              />
              <Text mt={4} fontWeight="bold" color={textColor}>
                {member.name}
              </Text>
              <Text mt={2} fontWeight="bold" color={textColor}>
                {member.role}
              </Text>
              <Text mt={2} color="gray.500">
                {member.description}
              </Text>
              {member.profileLink ? (
                <Button
                  as="a"
                  href={member.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  mt={4}
                  colorScheme="teal"
                >
                  Profilo
                </Button>
              ) : (
                <Button mt={4} colorScheme="teal">
                  Profilo
                </Button>
              )}
            </Box>
          ))}
        </Grid>
      </Flex>
    </motion.div>
  );
}

export default Members;
