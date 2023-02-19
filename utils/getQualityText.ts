import { thumbnailQualities } from "../data/thumbnailQualities";

export const getQualityText = (value: string) =>
  thumbnailQualities.filter((el) => el.value === value)[0].text;
