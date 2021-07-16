import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AppBar from "../components/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FetchContacts from "../hooks/useFetchContacts";
import { useEffect } from "react";
const Home = () => {
  const classes = useStyles();
  const {
    data: contacts,
    isLoading: ContactsLoading,
    isError: ContactsError,
  } = FetchContacts();
  console.log("contacts", contacts);
  console.log("error", ContactsError);
  return (
    <div className={classes.home}>
      <AppBar />
      <div className={classes.wrapper}>
        <div className={classes.list}>
          <CheckCircleIcon className={classes.btnIcon} />
          <Button className={classes.submitBtn} variant="contained">
            Export All
          </Button>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 12, 1, 1, 1, 1].map((e, index) => (
          <div>
            <Typography className={classes.bold}>
              {index === 0 && "A"}{" "}
            </Typography>
            <div className={classes.list}>
              <div className={classes.width}>
                <div className={classes.flex}>
                  <CheckCircleIcon className={classes.btnIcon} />
                  <div className={clsx(classes.flex)}>
                    <Avatar className={classes.avatar} />
                    <div className={classes.info}>
                      <Typography className={classes.name}>
                        Noman Baig
                      </Typography>
                      <Typography className={classes.phone}>
                        +923174697659
                      </Typography>
                    </div>
                  </div>
                </div>
                <Divider className={classes.divider} />
              </div>
              <div className={clsx(classes.width, classes.flexEnd)}>
                {index === 3 && (
                  <Button className={classes.tagBtn} variant="contained">
                    Tag
                    <AddCircleIcon className={classes.tagIn} />
                  </Button>
                )}
                <AddCircleIcon className={classes.addBtn} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
const useStyles = makeStyles((theme) => ({
  submitBtn: {
    marginBottom: 20,
    backgroundColor: theme.palette.primary.primary,
    color: theme.palette.primary.main,
    borderRadius: 10,
    boxShadow: "0px 0px 0px 0px",
    " & .MuiButton-label": {
      fontSize: 12,
    },
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
  wrapper: {
    paddingTop: 20,
  },
  appBar: {
    position: "sticky",
  },
  flex: {
    display: "flex",
    alignItems: "center",
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
