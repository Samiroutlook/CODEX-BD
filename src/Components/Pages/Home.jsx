import React from "react";
import { Box, Flex, useColorModeValue, Text, Image } from "@chakra-ui/react";
import { Stack, Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Home() {
  const transparent = useColorModeValue("transparent.502", "transparent.50");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Box w={"full"} h={"100vh"} pt={14}>
        <Flex justifyContent={"center"} w={"full"} px={6}>
          <Box
            bg={transparent}
            mt={"32px"}
            w={"450px"}
            p={3}
            rounded={"lg"}
            mx={"auto"}
            fontWeight={600}
            textAlign={"center"}
          >
            Hello, I'm a Web-Developer from Bangladesh.
          </Box>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          w={"full"}
          mt={4}
        >
          <Image
            src="./images/my.jpeg"
            bg={"red"}
            boxSize="200px"
            borderRadius="full"
          />
          <Text
            fontWeight={600}
            bg={transparent}
            fontSize={"lg"}
            py={1}
            mt={2}
            px={3}
            textAlign={"center"}
            rounded={"md"}
          >
            CODEX BD
          </Text>
          <Text w={["95vw", "460px", "500px"]} textAlign={"center"} mt={4}>
            Hi, I'm Samir! I'm a passionate web developer with 3 years of
            experience, currently studying in Class VII. My journey in web
            development has equipped me with a robust skill set in both frontend
            and backend technologies.
          </Text>
        </Flex>
        <Stack
          spacing={4}
          direction="row"
          align="center"
          justify={"center"}
          mt={5}
        >
          <Button colorScheme="teal" color={"black"} size="md">
            Let's Talk
          </Button>
          <Button colorScheme="teal" color={"black"} size="md">
            Hire Me
          </Button>
        </Stack>
        <Stack direction="row" justifyContent="center" mt={5}>
          <a
            href="https://github.com/Samiroutlook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              _hover={{ color: "teal.200" }}
              size="lg"
              fontSize="30px"
              icon={<i className="fa-brands fa-github"></i>}
              bg={transparent}
            />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61557586985348"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              _hover={{ color: "teal.200" }}
              size="lg"
              fontSize="30px"
              icon={<i className="fa-brands fa-facebook"></i>}
              bg={transparent}
            />
          </a>

          <a
            href="https://www.instagram.com/its_samir._14/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              _hover={{ color: "teal.200" }}
              size="lg"
              fontSize="30px"
              icon={<i className="fa-brands fa-instagram"></i>}
              bg={transparent}
            />
          </a>
        </Stack>
      </Box>
    </motion.div>
  );
}

export default Home;
