import { Box, Flex } from "@chakra-ui/react";
import React from "react";

import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

interface NavItemProps {
  title: String;
  absolute_url: String;
}

const NavItem: React.FC<NavItemProps> = ({ title, absolute_url }) => {
  return (
    <Box
      sx={{
        '[data-x="navigationCatL1"]:after': {
          borderBottomColor: "dark.800",
        },
      }}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        px="8px"
        mx="8px"
        h="100%"
        pos="relative"
        data-x="navigationCatL1"
      >
        <Link
          as={NextLink}
          href={`${absolute_url}`}
          cursor="pointer"
          fontSize="14px"
        >
          {title}
        </Link>
      </Flex>
    </Box>
  );
};

export default NavItem;
