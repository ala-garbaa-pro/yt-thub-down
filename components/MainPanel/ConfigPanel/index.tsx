import { Box, Button, Flex, Select } from "@chakra-ui/react";
import React from "react";
import Swal from "sweetalert2";
import { servers } from "../../../data/servers";
import { thumbnailFormats } from "../../../data/thumbnailFormats";
import { thumbnailQualities } from "../../../data/thumbnailQualities";
import { thumbnailTypes } from "../../../data/thumbnailTypes";
import { getDisplayStatus } from "../../../utils/getDisplayStatus";

interface ConfigPanelProps {
  setServer: any;
  setType: any;
  setQuality: any;
  setFormat: any;
  format: any;
  type: any;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({
  setServer,
  setType,
  setQuality,
  setFormat,
  format,
  type,
}) => {
  const displayQuality = thumbnailQualities.filter((quality) =>
    getDisplayStatus(quality.value, type)
  );

  return (
    <Box>
      <Flex flexWrap="wrap">
        <Flex flexDir="column" mt="32px" mr="16px">
          <label htmlFor="select_server">Server:</label>
          <Select
            fontSize="15px"
            id="select_server"
            onChange={(e) => setServer(e.target.value)}
            minW="192px"
          >
            {servers.map((server) => (
              <option key={server} value={`${server}`}>
                {server}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex flexDir="column" mt="32px" mr="16px">
          <label htmlFor="select_type">Type:</label>
          <Select
            fontSize="15px"
            id="select_type"
            minW="240px"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            {thumbnailTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.text}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex flexDir="column" mt="32px" mr="16px">
          <label htmlFor="select_quality">Quality:</label>
          <Select
            fontSize="15px"
            id="select_quality"
            onChange={(e) => setQuality(e.target.value)}
            minW="360px"
            defaultValue=""
          >
            {displayQuality.map((quality: any) => (
              <option key={quality.value} value={quality.value}>
                {quality.text}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex flexDir="column" mt="32px">
          <label htmlFor="select_format">Format:</label>
          <Select
            fontSize="15px"
            id="select_format"
            onChange={(e) => setFormat(e.target.value)}
            minW="292px"
          >
            {thumbnailFormats.map((format) => (
              <option key={format.value} value={format.value}>
                {format.text}
              </option>
            ))}
          </Select>
        </Flex>

        {format === "webp" ? (
          <Flex flexDir="column" mt="32px" ml="16px">
            <label htmlFor="select_format">Informations:</label>
            <Button
              w="40px"
              onClick={() =>
                Swal.fire(
                  "webP?",
                  `webP is best format for fast loading of images due to small image
                   size. If you want to get rid of the black bars and do it like
                   YouTube does it, you can use`,
                  "info"
                )
              }
            >
              ?
            </Button>
          </Flex>
        ) : null}
      </Flex>
    </Box>
  );
};

export default ConfigPanel;
