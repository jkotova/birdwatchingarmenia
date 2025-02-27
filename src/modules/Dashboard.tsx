import * as React from "react";
import { useSelector } from "react-redux";
import Plot from "react-plotly.js";
import parse from "html-react-parser";
import {
  plotColors,
  plotConfig,
  plotLayout,
  plotStyle,
} from "./../constants/plot.js";
import { dataMonth, dataSpeciesByYear, dataYear } from "./../data";
import DataArt from "./DataArt.js";
import { PLOT_MONTH_CATEGORIES } from "./../constants";

const year = {
  x: Object.keys(dataYear),
  y: Object.values(dataYear),
};

const month = {
  x: Object.keys(dataMonth),
  y: Object.values(dataMonth),
};

const species = {
  x: Object.keys(dataSpeciesByYear),
  y: Object.values(dataSpeciesByYear),
};

export function Dashboard() {
  const text = useSelector((state) => state.general.lang);
  return (
    <>
      <div className="row">
        <div className="column description">
          {parse(text["about_birdwatching"]["about"])}
          <div className="stats">
            <div className="stats_item">
              <div className="stats_num">98 827</div>
              <div className="stats_text">
                {text["about_birdwatching"]["records"]}
              </div>
            </div>
            <div className="stats_item">
              <div className="stats_num">2 470</div>
              <div className="stats_text">
                {text["about_birdwatching"]["hotspots"]}
              </div>
            </div>
            <div className="stats_item">
              <div className="stats_num">
                80 {text["about_birdwatching"]["km"]}
              </div>
              <div className="stats_text">
                {text["about_birdwatching"]["distance"]}
              </div>
            </div>
            <div className="stats_item">
              <div className="stats_num">359</div>
              <div className="stats_text">
                {text["about_birdwatching"]["species"]}
              </div>
            </div>
          </div>
          {parse(text["about_birdwatching"]["p2"])}
        </div>
        <div className="column">
          <h4>{text["charts"]["feathers"]}</h4>
          <DataArt />
        </div>
      </div>
      {/* {parse(text["about_birdwatching"]["p6"])} */}
      <h4>{text["charts"]["records"]}</h4>
      <div className="row">
        1
        <div className="column">
          <Plot
            config={plotConfig}
            data={[
              {
                type: "bar",
                x: year.x,
                y: year.y,
                ...plotColors,
              },
            ]}
            layout={{
              ...plotLayout,
            }}
            style={plotStyle}
          />
        </div>
        <div className="column">{parse(text["about_birdwatching"]["p3"])}</div>
      </div>

      <div className="row">
        <div className="column">
          <h4>{text["charts"]["species"]}</h4>
          <Plot
            config={plotConfig}
            data={[
              {
                type: "bar",
                x: species.x,
                y: species.y,
                ...plotColors,
              },
            ]}
            layout={{
              ...plotLayout,
            }}
            style={plotStyle}
          />
          {parse(text["about_birdwatching"]["p4"])}
        </div>

        <div className="column">
          <h4>{text["charts"]["time"]}</h4>
          <Plot
            config={plotConfig}
            data={[
              {
                type: "bar",
                x: month.x,
                y: month.y,
                ...plotColors,
                marker: {
                  color: "rgba(179,216, 168, .7)",
                  line: plotColors.marker.line,
                },
              },
            ]}
            layout={{
              xaxis: {
                categoryorder: "array",
                categoryarray: [...PLOT_MONTH_CATEGORIES],
              },
              ...plotLayout,
            }}
            style={plotStyle}
          />

          {parse(text["about_birdwatching"]["p5"])}
        </div>
      </div>
    </>
  );
}
