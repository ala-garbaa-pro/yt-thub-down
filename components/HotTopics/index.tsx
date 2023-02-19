import { Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import RoundedButtonIcon from "../RoundedButtonIcon";
import SwipperComponent from "./SwipperComponent";

interface HotTopicsProps {}

const HotTopics: React.FC<HotTopicsProps> = ({}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      borderRadius="8px"
      p={{
        base: "12px",
        sm: "16px",
        md: "20px",
        lg: "20px",
        xl: "24px",
        "2xl": "24px",
      }}
      borderWidth="1px"
      borderStyle="solid"
      borderColor={`${colorMode}.800`}
      bg={`${colorMode}.850`}
      mb="64px"
      w="100%"
    >
      <Flex
        flexWrap="wrap"
        w="100%"
        flexDir={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        <Flex
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "16.66%",
            xl: "16.66%",
            "2xl": "16.66%",
          }}
          flexDir="column"
          px={{
            base: "4px",
            sm: "4px",
            md: "4px",
            lg: "16px",
            xl: "16px",
            "2xl": "16px",
          }}
        >
          <Heading
            as="h5"
            fontSize="20px"
            color={`text.${colorMode}1`}
            mb="16px"
          >
            Hot Topic
          </Heading>
          <Text mb="20px" color={`${colorMode}.500`} fontSize="14px">
            Don’t miss out on the latest news about technologies, programming
            reviews, and development guides...
          </Text>
          <Flex
            pb={{
              base: "16px",
              sm: "16px",
              md: "16px",
              lg: "0",
              xl: "0",
              "2xl": "0",
            }}
          >
            <RoundedButtonIcon
              icon={IoArrowBack}
              onClick={() => {
                const swiper = window.document.getElementById(
                  "swipinelm"
                ) as any;
                if (swiper !== null) {
                  swiper.swiper.slidePrev();
                }
              }}
            />
            <RoundedButtonIcon
              icon={IoArrowForward}
              onClick={() => {
                const swiper = window.document.getElementById(
                  "swipinelm"
                ) as any;
                if (swiper !== null) {
                  swiper.swiper.slideNext();
                }
              }}
            />
          </Flex>
        </Flex>
        <Flex
          w={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "83.34%",
            xl: "83.34%",
            "2xl": "83.34%",
          }}
        >
          <style jsx global>{`
            .swiper-pagination-bullet-active {
              background: var(--chakra-colors-${colorMode}-600) !important;
            }
          `}</style>
          <SwipperComponent />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HotTopics;
