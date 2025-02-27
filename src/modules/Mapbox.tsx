import * as React from "react";
import { useEffect, useRef } from "react";
import type { CircleLayerSpecification } from "react-map-gl/mapbox";
import Map, { Source, Layer } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch, useSelector } from "react-redux";
import { set_location } from "../core/features.ts";
import about_locations from "./../../static/data/species_by_locations.json";

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
        [12000, "#3D8D7A"],
      ],
    },
    "circle-radius": {
      property: "value",
      stops: [
        [10, 8],
        [100, 10],
        [500, 15],
        [1000, 20],
        [12000, 30],
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
        [12000, "#255c4f"],
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

const selectedGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [44.9916095, 40.559375] },
      properties: {
        name: "Sevan, Gegharkunik Province, AM (40.559, 44.992)",
        locality_id: "L36480919",
        value: 1,
      },
    },
  ],
};

const selectedCircleLayerStyle: CircleLayerSpecification = {
  id: "selected-locations",
  type: "circle",
  paint: {
    "circle-color": "#FBFFE4",
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
    "circle-opacity": 1,
    "circle-stroke-width": 3,
    "circle-stroke-color": "#255c4f",
  },
};
export const Mapbox = ({ locations, height }) => {
  const mapRef = useRef(null);
  const state_location = useSelector((state) => state.general.location);
  const dispatch = useDispatch();
  const onMouseClick = (event) => {
    if (event.features.length > 0) {
      dispatch(set_location(event.features[0].properties["locality_id"]));
    }
  };

  useEffect(() => {
    const changedLocation = about_locations[state_location];
    selectedGeoJSON.features = [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [changedLocation["lon"], changedLocation["lat"]],
        },
        properties: {
          name: changedLocation["name"],
          locality_id: changedLocation["locality_id"],
          value: changedLocation["value"],
        },
      },
    ];
    mapRef?.current?.getSource("selected-location").setData(selectedGeoJSON);
  }, [state_location]);
  return (
    <>
      <Map
        ref={mapRef}
        minZoom={7}
        maxZoom={9}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 45.355,
          latitude: 39.989,
          zoom: 7,
        }}
        style={{
          width: "100%",
          height: height,
          border: "1px solid rgba(52, 52, 52, 0.6)",
        }}
        mapStyle="mapbox://styles/kalipso/cm6rdcnz2007i01se9zsu4die"
        onClick={onMouseClick}
        interactiveLayerIds={["locations", "selected-location"]}
      >
        <Source id="all-locations" type="geojson" data={locations}>
          <Layer {...circleLayerStyle} />
        </Source>
        <Source id="selected-location" type="geojson" data={selectedGeoJSON}>
          <Layer {...selectedCircleLayerStyle} />
        </Source>
      </Map>
    </>
  );
};
