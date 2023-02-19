import { getYouTubeID } from "./getYouTubeID";

export const getSource = (
  server: string,
  format: string,
  quality: string,
  URL: string,
  type: string
) =>
  `https://${server}/vi${format === "webp" ? "_webp" : ""}/${getYouTubeID(
    URL
  )}/${type === "0" ? "" : quality}${
    quality === "hq720" && type === "default" ? "" : type
  }.${format}`;
