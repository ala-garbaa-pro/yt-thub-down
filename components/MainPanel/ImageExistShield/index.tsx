/* eslint-disable @next/next/no-img-element */
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import useIsImageExistsLocalAPI from "../../../hooks/useIsImageExistsLocalAPI";
import { getQualityText } from "../../../utils/getQualityText";
import { getTypeText } from "../../../utils/getTypeText";
import ActionPanel from "../ActionPanel";

interface ImageExistShieldProps {
  format: string;
  src: string;
  quality: string;
  type: string;
}

const ImageExistShield: React.FC<ImageExistShieldProps> = ({
  format,
  src,
  quality,
  type,
}) => {
  const {
    data: dataIsImageExistsLocalAPI,
    loading: loadingIsImageExistsLocalAPI,
    error: errorIsImageExistsLocalAPI,
  } = useIsImageExistsLocalAPI(src);

  if (errorIsImageExistsLocalAPI)
    return <div>Error: {errorIsImageExistsLocalAPI}</div>;

  if (loadingIsImageExistsLocalAPI) return <div>Loading</div>;

  if (dataIsImageExistsLocalAPI) {
    return (
      <Flex my="32px">
        {dataIsImageExistsLocalAPI === "existing" && (
          <Box id="error_img_404">
            <ActionPanel format={format} src={src} />
            <Flex my="32px">
              <Box>
                Generated source URL: <strong>{src}</strong>
              </Box>
            </Flex>
            <img src={src} alt={src} />
          </Box>
        )}
        {dataIsImageExistsLocalAPI === "unexisting" && (
          <Box boxShadow="lg" p="16px">
            {/* check this for example: https://www.youtube.com/watch?v=TtCsNuZewiY */}
            Sorry, the quality <strong>{getQualityText(quality)}</strong>, of
            type <strong>{getTypeText(type)}</strong> Does not exist, because
            the thumbnail is depends on video quality uploaded by the user on
            Youtube.
          </Box>
        )}
      </Flex>
    );
  } else {
    return <div>Error code #94997</div>;
  }
};

export default ImageExistShield;
