import React, { useRef, useState } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";
import Router from "next/router";

const SubmitProject = (props) => {
  const urlRef = useRef();

  let [urlError, setUrlErrorState] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(props.loggedIn);
  const [urlUpdationFailure, setUrlUpdationFailure] = useState(false);

  let function_map = {
    url: setUrlErrorState,
  };

  let hasError = false;

  function urlUpdationFailed() {
    setUrlUpdationFailure(true);
    setLoading(false);
  }

  function setError(key, value) {
    hasError = true;
    function_map[key](value);
  }

  function resetErrors() {
    hasError = false;
    setUrlErrorState(false);
  }

  function hasAnyError() {
    return hasError;
  }

  function validate() {
    //Resetting previous errors
    resetErrors();

    //Name validation
    var url = urlRef.current;

    if (url.value === "") {
      setError("url", "Please enter your project url");
    }

    return;
  }

  async function handleUrlUpdation(e) {
    e.preventDefault();

    if (loggedIn) {
      try {
        setLoading(true);

        validate();

        var hasError = hasAnyError();

        if (hasError) {
          setLoading(false);
          return;
        } else {
          var user = supabase.auth.user();
          await updateUrl(user);

          await Router.push("/dashboard");
        }
      } catch (error) {
        urlUpdationFailed();
        alert(error.message);
      }
    }
  }

  async function updateUrl(user) {
    if (!urlUpdationFailure) {
      try {
        const updates = {
          project_url: urlRef.current.value,
        };

        let { error } = await supabase
          .from("profiles")
          .update(updates, {
            returning: "minimal",
          })
          .match({ id: user.id });

        if (error) {
          urlUpdationFailed();
          throw error;
        }
      } catch (error) {
        urlUpdationFailed();
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
                  Submit Project{" "}
                </chakra.span>
              </chakra.h1>
              <chakra.h1
                fontSize={{ base: "5xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              ></chakra.h1>
              <chakra.p
                mt={{ base: 10, sm: 5, md: 5 }}
                mx={{ sm: "auto", lg: 0 }}
                mb={6}
                fontSize={{ base: "md", md: "xl" }}
                color="gray.500"
                lineHeight="base"
              >
                Before submitting a project, make sure you have made a Pull
                Request on our GitHub repository. If you don't understand a Pull
                request is - click here.
                <br />
                <br />
              </chakra.p>
              <Stack
                direction={{ base: "column", sm: "column", md: "column" }}
                mb={{ base: 4, md: 8 }}
                mt={{ base: 10, md: 8 }}
                spacing={{ base: 7, md: 2 }}
                justifyContent="center"
              >
                {props.is_verified ? (
                  <span style={{ color: "red" }}>
                    Project url cannot be changed once the project has been
                    verified!
                  </span>
                ) : (
                  ""
                )}
                <FormControl id="url" isInvalid={urlError} isRequired>
                  <FormLabel>
                    Link to your pull request on GitHub (Your project will be
                    manually verified)
                  </FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="This will be used for certificates"
                      type="text"
                      ref={urlRef}
                      required={true}
                      defaultValue={props.project_url}
                      isDisabled={props.is_verified}
                    />
                  </InputGroup>
                  <FormErrorMessage>{urlError}</FormErrorMessage>
                </FormControl>
                <br />
                <br />
                <Button
                  backgroundColor="#33d6a6"
                  color="gray.800"
                  size="lg"
                  variant="solid"
                  onClick={handleUrlUpdation}
                  isDisabled={props.is_verified}
                >
                  {loading ? "Updating..." : "Save and submit"}
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubmitProject;
