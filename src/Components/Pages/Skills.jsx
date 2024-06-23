import React from "react";
import { Grid, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Projects() {
  const skill = useColorModeValue("transparent.502", "transparent.50");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Flex
        w={"full"}
        h={"100vh"}
        pt={14}
        justifyContent={"space-around"}
        alignItems={"center"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box
          h={"fit-content"}
          textAlign={"center"}
          fontSize={"xl"}
          fontWeight={700}
        >
          <Text
            textDecoration={"underline"}
            textDecorationColor={"#525252"}
            textDecorationThickness={"4px"}
            mb={1}
            lineHeight={2}
            textUnderlineOffset={"5px"}
            textColor={"teal.300"}
          >
            <li>Front-End</li>
          </Text>
          <Grid
            rounded={"lg"}
            placeItems={"center"}
            w={["300px", "400px", "400px", "400px", "500px", "500px", "600px"]}
            h={["300px", "400px", "400px", "400px", "500px", "500px", "600px"]}
            templateRows={"repeat(2, 1fr)"}
            templateColumns={"repeat(2, 1fr)"}
            bg={skill}
            shadow={"md"}
          >
            <Box textAlign={"center"}>
              <CircularProgress
                value={80}
                size={["100px", "150px", "150px", "150px", "200px"]}
                thickness={10}
                color="orange.400"
              >
                <CircularProgressLabel
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  fontWeight={700}
                >
                  80%
                </CircularProgressLabel>
              </CircularProgress>
              <Text>HTML</Text>
            </Box>
            <Box textAlign={"center"}>
              <CircularProgress
                value={75}
                thickness={10}
                color="blue.400"
                size={["100px", "150px", "150px", "150px", "200px"]}
              >
                <CircularProgressLabel
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  fontWeight={700}
                >
                  75%
                </CircularProgressLabel>
              </CircularProgress>
              <Text>CSS</Text>
            </Box>
            <Box textAlign={"center"}>
              <CircularProgress
                value={70}
                thickness={10}
                color="yellow.400"
                size={["100px", "150px", "150px", "150px", "200px"]}
              >
                <CircularProgressLabel
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  fontWeight={700}
                >
                  70%
                </CircularProgressLabel>
              </CircularProgress>
              <Text>JavaScript</Text>
            </Box>
            <Box textAlign={"center"}>
              <CircularProgress
                value={85}
                thickness={10}
                color="cyan.400"
                size={["100px", "150px", "150px", "150px", "200px"]}
              >
                <CircularProgressLabel
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  fontWeight={700}
                >
                  85%
                </CircularProgressLabel>
              </CircularProgress>
              <Text>Tailwind-CSS</Text>
            </Box>
          </Grid>
        </Box>
        <Box
          h={"fit-content"}
          textAlign={"center"}
          fontSize={"xl"}
          fontWeight={700}
        >
          <Text
            textDecoration={"underline"}
            textDecorationColor={"#525252"}
            textDecorationThickness={"4px"}
            mb={1}
            lineHeight={2}
            textUnderlineOffset={"5px"}
            textColor={"teal.300"}
          >
            <li>Back-End</li>
          </Text>

          <Grid
            rounded={"lg"}
            placeItems={"center"}
            w={["300px", "400px", "400px", "400px", "500px", "500px", "600px"]}
            h={["300px", "400px", "400px", "400px", "500px", "500px", "600px"]}
            templateRows={"repeat(2, 1fr)"}
            templateColumns={"repeat(2, 1fr)"}
            bg={skill}
            shadow={"md"}
          >
            <Box textAlign={"center"}>
              <CircularProgress
                value={60}
                size={["100px", "150px", "150px", "150px", "200px"]}
                thickness={10}
                color="blue.500"
              >
                <CircularProgressLabel
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  fontWeight={700}
                >
                  60%
                </CircularProgressLabel>
              </CircularProgress>
              <Text>React JS</Text>
            </Box>
            <Box textAlign={"center"}>
              <CircularProgress
                value={65}
                size={["100px", "150px", "150px", "150px", "200px"]}
                thickness={10}
                color="blue.400"
              >
                <CircularProgressLabel
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  fontWeight={700}
                >
                  65%
                </CircularProgressLabel>
              </CircularProgress>
              <Text>Chakra-UI</Text>
            </Box>
            <Box textAlign={"center"}>
              <CircularProgress
                value={50}
                size={["100px", "150px", "150px", "150px", "200px"]}
                thickness={10}
                color="yellow.400"
              >
                <CircularProgressLabel
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  fontWeight={700}
                >
                  50%
                </CircularProgressLabel>
              </CircularProgress>
              <Text>Next UI</Text>
            </Box>
            <Box textAlign={"center"}>
              <CircularProgress
                value={60}
                size={["100px", "150px", "150px", "150px", "200px"]}
                thickness={10}
                color="cyan.400"
              >
                <CircularProgressLabel
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  fontWeight={700}
                >
                  60%
                </CircularProgressLabel>
              </CircularProgress>
              <Text>Next JS</Text>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </motion.div>
  );
}

export default Projects;
