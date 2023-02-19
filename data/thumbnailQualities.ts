import { ValueText } from "../types/ValueText";

export const thumbnailQualities: ValueText[] = [
  {
    value: "",
    text: "Lowest quality (120 px * 90px)",
  },
  {
    value: "mq",
    text: "Medium quality (320px * 180px)",
  },
  {
    value: "hq",
    text: "High quality (480px * 360px)",
  },
  {
    value: "sd",
    text: "Standard quality (640px * 480px)",
  },
  {
    value: "hq720",
    text: "High Quality 720p (1280px * 720px)",
  },
  {
    value: "maxres",
    text: "Unscaled thumbnail resolution (Original)",
  },
];

export const defaultThumbnailQuality = thumbnailQualities[0];
