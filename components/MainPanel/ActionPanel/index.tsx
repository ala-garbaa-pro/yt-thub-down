import { Box, Button, Flex, Icon, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { RiDownloadCloud2Fill, RiExternalLinkLine } from "react-icons/ri";

interface ActionPanelProps {
  format: any;
  src: any;
}

const ActionPanel: React.FC<ActionPanelProps> = ({ format, src }) => {
  const toast = useToast();

  return (
    <Flex mt="32px" flexWrap="wrap">
      {format === "jpg" && (
        <Button
          as="a"
          mr="16px"
          mt="32px"
          download={`thumbnail${format}`}
          href={`/_next/image?url=${src}&w=1280&q=100&?fm=${format}`}
        >
          <Icon mr="8px" as={RiDownloadCloud2Fill} />
          Download JPEG file
        </Button>
      )}

      <Button
        as="a"
        mr="16px"
        mt="32px"
        download={`thumbnail${format}`}
        href={src}
      >
        <Icon mr="8px" as={RiDownloadCloud2Fill} />
        Download {format === "webp" ? ` webp ` : " JPG "}file (Click here + Alt)
      </Button>

      <Button
        as="a"
        mr="16px"
        mt="32px"
        onClick={async () => {
          await navigator.clipboard.writeText(src);

          return toast({
            title: "This text was copied.",
            description: (
              <Box pt="4">
                <Text mb="4">
                  {src} <br />
                </Text>
              </Box>
            ),
            status: "success",
            duration: 1500,
            isClosable: true,
          });
        }}
      >
        <Icon mr="8px" as={BsClipboardCheck} />
        Copy source URL
      </Button>

      <Button as="a" mr="16px" mt="32px" target="_blank" href={src}>
        <Icon mr="8px" as={RiExternalLinkLine} />
        Open on new tab
      </Button>
    </Flex>
  );
};

export default ActionPanel;
