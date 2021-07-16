import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import List from "@material-ui/core/List";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
const ListComponent = () => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem
          className={clsx(
            index === 0 ? classes.firstBtn : classes.btn,
            index % 2 !== 0 ? classes.white : classes.dull
          )}
          button
          key={text}
        >
          <ListItemText className={classes.btnText} primary={text} />
          <ListItemIcon className={classes.btnIcon}>
            <CheckCircleIcon className={classes.btnIcon} />
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};
export default ListComponent;
const useStyles = makeStyles((theme) => ({
  list: {
    borderRadius: 15,
    paddingBottom: 10,
    paddingTop: 0,
    backgroundColor: theme.palette.primary.secondary,
    "& .MuiList-padding ": {
      paddingTop: 0,
    },
  },
  white: {
    backgroundColor: "#fff",
  },
  dull: {
    backgroundColor: theme.palette.primary.secondary,
  },

  firstBtn: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
  },
  btn: {
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,

    "& .MuiListItem-gutters ": {
      paddingRight: 0,
      margin: 0,
    },
  },
  btnText: {
    padding: 0,
    flex: "unset",
    fontSize: 5,
    "& .MuiTypography-body1": {
      fontSize: 13,
    },
  },
  btnIcon: {
    fontSize: 18,
    minWidth: "unset",
    color: theme.palette.primary.primary,
  },
}));
