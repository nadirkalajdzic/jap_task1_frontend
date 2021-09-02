import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";

import { getFilteredShows, getTopMovies } from "../../../api/videosApi";

import "./HeaderSearch.css";

export default function HeaderSearch() {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);

    const fetchData = setTimeout(async () => {
      if (inputValue.length === 0)
        getTopMovies()
          .then((res) => setOptions(res.data.data))
          .catch(() => toast.error("Failed to load data"));

      if (inputValue.length >= 2)
        getFilteredShows(inputValue)
          .then((res) => setOptions(res.data.data))
          .catch(() => toast.error("Failed to load data"));

      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(fetchData);
  }, [inputValue]);

  const routeToItem = (val, newVal) => {
    history.push(`/item/${newVal.id}`);
  };

  return (
    <Autocomplete
      size="small"
      className="header-search-input"
      forcePopupIcon
      popupIcon={
        isLoading ? (
          <CircularProgress color="inherit" size={20} />
        ) : (
          <SearchIcon />
        )
      }
      onInputChange={(e, val) => setInputValue(val)}
      inputValue={inputValue}
      onChange={routeToItem}
      filterOptions={(options) => options}
      getOptionLabel={(option) => option.title}
      getOptionSelected={(option, value) => option.title === value.title}
      options={options}
      loading={isLoading}
      renderOption={(option, { inputValue }) => {
        return <div>{option.title}</div>;
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search movies/shows"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: <>{params.InputProps.endAdornment}</>,
          }}
        />
      )}
    />
  );
}
