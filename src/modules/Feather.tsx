import * as React from "react";
import { useState } from "react";
import { Image } from "react-konva";
import useImage from "use-image";
import { setSettingsToSvgCode, convertSvgCodeToDatUrl } from "../functions";
import { getFeatherSettingsByValue } from "../functions";

const Feather = ({ rotation, x, y, value = 0, onHover, onMouseOut }) => {
  const settings = getFeatherSettingsByValue(value);
  const [scale, setScale] = useState({
    x: 1,
    y: 1,
  });
  const [image] = useImage(
    convertSvgCodeToDatUrl(setSettingsToSvgCode(settings[0], settings[1]))
  );
  return (
    <Image
      image={image}
      height={settings[3]}
      width={settings[2]}
      offsetX={settings[2] / 2}
      offsetY={settings[3]}
      x={x}
      y={y}
      scale={scale}
      rotation={rotation}
      onMouseOver={() => {
        onHover();
        setScale({
          x: 1.1,
          y: 1.1,
        });
      }}
      onMouseOut={() => {
        onMouseOut();
        setScale({
          x: 1,
          y: 1,
        });
      }}
    />
  );
};

export default Feather;
