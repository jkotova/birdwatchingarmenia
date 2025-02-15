import React from "react";
import Plot from "react-plotly.js";
import { plotLayout, plotConfig } from "./../constants/plot.js";
import data from "./../../static/data/locality_scatter.json";

const records = [];
const species = [];
const labels = [];

data.map((item) => {
  records.push(item.records);
  species.push(item.species);
  labels.push(item.name);
});

export const ScatterPlot = (locations) => {
  return (
    <Plot
      data={[
        {
          x: records,
          y: species,
          text: labels,
          type: "scatter",
          mode: "markers",
          name: "Locations",
          marker: {
            color: "rgba(58, 77, 110, .8)",
            size: 12,
            line: {
              width: 1,
              color: "rgba(58, 77, 110, 1)",
            },
            opacity: 0.8,
          },
        },
      ]}
      onClick={(item) => console.log(item)}
      config={plotConfig}
      layout={{
        xaxis: {
          title: {
            text: "Количество наблюдений в локации",
            font: {
              size: 18,
              color: "#7f7f7f",
            },
          },
        },
        yaxis: {
          title: {
            text: "Количество видов на локации",
            font: {
              size: 18,
              color: "#7f7f7f",
            },
          },
        },
        showlegend: true,
        legend: {
          y: 0.5,
          yref: "paper",
          font: {
            family: "Arial, sans-serif",
            size: 20,
            color: "grey",
          },
        },
        ...plotLayout,
      }}
    />
  );
};
