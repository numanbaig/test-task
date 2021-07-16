import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Input from "./Input";
import AppBar from "@material-ui/core/AppBar";
const AppBarComponent = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={clsx(classes.appBar)}>
      <div>
        <div className={classes.flex}>
          <Typography className={classes.heading} variant="h5" noWrap>
            All Contacts (100)
          </Typography>
          <AddCircleIcon className={classes.addIcon} />
        </div>
        <div className={classes.inputContainer}>
          <Input />
        </div>
      </div>
    </AppBar>
  );
};
export default AppBarComponent;

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "0px 0px 0px 0px",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  heading: {
    fontWeight: "bold",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  },
  addIcon: {
    fontSize: 30,
    color: theme.palette.primary.primary,
  },

  inputContainer: {
    paddingLeft: 0,
    paddingRight: 20,
    paddingTop: 20,
  },
}));
