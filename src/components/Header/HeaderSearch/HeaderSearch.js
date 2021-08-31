import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import SearchIcon from "@material-ui/icons/Search";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import "./HeaderSearch.css";

export default function HeaderSearch() {
  return (
    <Autocomplete
      id="highlights-demo"
      options={top10Films}
      size="small"
      className="header-search-input"
      getOptionLabel={(option) => option.title}
      forcePopupIcon={true}
      popupIcon={<SearchIcon />}
      renderInput={(params) => (
        <TextField {...params} label="Search movies" variant="outlined" />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.title, inputValue);
        const parts = parse(option.title, matches);

        return (
          <div onClick={() => console.log("this will route to the movie/show")}>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
}

const top10Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
];
