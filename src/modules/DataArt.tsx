import { useRef, useState, useLayoutEffect } from "react";
import { Stage, Layer, Text } from "react-konva";
import Feather from "./Feather";
import dataObj from "./../../static/data/month_hist_json_by_year.json";
import { normalizeDataForFeatherPlot } from "../functions";
import {
  FEATHERS_AMOUNT,
  FEATHERS_CANVAS_HEIGHT,
  DEFAULT_FONT_COLOR,
  DEFAULT_FONT_FAMILY,
  DEFAULT_YEAR_STATE,
} from "./../constants";

const data = normalizeDataForFeatherPlot(dataObj);
const DataArt = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [year, setYear] = useState(DEFAULT_YEAR_STATE);
  const [text, setText] = useState("");

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const onHover = (value, half, month) => {
    setText(`${value} entries at the ${half} half of  ${month}`);
  };

  return (
    <div ref={ref} className="dataArt_container">
      <Stage width={width} height={FEATHERS_CANVAS_HEIGHT}>
        <Layer>
          <Text
            align="center"
            fill={DEFAULT_FONT_COLOR}
            fontFamily={DEFAULT_FONT_FAMILY}
            fontSize={44}
            fontStyle="bold"
            text={year}
            verticalAlign="middle"
            width={100}
            x={width / 2 - 50}
            y={FEATHERS_CANVAS_HEIGHT / 2 - 55}
          />
          <Text
            align="center"
            fill={DEFAULT_FONT_COLOR}
            fontFamily={DEFAULT_FONT_FAMILY}
            fontSize={16}
            text={text}
            verticalAlign="middle"
            width={130}
            x={width / 2 - 65}
            y={FEATHERS_CANVAS_HEIGHT / 2 - 15}
          />
          {Object.keys(data[year]).map((key, i) => {
            return Object.keys(data[year][key]).map((half, n) => {
              return (
                <Feather
                  onHover={() => onHover(data[year][key][half], half, key)}
                  onMouseOut={() => setText()}
                  value={data[year][key][half]}
                  key={key + half}
                  rotation={
                    (((i - 1) * 2 + n) *
                      (360 / FEATHERS_AMOUNT) *
                      (Math.PI / 180) +
                      Math.PI / 2) *
                    57.2958
                  }
                  x={
                    width / 2 +
                    Math.cos(
                      ((i - 1) * 2 + n) *
                        (360 / FEATHERS_AMOUNT) *
                        (Math.PI / 180)
                    ) *
                      90
                  }
                  y={
                    FEATHERS_CANVAS_HEIGHT / 2 -
                    30 +
                    Math.sin(
                      ((i - 1) * 2 + n) *
                        (360 / FEATHERS_AMOUNT) *
                        (Math.PI / 180)
                    ) *
                      90
                  }
                />
              );
            });
          })}
        </Layer>
      </Stage>
      <div className="dataArt_years">
        {Object.keys(data).map((key) => (
          <span
            className={key == year ? "dataArt_years--selected" : ""}
            onClick={() => setYear(key)}
          >
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DataArt;
