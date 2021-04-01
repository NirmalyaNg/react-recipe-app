import React from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function SearchBar({ search, searchHandler, buttonSearchHandler }) {
  const classes = useStyles();

  return (
    <div>
      <Paper
        component="form"
        className={classes.root}
        onSubmit={buttonSearchHandler}
      >
        <InputBase
          className={classes.input}
          onChange={searchHandler}
          value={search}
          placeholder="Search Recipe"
          inputProps={{ "aria-label": "Search Recipe" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}

export default SearchBar;
