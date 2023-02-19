import { thumbnailTypes } from "../data/thumbnailTypes";

export const getTypeText = (value: string) =>
  thumbnailTypes.filter((el) => el.value === value)[0].text;
