import { Box, chakra, Flex, useColorMode } from "@chakra-ui/react";
import NextImage from "next/image";
import React from "react";

interface HeroRightProps {}

const HeroRight: React.FC<HeroRightProps> = ({}) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w={{
        base: "100%",
        sm: "100%",
        md: "100%",
        lg: "40%",
        xl: "40%",
        "2xl": "40%",
      }}
      justifyContent="center"
      alignItems="center"
      h="100%"
    >
      <Box
        pos="relative"
        w="324px"
        h="490px"
        mx="96px"
        _before={{
          content: '""',
          position: "absolute",
          left: "-227px",
          top: "31px",
          height: "500px",
          width: "500px",
          background: `url(/assets/baked_shadows/${colorMode}/shadow-2.svg) no-repeat center`,
          backgroundSize: "contain",
          zIndex: "-1",
        }}
        visibility="visible"
        style={{
          animationName: "fadeIn",
        }}
      >
        <NextChakredImage
          zIndex="3"
          position="relative"
          display="block"
          margin="auto"
          src="/assets/index/banner.png"
          alt="the banner"
          width={324}
          height={490}
          transition="all 0.3s ease 0s"
        />

        <Box position="absolute" top="33%" left="0%">
          <NextChakredImage
            zIndex="3"
            position="relative"
            display="block"
            margin="auto"
            src="/assets/patterns/pattern-1.svg"
            alt="pattern1"
            width={32}
            height={32}
            transition="all 0.3s ease 0s"
            animation="animationFramesOne 20s linear infinite alternate"
          />
        </Box>

        <Box
          position="absolute"
          top="18%"
          right="15%"
          animation="hero-thumb-animation 2s linear infinite alternate"
        >
          <NextChakredImage
            zIndex="3"
            position="relative"
            display="block"
            margin="auto"
            src="/assets/patterns/pattern-2.svg"
            alt="pattern2"
            width={64}
            height={64}
            transition="all 0.3s ease 0s"
            animation="rotateMe 10s linear infinite alternate"
          />
        </Box>

        <Box
          position="absolute"
          bottom="4%"
          left="57%"
          animation="hero-thumb-animation 2s linear infinite alternate"
          zIndex="4"
          top="260px"
        >
          <NextChakredImage
            zIndex="3"
            position="relative"
            display="block"
            margin="auto"
            src="/assets/patterns/pattern-3.svg"
            alt="pattern3"
            width={27}
            height={26}
            transition="all 0.3s ease 0s"
            animation="rotate3d 2s linear infinite alternate"
          />
        </Box>

        <Box
          position="absolute"
          bottom="37%"
          right="4%"
          animation="wiggle 2s linear infinite alternate"
        >
          <NextChakredImage
            zIndex="3"
            position="relative"
            display="block"
            margin="auto"
            src="/assets/patterns/pattern-4.svg"
            alt="pattern4"
            width={35}
            height={34}
            transition="all 0.3s ease 0s"
            animation="jump 2s linear infinite alternate"
          />
        </Box>
      </Box>
    </Flex>
  );
};

const NextChakredImage = chakra(NextImage, {
  baseStyle: { maxH: 490, maxW: 324 },
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

export default HeroRight;
