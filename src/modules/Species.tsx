import * as React from "react";
import Plot from "react-plotly.js";
import about_species from "./../../static/data/about_species.json";
import noPhoto from "./../../static/img/no_photo.jpg";
import speciesByYears from "./../../static/data/species_by_years.json";
import species_by_popularity from "./../../static/data/species_by_popularity.json";
import { FrameWrapper } from "./FrameWrapper.js";
import { MapboxSpecies } from "./MapboxSpecies";
import { plotConfig, plotLayout, plotStyle } from "./../constants/plot.js";
import { set_species } from "./../core/features.js";
import { useSelector, useDispatch } from "react-redux";
import parse from "html-react-parser";
import "./Species.css";

export const Species = () => {
  const lang = useSelector((state) => state.general.lang);
  const species = useSelector((state) => state.general.species);
  const dispatch = useDispatch();

  const selectSpecies = (species) => {
    dispatch(set_species(species["scientific_name"]));
  };

  return (
    <>
      {/* <div className="species_row">
        <div className="description">{parse(lang.about_species)}</div>
      </div> */}

      <div className="species">
        <div className="list">
          {/* <h4 className="list_header">{lang["title_species_popular"]}</h4> */}
          {Object.keys(species_by_popularity).map((key) => (
            <div
              className="locations_table_item"
              onClick={() => {
                selectSpecies(species_by_popularity[key]);
              }}
            >
              <div>
                {lang.name == "en"
                  ? species_by_popularity[key]["common_name"]
                  : about_species[key]["russian_name"]}
                <span>{key}</span>
              </div>
              <div>{species_by_popularity[key]["value"]}</div>
            </div>
          ))}
        </div>
        <div className="species_description">
          <h3>
            {lang.name == "en"
              ? about_species[species]["common_name"]
              : about_species[species]["russian_name"]}{" "}
            <span>{species}</span>{" "}
          </h3>
          <div className="species_container">
            <div className="species_media">
              {species &&
                about_species[species] &&
                about_species[species]["photo"] && (
                  <div className="species_photo">
                    <FrameWrapper iframe={about_species[species]["photo"]} />
                  </div>
                )}

              {species &&
                about_species[species] &&
                !about_species[species]["photo"] && (
                  <div className="species_photo">
                    <img src={noPhoto} alt="no Photo" className="no_photo" />
                  </div>
                )}
              {species &&
                about_species[species] &&
                about_species[species]["locations"] && (
                  <>
                    <h4>{lang["species"]["map"]}</h4>
                    <MapboxSpecies
                      height={300}
                      locations={about_species[species]["locations"]}
                    />
                  </>
                )}
            </div>

            <div className="species_map">
              {species && speciesByYears[species] && (
                <div className="species_plot">
                  <h4>{lang["species"]["chart"]}</h4>
                  <Plot
                    config={plotConfig}
                    data={[
                      {
                        x: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
                        y: [
                          speciesByYears[species]["2018"] || 0,
                          speciesByYears[species]["2019"] || 0,
                          speciesByYears[species]["2020"] || 0,
                          speciesByYears[species]["2021"] || 0,
                          speciesByYears[species]["2022"] || 0,
                          speciesByYears[species]["2023"] || 0,
                          speciesByYears[species]["2024"] || 0,
                        ],
                        type: "scatter",
                        mode: "lines+markers",
                        marker: { color: "#3D8D7A" },
                      },
                    ]}
                    style={{
                      ...plotStyle,
                      height: 200,
                    }}
                    layout={{
                      ...plotLayout,
                      margin: {
                        t: 0,
                        b: 20,
                        l: 30,
                        r: 10,
                      },
                    }}
                  />
                </div>
              )}

              {species &&
                about_species[species] &&
                about_species[species]["sound"] && (
                  <div className="species_sound">
                    <h4>{lang["species"]["sound"]}</h4>
                    <FrameWrapper iframe={about_species[species]["sound"]} />
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
