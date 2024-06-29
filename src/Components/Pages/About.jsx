import React from "react";
import { Grid, Box, Text, Flex, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Box w={"full"} h={"100vh"}>
        <Flex
          py={70}
          justifyContent={"space-around"}
          alignItems={"center"}
          flexDirection={"column"}
          h={"100vh"}
          fontSize={["2xl", "3xl", "xl"]}
          fontWeight={600}
        >
          <Box
            fontSize={["sm", "sm", "lg"]}
            w={["98vw", "70vw"]}
            textAlign={"left"}
            overflow={"auto"}
            bg={"transparent"}
            rounded={"md"}
            p={4}
          >
            <Text
              textDecoration={"underline"}
              textColor={"blue.400"}
              textDecorationColor={"#525252"}
              textDecorationThickness={"4px"}
              mb={1}
              lineHeight={2}
              textUnderlineOffset={"5px"}
            >
              <li>👨‍💼 About Us</li>
            </Text>
            We are here to help you with any kind of services. Our journey has
            been started from 2023. We are fully confident about our members and
            our skills. Each of our members have good experience of there own
            skills. We want to represent our country with{" "}
            <Text display={"inline-block"} color="blue.300">
              Codex BD
            </Text>
            .
          </Box>
          <Box
            fontSize={["sm", "sm", "lg"]}
            w={["98vw", "70vw"]}
            textAlign={"left"}
            bg={"transparent"}
            overflow={"auto"}
            rounded={"md"}
            p={4}
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
              <li>&#x270E; Services</li>
            </Text>
            We have worked as the teachers in our schools IT Club 🖥️. From 2020
            we started to work with some of our school friends. It have been
            passed a long time working with them. Then in 2023 we started the
            youtube channel{" "}
            <Text display={"inline-block"} color="blue.300">
              Codex BD
            </Text>
            .
          </Box>
          <Box
            fontSize={["sm", "sm", "lg"]}
            w={["98vw", "70vw"]}
            textAlign={"left"}
            overflow={"hidden"}
            bg={"transparent"}
            rounded={"md"}
            p={4}
            overflowY={"auto"}
          >
            <Text
              textDecoration={"underline"}
              textDecorationColor={"#525252"}
              textDecorationThickness={"4px"}
              mb={1}
              lineHeight={2}
              textUnderlineOffset={"5px"}
              textColor={"red.300"}
            >
              <li>&#x270D; Education</li>
            </Text>
            Every members of our channel reads in class VII. We are studying
            together from 2018 to now it will be continued. We all are intrusted
            in computer skills 🖥️.
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
}

export default About;
