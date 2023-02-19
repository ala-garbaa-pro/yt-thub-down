import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import HeroLeft from "./Left";
import HeroRight from "./Right";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Flex
      w="100%"
      h="100%"
      alignItems="flex-end"
      flexDir={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
    >
      <HeroLeft />
      <Box
        h={{
          base: "32px",
          sm: "64px",
          md: "96px",
          lg: "0",
          xl: "0",
          "2xl": "0",
        }}
      />
      <HeroRight />
    </Flex>
  );
};

export default Hero;
