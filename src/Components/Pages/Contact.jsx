import React, { useState } from "react";
import {
  Grid,
  Button,
  Input,
  Stack,
  Flex,
  Textarea,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";

function Contact() {
  const transparent = useColorModeValue("transparent.502", "transparent.50");

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        ...formData,
        access_key: "b356b3b3-d5d9-494b-a082-a6420a2acbc3", // Replace with your Web3Forms access key
      });

      if (response.data.success) {
        setSuccessMessage("Form submitted successfully!");
        setFormData({
          name: "",
          address: "",
          phone: "",
          message: "",
        });
      } else {
        setErrorMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Flex
        w={"full"}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack as="form" spacing={3} w={"450px"} px={4} onSubmit={handleSubmit}>
          <Input
            w={"full"}
            sx={{ transition: "all 0.1s ease-in-out" }}
            variant="flushed"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isRequired
          />
          <Input
            w={"full"}
            sx={{ transition: "all 0.1s ease-in-out" }}
            variant="flushed"
            placeholder="Email"
            name="address"
            value={formData.address}
            onChange={handleChange}
            isRequired
          />
          <Input
            w={"full"}
            sx={{ transition: "all 0.1s ease-in-out" }}
            variant="flushed"
            placeholder="Phone Number or Country"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isRequired
          />
          <Textarea
            w={"full"}
            sx={{ transition: "all 0.1s ease-in-out" }}
            variant="filled"
            h={"20vh"}
            textAlign={"top"}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            isRequired
          />
          <Button w={"90px"} mx={"auto"} type="submit" isLoading={isSubmitting}>
            Submit
          </Button>
          {successMessage && (
            <Box color="green.500" textAlign="center">
              {successMessage}
            </Box>
          )}
          {errorMessage && (
            <Box color="red.500" textAlign="center">
              {errorMessage}
            </Box>
          )}
        </Stack>
      </Flex>
    </motion.div>
  );
}

export default Contact;
