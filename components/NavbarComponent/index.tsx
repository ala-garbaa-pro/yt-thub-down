import { Badge, Box, Flex } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";
import Swal from "sweetalert2";

interface NavbarComponentProps {}

const NavbarComponent: React.FC<NavbarComponentProps> = ({}) => {
  return (
    <Flex pos="relative" h="48px" justifyContent="center" alignItems="center">
      <NavItem title="Home" absolute_url="https://alagarbaa.com/" />
      <Box mx="16px">API<sup><Badge colorScheme="green">Soon</Badge></sup></Box>
      <Box
        onClick={(e) => {
          e.preventDefault();

          Swal.fire({
            title: "Disclaimer",
            icon: "warning",
            html:
              "This application is for educational purposes only. \nPlease follow " +
              '<b><u><a target="_blank" href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/">\'YouTube Community Guidelines & Policies\'</a></b></u>\n' +
              ' and <b><u><a target="_blank" href="https://developers.google.com/youtube/terms/api-services-terms-of-service">\'YouTube API Services Terms of Service\'</a></u></b>',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: "Thumbs up, great!",
          });
        }}
      >
        <NavItem title="DCMA" absolute_url="/" />
      </Box>
    </Flex>
  );
};

export default NavbarComponent;
