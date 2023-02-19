import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpointValue } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import CardSwipCompnent from "./CardSwipCompnent";
import { EffectCoverflow } from "swiper";
interface SwipperComponentProps {}

const cards = [
  {
    src: "/assets/hot_topics/vr.png",
    color: "#89eb5b",
  },
  {
    src: "/assets/hot_topics/qr.png",
    color: "#eb5be5",
  },
  {
    src: "/assets/hot_topics/nft.png",
    color: "#e87a95",
  },
  {
    src: "/assets/hot_topics/bt.png",
    color: "#589f11",
  },
  {
    src: "/assets/hot_topics/db.png",
    color: "#b0194e",
  },
  {
    src: "/assets/hot_topics/fa.png",
    color: "#ebb15b",
  },
  {
    src: "/assets/hot_topics/gts.png",
    color: "#6f5beb",
  },
  {
    src: "/assets/hot_topics/vr.png",
    color: "#89eb5b",
  },
  {
    src: "/assets/hot_topics/qr.png",
    color: "#eb5be5",
  },
  {
    src: "/assets/hot_topics/nft.png",
    color: "#e87a95",
  },
  {
    src: "/assets/hot_topics/bt.png",
    color: "#589f11",
  },
  {
    src: "/assets/hot_topics/db.png",
    color: "#b0194e",
  },
  {
    src: "/assets/hot_topics/fa.png",
    color: "#ebb15b",
  },
  {
    src: "/assets/hot_topics/gts.png",
    color: "#6f5beb",
  },
];

const imageBoxDimension = {
  base: 2,
  sm: 2,
  md: 2,
  lg: 3,
  xl: 4,
  "2xl": 5,
};

const SwipperComponent: React.FC<SwipperComponentProps> = ({}) => {
  const variantImageBoxDimension =
    useBreakpointValue(imageBoxDimension, "xl") || imageBoxDimension["xl"];

  return (
    <Swiper
      id={"swipinelm"}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={variantImageBoxDimension}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
    >
      {cards.map((el, i) => (
        <SwiperSlide key={i}>
          <CardSwipCompnent element={el} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipperComponent;
