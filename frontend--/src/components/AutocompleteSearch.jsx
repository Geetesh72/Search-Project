import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Autocomplete } from "@mui/material";

const AutocompleteSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query) {
      fetchSuggestions(query);
    }
  }, [query]);

  const fetchSuggestions = async (input) => {
    try {
      const response = await axios.get("http://localhost:4000/autocomplete", {
        params: { query: input },
      });
      const data = response.data.aggregations.auto_complete.buckets.map(
        (bucket) => bucket.key
      );
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching autocomplete suggestions:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h4>Search Efficiently with elasticsearch</h4>
      <Autocomplete
        freeSolo
        options={suggestions}
        onInputChange={(event, newInputValue) => setQuery(newInputValue)}
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" />
        )}
        style={{ width: "300px", margin: "20px auto" }}
      />
    </div>
  );
};

export default AutocompleteSearch;
