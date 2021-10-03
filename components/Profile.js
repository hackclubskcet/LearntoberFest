import React, { useRef, useState } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";
import Router from "next/router";

const ProfileComponent = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const universityRef = useRef();

  let [nameError, setNameErrorState] = useState(false);
  let [emailError, setEmailErrorState] = useState(false);
  let [universityError, setUniversityErrorState] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(props.loggedIn);
  const [profileUpdationFailure, setProfileUpdationFailure] = useState(false);

  //TODO UPDATE NEW UNIVERSITIES HERE
  var universities = [
    "Sri Krishna College of Engineering and Technology",
    "Chandigarh Group of Colleges",
    "Other",
  ];

  let function_map = {
    name: setNameErrorState,
    email: setEmailErrorState,
    university: setUniversityErrorState,
  };

  let hasError = false;

  function profileUpdationFailed() {
    setProfileUpdationFailure(true);
    setLoading(false);
  }

  function setError(key, value) {
    hasError = true;
    function_map[key](value);
  }

  function resetErrors() {
    hasError = false;
    setNameErrorState(false);
    setEmailErrorState(false);
    setUniversityErrorState(false);
  }

  function hasAnyError() {
    return hasError;
  }

  function validate() {
    //Resetting previous errors
    resetErrors();

    //Name validation
    var name = nameRef.current;

    if (name.value === "") {
      setError("name", "Please enter your name");
    }

    //Email validation
    var email = emailRef.current;

    function validate_email(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    if (email.value === "") {
      setError("email", "Please enter your university email");
    } else if (!validate_email(email.value)) {
      setError("email", "Please enter a valid email address");
    }

    // University validation
    var university = universityRef.current;

    if (university.value === "") {
      setError("university", "Please choose your university to sign up");
    } else if (universities.indexOf(university.value) === -1) {
      setError("university", "Please choose a valid university");
      console.log("Trying to heck xDDD");
    }

    return;
  }

  async function handleProfileUpdation(e) {
    e.preventDefault();

    if (!loggedIn) {
      try {
        setLoading(true);

        validate();

        var hasError = hasAnyError();

        if (hasError) {
          setLoading(false);
          return;
        } else {
          var user = supabase.auth.user();
          await updateProfile(user);

          Router.push("/dashboard");
        }
      } catch (error) {
        profileUpdationFailed();
        alert(error.message);
      }
    }
  }

  async function updateProfile(user) {
    if (!profileUpdationFailure) {
      try {
        const updates = {
          id: user.id,
          name: nameRef.current.value,
          email: emailRef.current.value.toLowerCase(),
          university: universityRef.current.value,
          updated_at: new Date(),
        };

        let { error } = await supabase.from("profiles").upsert(updates, {
          returning: "minimal",
        });

        if (error) {
          profileUpdationFailed();
          throw error;
        }
      } catch (error) {
        profileUpdationFailed();
        alert(error.message);
      }
    }
  }

  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 10, lg: 10, xl: 10 }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            mt={{ base: 10 }}
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
          >
            <Box
              textAlign="center"
              w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
              mx="auto"
            >
              <chakra.h1
                fontSize={{ base: "2xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
                mt={{ base: "10" }}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Profile{" "}
                </chakra.span>
              </chakra.h1>
              <chakra.h1
                fontSize={{ base: "5xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              ></chakra.h1>

              <Stack
                direction={{ base: "column", sm: "column", md: "column" }}
                mb={{ base: 4, md: 8 }}
                mt={{ base: 10, md: 8 }}
                spacing={{ base: 7, md: 2 }}
                justifyContent="center"
              >
                <FormControl id="name" isInvalid={nameError} isRequired>
                  <FormLabel>Full name</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Your first and last name"
                      type="text"
                      ref={nameRef}
                      required={true}
                      defaultValue={props.name}
                    />
                  </InputGroup>
                  <FormErrorMessage>{nameError}</FormErrorMessage>
                </FormControl>
                <br />
                <br />
                <FormControl email isInvalid={emailError} isRequired>
                  <FormLabel>University email address</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Your first and last name"
                      type="email"
                      ref={emailRef}
                      required={true}
                      defaultValue={props.email}
                    />
                  </InputGroup>
                  <FormErrorMessage>{emailError}</FormErrorMessage>
                </FormControl>
                <br />
                <br />
                <FormControl
                  id="university"
                  isInvalid={universityError}
                  isRequired
                >
                  <FormLabel>Year of joining</FormLabel>
                  <InputGroup>
                    <Select
                      type="text"
                      required={true}
                      placeholder="Select your university"
                      ref={universityRef}
                    >
                      {universities.map((university) => {
                        return (
                          <option
                            key={university}
                            value={university}
                            selected={props.university === university}
                          >
                            {university}
                          </option>
                        );
                      })}
                    </Select>
                  </InputGroup>
                  <FormErrorMessage>{universityError}</FormErrorMessage>
                </FormControl>
                <br />
                <br />
                <br />
                <br />
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  size="lg"
                  variant="solid"
                  onClick={handleProfileUpdation}
                >
                  {loading ? "Updating..." : "Save and proceed"}
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileComponent;
