import "./App.css";
import { Dashboard } from "./modules/Dashboard";
import { LuClock, LuSignalHigh, LuMail, LuGithub } from "react-icons/lu";
import { Mapbox } from "./modules/Mapbox";
import { Species } from "./modules/Species";
import speciesByLocations from "./../static/data/species_by_locations.json";
import { useSelector, useDispatch } from "react-redux";
import { set_species, set_location, set_lang } from "./core/features.js";
import locations from "./../static/data/species_by_locations.json";
import locations_top from "./../static/data/locations_by_popularity.json";
import all_locations from "./../static/data/locations.json";
import { FrameWrapper } from "./modules/FrameWrapper.js";
import { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
import { Tooltip } from "react-tooltip";

const isMany = (amount) => {
  if (amount > 50) {
    return "good";
  } else if (amount > 10) {
    return "medium";
  }
  return "bad";
};

const isLongTime = (date) => {
  const observation_date = new Date(date);
  const today = new Date();
  const difference = Math.floor(
    Math.abs(today - observation_date) / (1000 * 60 * 60 * 24)
  );
  if (difference > 360) {
    return "medium";
  } else if (difference > 720) {
    return "bad";
  }
  return "good";
};

const plotLayout = {
  paper_bgcolor: "rgba(0,0,0,0)",
  plot_bgcolor: "rgba(0,0,0,0)",
  margin: {
    t: 0,
    b: 50,
    l: 50,
    r: 50,
  },
  title: {
    font: {
      //family: "serif",
    },
  },
  font: {
    family: "EB Garamond, serif",
    size: 16,
    color: "#7f7f7f",
  },
};

const plotConfig = {
  displayModeBar: false,
};

const plotStyle = {
  width: "100%",
};

function App() {
  const state_location = useSelector((state) => state.general.location);
  const state_species = useSelector((state) => state.general.species);
  const text = useSelector((state) => state.general.lang);
  const speciesRef = useRef(null);
  const dispatch = useDispatch();

  const selectSpecies = (species) => {
    dispatch(set_species(species["scientific_name"]));
    speciesRef.current.scrollIntoView();
  };

  const selectLocation = (locality_id: string) => {
    dispatch(set_location(locality_id));
  };

  return (
    <div className="container">
      <div className="lang_container">
        <div
          className={"lang " + (text["name"] == "ru" ? "lang__selected" : "")}
          onClick={() => {
            dispatch(set_lang("ru"));
          }}
        >
          RU
        </div>
        <div
          className={"lang " + (text["name"] == "en" ? "lang__selected" : "")}
          onClick={() => {
            dispatch(set_lang("en"));
          }}
        >
          EN
        </div>
      </div>
      <div className="main">
        <h1>{text["title"]}</h1>
        <div className="dashboard">
          <Dashboard />
        </div>

        <h2>{text["title_location"]}</h2>
        {/* <div className="description">{parse(text["about_locations"])}</div> */}
        <div className="locations">
          <div className="locations_top location_description">
            {/* <h3 className="list_header">
              {parse(text["title_top_locations"])}
            </h3> */}
            {state_location &&
              locations_top.map((location_top) => (
                <div
                  className={
                    "locations_table_item" +
                    (location_top["locality_id"] == state_location
                      ? " locations_table_item--selected"
                      : "")
                  }
                  onClick={() => selectLocation(location_top["locality_id"])}
                >
                  <div>{location_top["name"]}</div>
                  <div className="locatoin_species_icon">
                    {location_top["value"]}
                  </div>
                </div>
              ))}
          </div>
          <div className="locations_map">
            <Mapbox locations={all_locations} height={500} />
          </div>
          <div className="locations_list">
            {state_location && (
              <div className="species_by_location">
                {state_location && (
                  <>
                    <div className="location_description">
                      <h3 className="list_header">
                        {locations[state_location].name}
                      </h3>
                      <p>
                        {text["location"]["coords"]}:{" "}
                        {locations[state_location].lon},{" "}
                        {locations[state_location].lat}
                      </p>
                      <p>
                        {text["location"]["records"]}:{" "}
                        {locations[state_location].value}
                      </p>
                      <p>
                        {text["location"]["species"]}:{" "}
                        {locations[state_location].species.length}
                      </p>
                      <p>
                        {text["location"]["link"]}{" "}
                        <a
                          href={`https://ebird.org/hotspot/${locations[state_location].locality_id}`}
                          target="_blank"
                        >
                          ebird.org
                        </a>
                      </p>
                    </div>
                    <h4 className="list_header">
                      {text["location"]["species_list"]}:
                    </h4>
                  </>
                )}

                {state_location &&
                  speciesByLocations[state_location].species.map((species) => (
                    <div
                      className={
                        "locations_table_item" +
                        (species["scientific_name"] == state_species
                          ? " locations_table_item--selected"
                          : "")
                      }
                      onClick={() => selectSpecies(species)}
                    >
                      <div>
                        {species["common_name"]}{" "}
                        <span>{species["scientific_name"]}</span>
                      </div>
                      <div className="locatoin_species_icon">
                        <span
                          className="icon"
                          data-tooltip-id="tooltip_amount"
                          data-tooltip-content={
                            text["icons"]["amount"] + ": " + species["amount"]
                          }
                          data-tooltip-place="top"
                        >
                          <LuSignalHigh
                            className={`icon-${isMany(species["amount"])}`}
                          />
                        </span>
                        <span
                          className="icon"
                          data-tooltip-id="tooltip_amount"
                          data-tooltip-content={
                            text["icons"]["time"] + ": " + species["time"]
                          }
                          data-tooltip-place="top"
                        >
                          <LuClock
                            className={`icon-${isLongTime(species["time"])}`}
                          />
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
        <Tooltip
          id="tooltip_amount"
          style={{
            backgroundColor: "#FBFFE4",
            color: "#222",
          }}
        />
        <Tooltip
          id="tooltip_time"
          style={{ backgroundColor: "rgb(255, 255, 255)", color: "#222" }}
        />
        {/* <h2>Распространение видов по локациям</h2>
      <div className="species_in_locations">
        <Plot
          config={plotConfig}
          data={data}
          layout={plotLayout}
          style={plotStyle}
        />
      </div> */}
        <h2>{text["title_species"]}</h2>
        <div ref={speciesRef}>
          <Species />
        </div>
        <h2>{text["title_dataset"]}</h2>
        <div className="description">{parse(text["about_dataset"])}</div>

        <h2>{text["title_project"]}</h2>
        <div className="about_project">
          <div className="stack">{parse(text["project"])}</div>

          <div className="contacts">
            <p>
              <span>
                <a href="mailto:kalipso@pretty-girl.ru">
                  <LuMail />
                </a>
              </span>
              <span>
                <a href="mailto:kalipso@pretty-girl.ru">
                  <LuGithub />
                </a>
              </span>
            </p>
          </div>
        </div>

        <p className="project_year">2025</p>
      </div>
    </div>
  );
}

export default App;
