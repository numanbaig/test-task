import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import useFetchCategoriesImage from "../hooks/useFetchDisplayContactImage";
const ListItem = ({ item, index, letter }) => {
  const classes = useStyles();
  console.log("itee", item);
  //   const {
  //     data: contactsImage,
  //     isLoading: ContactsImageLoading,
  //     isError: ContactsImageError,
  //   } = useFetchCategoriesImage(item.id);

  //   useEffect(() => {
  //     console.log("ss", contactsImage);
  //   }, [contactsImage]);
  return (
    <div>
      <Typography className={classes.bold}>
        {index === 0 ? (
          item.name[0]
        ) : (
          <>{item.name[0] !== letter && item.name[0]}</>
        )}
      </Typography>
      <div className={classes.list}>
        <div className={classes.width}>
          <div className={classes.flex}>
            <CheckCircleIcon className={classes.btnIcon} />
            <div className={clsx(classes.flex)}>
              <Avatar className={classes.avatar} />
              <div className={classes.info}>
                <Typography className={classes.name}>{item.name}</Typography>
                <Typography className={classes.phone}>
                  {item.phoneNumber}{" "}
                </Typography>
              </div>
            </div>
          </div>
          <Divider className={classes.divider} />
        </div>
        <div className={clsx(classes.width, classes.flexEnd)}>
          {item.tags.map(() => (
            <Button className={classes.tagBtn} variant="contained">
              Tag
              <AddCircleIcon className={classes.tagIn} />
            </Button>
          ))}
          <AddCircleIcon className={classes.addBtn} />
        </div>
      </div>
    </div>
  );
};
export default ListItem;

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    alignItems: "center",
  },
  btnIcon: {
    fontSize: 22,
    minWidth: "unset",
    color: theme.palette.primary.label,
  },
  list: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  avatar: {
    marginLeft: 20,
    width: 55,
    height: 55,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 14,
    color: theme.palette.primary.label,
  },
  width: {
    flex: 1,
  },
  flexEnd: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  divider: {
    marginTop: 10,
    marginLeft: 30,
    backgroundColor: theme.palette.primary.secondary,
  },
  addBtn: {
    marginBottom: 20,
    color: theme.palette.primary.primary,
    boxShadow: "0px 0px 0px 0px",
    " & .MuiButton-label": {
      fontSize: 12,
    },
  },
  bold: {
    fontWeight: "bold",
  },
  tagBtn: {
    marginBottom: 20,
    height: 30,
    marginRight: 20,
    backgroundColor: theme.palette.primary.primary,
    color: theme.palette.primary.main,
    borderRadius: 20,
    boxShadow: "0px 0px 0px 0px",
    " & .MuiButton-label": {
      fontSize: 12,
    },
  },
  tagIn: {
    marginLeft: 10,
    fontSize: 16,
  },
}));
