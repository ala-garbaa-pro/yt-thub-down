/* eslint-disable @next/next/no-img-element */

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import { defaultURL } from "../data/defaultURL";
import MainPanelShield from "../components/MainPanel/Shield";

const GetYouTubeVideoThumbnailImagePage: React.FC = () => {
  const [URL, setURL] = React.useState(defaultURL);

  return (
    <LayoutComponent>
      <Flex flexDir="column" my="32px" mx="256px" flexWrap="wrap">
        <Flex justifyContent="center" my="16px">
          <Heading>
            <Typewriter
              options={{
                strings: ["YouTube Video Thumbnail Downloader"],
                skipAddStyles: true,
                autoStart: true,
                loop: true,
                wrapperClassName: "tw_main__wrapper",
                cursorClassName: "tw_main__cursor",
              }}
            />
          </Heading>
        </Flex>
        <Flex mt="64px" flexDir="column">
          <Text>
            To get the video thumbnail of any YouTube Video enter the regular
            URL of the video into the textbox below:
          </Text>
          <Input
            mt="16px"
            type="url"
            placeholder="https://www.youtube.com/watch?v=YOUR_ID_HERE"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
        </Flex>
        {/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/.test(
          URL
        ) ? (
          <MainPanelShield url={URL} />
        ) : (
          <Alert mt="32px" status="error">
            <AlertIcon />
            <AlertTitle>URL invalid</AlertTitle>
            <AlertDescription>
              Please provide a valid URL like: <strong>{defaultURL}</strong>
            </AlertDescription>
          </Alert>
        )}
      </Flex>
    </LayoutComponent>
  );
};

export default GetYouTubeVideoThumbnailImagePage;
