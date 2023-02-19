import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import useFetchMetadata from "../../hooks/useFetchMetadata";

interface DisplayMetadataInformationsProps {
  url: string;
}

// You can just iframe only no need to fetch metadata.
const DisplayMetadataInformations: React.FC<
  DisplayMetadataInformationsProps
> = ({ url }) => {

    
  const {
    data: dataFetchMetadata,
    loading: loadingFetchMetadata,
    error: errorFetchMetadata,
  } = useFetchMetadata(url);

  if (errorFetchMetadata) return <div>{errorFetchMetadata}</div>;

  if (loadingFetchMetadata) return <div>Loading</div>;

  if (dataFetchMetadata) {
    // console.log(dataFetchMetadata);

    // you can pass ID from parent as props also.
    const videoID = dataFetchMetadata.thumbnail_url
      .split("vi/")[1]
      .split("/")[0];

    return (
      <Flex mt="64px" flexDir="column">
        <Flex alignItems="center">
          <Text>Title:</Text>
          <Heading size="sm">&nbsp; {dataFetchMetadata.title}</Heading>
        </Flex>

        <Flex mt="16px" alignItems="center">
          <Text>
            Uploaded By:{" "}
            <a href={dataFetchMetadata.author_url}>
              <strong> {dataFetchMetadata.author_name}</strong>
            </a>
          </Text>
        </Flex>

        <Flex mt="32px">
          <iframe
            width="852px"
            height="480px"
            src={`https://www.youtube.com/embed/${videoID}?feature=oembed`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="FULL STACK WEB DEVELOPER ala_garbaa www.alagarbaa.com Ala GARBAA"
          ></iframe>
        </Flex>
      </Flex>
    );
  } else {
    return <div>Error code #9487</div>;
  }
};

export default DisplayMetadataInformations;
