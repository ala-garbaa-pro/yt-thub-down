import {  Flex } from "@chakra-ui/react";
import Image from "next/legacy/image";
import React from "react";

interface CardSwipCompnentProps {
  element: any;
}

const CardSwipCompnent: React.FC<CardSwipCompnentProps> = ({ element }) => {
  const [amiActive, setAmiActive] = React.useState(false);
  return (
    <Flex>
      <Flex
        onMouseEnter={() => setAmiActive(true)}
        onMouseLeave={() => setAmiActive(false)}
        className="bll"
        zIndex={2}
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="100%"
        opacity={0.8}
        _before={{
          content: "''",
          position: "absolute",
          top: "16px",
          left: "16px",
          right: "0",
          bottom: "0",
          width: "calc(100% + -32px)",
          height: "calc(100% + -32px)",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, ${
            !amiActive ? "0.1" : ".5"
          }), ${element.color})`,
          backgroundPosition: "100%",
          filter: `${amiActive ? "blur(60px)" : "blur(100px)"}`,
          zIndex: "-1",
        }}
      >
        <Image
          layout="intrinsic"
          src={element.src}
          alt={element.src}
          width={200}
          height={200}
        />
      </Flex>
    </Flex>
  );
};

export default CardSwipCompnent;
