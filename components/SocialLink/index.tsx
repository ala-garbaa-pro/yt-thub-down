import { Flex, Icon, useColorMode } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { useMediaQuery } from "@chakra-ui/react";

interface SocialLinkProps {
  icon: IconType;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  const { colorMode } = useColorMode();

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const level1Size = isMobile ? 48 : 42;
  const level1margin = isMobile ? 12 : 8;
  const level1a2DiffSize = isMobile ? 14 : 10;

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
      <a
        target="_blank"
        rel="noreferrer"
        href={href}
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
      </a>
    </Flex>
  );
};

export default SocialLink;
