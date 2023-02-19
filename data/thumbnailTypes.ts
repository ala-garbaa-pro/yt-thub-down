import { ValueText } from "../types/ValueText";

export const thumbnailTypes: ValueText[] = [
  {
    value: "default",
    text: "Default",
  },
  {
    value: "0",
    text: "Player background",
  },
  {
    value: "1",
    text: "Video frames start",
  },
  {
    value: "2",
    text: "Video frames middle",
  },
  {
    value: "3",
    text: "Video frames end",
  },
];

export const defaultThumbnailType = thumbnailTypes[0];
