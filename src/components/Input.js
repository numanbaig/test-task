import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderRadius: 20,
    outline: "none",
    paddingLeft: 20,
    border: "none",
    backgroundColor: theme.palette.primary.secondary,
    boxShadow: "0px 0px 0px 0px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "#c2cbdb",
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase({
  search,
  setSearch,
  handleSubmit,
}) {
  const classes = useStyles();

  return (
    <Paper onSubmit={handleSubmit} component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchIcon type="submit" />
      </IconButton>
      <InputBase
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={classes.input}
        placeholder="Search Contacts"
      />
    </Paper>
  );
}
