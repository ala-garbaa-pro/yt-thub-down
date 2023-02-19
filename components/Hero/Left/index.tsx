import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import SocialLink from "../../SocialLink";
import { socialLinks } from "../../SocialLink/socialLinks";

interface HeroLeftProps {}

const HeroLeft: React.FC<HeroLeftProps> = ({}) => {
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    const elementTW = document.getElementsByClassName(
      "Typewriter"
    )[0] as HTMLElement;
    if (elementTW) {
      elementTW.style.display = "inline";
      elementTW.removeAttribute("data-testid");
      elementTW.removeAttribute("class");
    }
  }, []);

  return (
    <Flex
      w={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "60%",
        xl: "60%",
        "2xl": "60%",
      }}
      justifyContent="center"
      alignItems={{
        base: "center",
        sm: "center",
        md: "center",
        lg: "start",
        xl: "start",
        "2xl": "start",
      }}
      h="100%"
      pt={{
        base: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "64px",
        "2xl": "96px",
      }}
      px="8px"
      flexDir="column"
    >
      <Text as="h3" fontSize="sm" color={`${colorMode}.600`}>
        Hello & welcome back!
      </Text>
      <Heading
        style={{ animationName: "fadeInUp" }}
        fontSize={{
          base: "20px",
          sm: "24px",
          md: "28px",
          lg: "36px",
          xl: "44px",
          "2xl": "53px",
        }}
        my="16px"
      >
        <Box
          as="span"
          color={`${colorMode === "light" ? "dark.800" : "light.950"}`}
        >
          I’m{" "}
        </Box>
        <Box as="span">
          <Typewriter
            options={{
              strings: ["Ala GARBAA", "Full-stack Developer"],
              skipAddStyles: true,
              autoStart: true,
              loop: true,
              wrapperClassName: "tw_main__wrapper",
              cursorClassName: "tw_main__cursor",
            }}
          />
        </Box>
      </Heading>
      <Text my="8px">
        I am familiar with <strong>Development</strong>,{" "}
        <strong>Operating Systems</strong> , <strong>Servers</strong> &{" "}
        <strong>Design</strong> ; I focus on <strong></strong> trending
        technologies to prepare for <strong></strong> the new technology; then,
        I create courses about them to <strong>level up</strong> our skills.
      </Text>
      <Box my="8px">
        <Flex
          justifyContent="start"
          alignItems="center"
          w="100%"
          flexWrap="wrap"
          flexDir={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
        >
          <Heading size="md">Connect:</Heading>
          <Flex
            py="8px"
            flexWrap="wrap"
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
              xl: "start",
              "2xl": "start",
            }}
            justifyContent={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "start",
              xl: "start",
              "2xl": "start",
            }}
          >
            {socialLinks.map((el, index) => (
              <SocialLink key={"social-link-" + index} {...el} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeroLeft;
