/* eslint-disable @next/next/no-img-element */
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MainPanel from ".";
import { defaultThumbnailQuality } from "../../data/thumbnailQualities";
import { defaultThumbnailType } from "../../data/thumbnailTypes";
import useFetchMetadata from "../../hooks/useFetchMetadata";

interface MainPanelShieldProps {
  url: string;
}

const MainPanelShield: React.FC<MainPanelShieldProps> = ({ url }) => {
  const {
    data: dataFetchMetadata,
    loading: loadingFetchMetadata,
    error: errorFetchMetadata,
  } = useFetchMetadata(url);

  if (errorFetchMetadata) return <div>Error: {errorFetchMetadata}</div>;

  if (loadingFetchMetadata) return <div>Loading...</div>;

  if (dataFetchMetadata) {
    const thumbnail_url_exist = dataFetchMetadata.thumbnail_url;
    return (
      <div>
        <Flex my="32px">
          {thumbnail_url_exist && (
            <Box>
              <MainPanel url={url} />
            </Box>
          )}
          {!thumbnail_url_exist && (
            <Box boxShadow="lg" p="16px">
              Sorry, the quality ${defaultThumbnailQuality.value}, of type{" "}
              {defaultThumbnailType.value} Does not exist, because the thumbnail
              is depends on video quality uploaded by the user on Youtube.
            </Box>
          )}
        </Flex>
      </div>
    );
  } else {
    return <div>Error code #8654</div>;
  }
};

export default MainPanelShield;
