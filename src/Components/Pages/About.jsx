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
              <li>👨‍💼 About Me</li>
            </Text>
            Hello, I am Samir. I was born in 2011 19 July. My home district is
            Zazira Soriotpur. I was shifted to Dhaka with my hole family in
            2016. The journey of Web-Development was started at 2018. Currently
            I'm studying in class VII at Government Laboratory High School. I
            <span color="red"> &#x2764;</span> to listen Music, Programming,
            Bike-Riding 🏍️.
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
              <li>&#x270E; Work</li>
            </Text>
            My working started alone. From 2020 i started to work with my school
            friends. It have been passed a long time working with them. Then in
            2023 we started a youtube channel{" "}
            <Text display={"inline-block"} color="blue.300">
              Codex BD
            </Text>
            . After that i joined my school ITC club 🖥️ with my friends and
            seniors. Now i am finding a part-time online job.
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
            My first school was Little Angles School. When i was only in class
            'I' i shifted to my current school 🏢 Government Laboratory High
            School. I want to get admitted in Buet or Notrdem collage for
            feature. I learned Web-Development from only Youtube. I learn too
            much from it. I want to be a Full-Stack Web-Developer in future.
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
}

export default About;
