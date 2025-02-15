import * as React from "react";
import type { CircleLayerSpecification } from "react-map-gl/mapbox";
import Map, { Source, Layer } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const circleLayerStyle: CircleLayerSpecification = {
  id: "locations",
  type: "circle",
  paint: {
    "circle-color": {
      property: "value",
      stops: [
        [10, "#A3D1C6"],
        [100, "#a8d3bc"],
        [250, "#aed6b2"],
        [500, "#B3D8A8"],
        [1000, "#8cbf99"],
        [2000, "#64a689"],
        [15000, "#3D8D7A"],
      ],
    },
    "circle-radius": {
      property: "value",
      stops: [
        [10, 8],
        [100, 10],
        [500, 15],
        [1000, 20],
        [15000, 30],
      ],
    },
    "circle-stroke-width": 1,
    "circle-stroke-color": {
      property: "value",
      stops: [
        [10, "#85b8ac"],
        [100, "#82b298"],
        [250, "#80ac85"],
        [500, "#7da671"],
        [1000, "#608d66"],
        [2000, "#42755a"],
        [15000, "#255c4f"],
      ],
    },
    "circle-opacity": [
      "interpolate",
      ["linear"],
      ["get", "value"],
      10,
      0.6,
      5000,
      0.95,
    ],
  },
};

console.log(["VITE_MAPBOX_TOKEN"] + import.meta.env.VITE_MAPBOX_TOKEN);

export const MapboxSpecies = ({ locations, height }) => {
  return (
    <Map
      minZoom={6}
      maxZoom={9}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      initialViewState={{
        longitude: 45.355,
        latitude: 39.989,
        zoom: 6,
      }}
      style={{
        width: "100%",
        height: height,
        border: "1px solid rgba(103, 41, 9, 0.9)",
      }}
      mapStyle="mapbox://styles/kalipso/cm6rdcnz2007i01se9zsu4die"
    >
      <Source id="all-locations" type="geojson" data={locations}>
        <Layer {...circleLayerStyle} />
      </Source>
    </Map>
  );
};
