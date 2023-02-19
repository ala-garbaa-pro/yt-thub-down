import { Flex, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/legacy/image";
import React from "react";

interface LogoComponentProps {}

const width = 228;
const height = 42;

const LogoComponent: React.FC<LogoComponentProps> = ({}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex>
      <Flex
        w={`${width}px`}
        h={`${height}px`}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={`/assets/logo/logo-text-${
            colorMode === "light" ? "light" : "dark"
          }.png`}
          alt="Ala GARBAA Dark Logo"
          width={width}
          height={height}
          layout="intrinsic"
        />
      </Flex>
      <Text
        animation="glowing 5000ms infinite"
        fontSize="10px"
        verticalAlign="sub"
      >
        Beta v0.0.1
      </Text>
    </Flex>
  );
};

export default LogoComponent;
