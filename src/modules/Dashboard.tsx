import React from "react";
import Plot from "react-plotly.js";
import dataYear from "./../../static/data/year_hist_json.json";
import dataMonth from "./../../static/data/month_hist_json.json";
import dataSpeciesByYear from "./../../static/data/species_by_years_common.json";
import { plotConfig, plotLayout, plotStyle } from "./../constants/plot.js";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

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

const plotData = {
  marker: {
    color: "rgba(163, 209, 198, .7)",
  },
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
          {/* {parse(text["about_birdwatching"])} */}
        </div>
        <div className="column">
          <h4>{text["charts"]["records"]}</h4>
          <Plot
            config={plotConfig}
            data={[
              {
                type: "bar",
                x: year.x,
                y: year.y,
                ...plotData,
              },
            ]}
            layout={{
              ...plotLayout,
            }}
            style={plotStyle}
          />
          {parse(text["about_birdwatching"]["p3"])}
        </div>
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
                ...plotData,
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
                ...plotData,
                marker: {
                  color: "rgba(179,216, 168, .7)",
                  line: plotData.marker.line,
                },
              },
            ]}
            layout={{
              xaxis: {
                categoryorder: "array",
                categoryarray: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
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
