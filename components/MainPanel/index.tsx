import { Box } from "@chakra-ui/react";
import React from "react";
import { defaultServer } from "../../data/servers";
import { defaultThumbnailFormats } from "../../data/thumbnailFormats";
import { defaultThumbnailQuality } from "../../data/thumbnailQualities";
import { defaultThumbnailType } from "../../data/thumbnailTypes";
import { getSource } from "../../utils/getSource";
import DisplayMetadataInformations from "../DisplayMetadataInformations";
import ConfigPanel from "./ConfigPanel";
import ImageExistShield from "./ImageExistShield";

interface MainPanelProps {
  url: string;
}

// Here first will check if the thumbnail exist to display the main panel

const MainPanel: React.FC<MainPanelProps> = ({ url }) => {
  const [server, setServer] = React.useState(defaultServer);
  const [type, setType] = React.useState(defaultThumbnailType.value);
  const [quality, setQuality] = React.useState(defaultThumbnailQuality.value);

  const [format, setFormat] = React.useState(defaultThumbnailFormats.value);
  const src = getSource(server, format, quality, url, type);

  React.useEffect(() => {
    if (type === "0") {
      setQuality("hq"); // Just to show 480x360
    }
  }, [type]);

  return (
    <Box>
      {url && url.length > 28 && <DisplayMetadataInformations url={url} />}
      <ConfigPanel
        setServer={setServer}
        setType={setType}
        setQuality={setQuality}
        setFormat={setFormat}
        format={format}
        type={type}
      />
      <ImageExistShield
        format={format}
        src={src}
        quality={quality}
        type={type}
      />
    </Box>
  );
};

export default MainPanel;
