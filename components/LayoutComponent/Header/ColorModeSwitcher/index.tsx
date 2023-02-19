import { Flex, Icon, useColorMode } from "@chakra-ui/react";

import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

interface ColorModeSwitcherComponentProps {}

const switchAspectRatio = 6;

const switchWidth = switchAspectRatio * 6 * 2.66;
const switchHeight = switchAspectRatio * 6 * 1;
const switchIconDifference = (switchAspectRatio * 6) / 6;

const ColorModeSwitcherComponent: React.FC<ColorModeSwitcherComponentProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      alignItems="center"
      cursor="pointer"
      position="relative"
      display="flex"
      justifyContent="space-between"
      width={`${switchWidth}px`}
      height={`${switchHeight}px`}
      borderRadius="50px"
      transition="0.2s"
      bg={
        colorMode === "light"
          ? "linear-gradient(145deg, #e1e1e1, #fff)"
          : "dark.850"
      }
      boxShadow={
        colorMode === "light"
          ? "3px 3px 4px #e6e6e6, -3px -3px 4px #ffffff"
          : "3px 3px 3px #0e131b, -3px -3px 3px #1c2739"
      }
      onClick={toggleColorMode}
    >
      <Icon
        position="absolute"
        width={`${switchHeight - switchIconDifference}px`}
        height={`${switchHeight - switchIconDifference}px`}
        p={`${switchIconDifference}px`}
        borderRadius="50%"
        transition="0.3s ease-out"
        bg={colorMode === "light" ? "dark.950" : "#fafafa"}
        transform={
          colorMode === "light"
            ? `translateX(${
                switchWidth - (switchHeight - switchIconDifference * 0.2)
              }px)`
            : `translateX(${switchIconDifference}px)`
        }
        color={colorMode === "dark" ? "dark.950" : "#fafafa"}
        as={colorMode === "light" ? IoMoon : IoSunny}
      />
    </Flex>
  );
};

export default ColorModeSwitcherComponent;
