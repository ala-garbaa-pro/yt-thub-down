import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import LogoComponent from "../../Logo";
import NavbarComponent from "../../NavbarComponent";
import ColorModeSwitcherComponent from "./ColorModeSwitcher";

interface HeaderComponentProps {}

const HeaderComponent: React.FC<HeaderComponentProps> = ({}) => {
  return (
    <Box as="header" mt="16px" py="8px" w="100%" minH="56px">
      <Flex
        overflow="hidden"
        mx={{
          base: "8px",
          sm: "16px",
          md: "32px",
          lg: "64px",
          xl: "128px",
          "2xl": "256px",
        }}
        py="6px"
        maxW="100%"
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      
      >
        <LogoComponent />
        <NavbarComponent />
        <Box
          h={{
            base: "8px",
            sm: "16px",
            md: "0",
            lg: "0",
            xl: "0",
            "2xl": "0",
          }}
        />
        <ColorModeSwitcherComponent />
      </Flex>
    </Box>
  );
};

export default HeaderComponent;
