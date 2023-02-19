import { Button, Flex, Icon, useColorMode } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface RoundedButtonIconProps {
  icon: IconType;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const level1Size = 32;
const level1margin = 8;
const level1a2DiffSize = 10;

const RoundedButtonIcon: React.FC<RoundedButtonIconProps> = ({
  icon,
  onClick,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      _hover={{
        bg: `${colorMode === "light" ? "light.800" : "dark.800"}`,
        color: `${colorMode === "dark" ? "light.400" : "dark.650"}`,
      }}
      justifyContent="center"
      alignItems="center"
      borderRadius="100%"
      w={`${level1Size}px`}
      h={`${level1Size}px`}
      mx={`${level1margin}px`}
    >
      <Button
        onClick={onClick}
        variant="unstyled"
        style={{
          width: `${level1Size - level1a2DiffSize}px`,
          height: `${level1Size - level1a2DiffSize}px`,
        }}
      >
        <Icon
          w={`${level1Size - level1a2DiffSize}px`}
          h={`${level1Size - level1a2DiffSize}px`}
          as={icon}
          p={`${level1margin / 2}px`}
        />
      </Button>
    </Flex>
  );
};

export default RoundedButtonIcon;
