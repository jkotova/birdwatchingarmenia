import { createSlice } from "@reduxjs/toolkit";
import locations from "../../static/data/locations.json";
import species from "../../static/data/about_species.json";
import ru from "../../static/data/ru.json";
import en from "../../static/data/en.json";

const lang = {
  en: en,
  ru: ru,
};

const randomKey = function (obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
};

const randomLocationId =
  locations["features"][
    Math.floor(Math.random() * locations["features"].length)
  ]["properties"]["locality_id"];

const randomSpecies = randomKey(species);

type State = {
  location: String;
  species: String;
  year: Number;
  lang: any;
};

const initialState: State = {
  location: randomLocationId,
  species: randomSpecies,
  year: 2020,
  lang: lang.en,
};

export const slice = createSlice({
  name: "general",
  initialState,
  reducers: {
    set_location: (state, action) => ({
      ...state,
      location: action.payload,
    }),
    set_species: (state, action) => ({
      ...state,
      species: action.payload,
    }),
    set_year: (state, action) => ({
      ...state,
      year: action.payload,
    }),
    set_lang: (state, action) => ({
      ...state,
      lang: lang[action.payload],
    }),
  },
});

export const { set_location, set_species, set_year, set_lang } = slice.actions;
export default slice.reducer;
