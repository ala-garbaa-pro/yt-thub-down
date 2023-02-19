export const getDisplayStatus = (qualityValue: string, typeValue: string) => {
  if (qualityValue === "hq720" && typeValue !== "default") {
    return false;
  }

  if (qualityValue !== "hq" && typeValue === "0") {
    return false;
  }

  return true;
};
