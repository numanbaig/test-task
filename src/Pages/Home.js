import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AppBar from "../components/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FetchContacts from "../hooks/useFetchContacts";
import ListItem from "../components/ListItem";
const Home = () => {
  const classes = useStyles();
  const {
    data: contacts,
    isLoading: ContactsLoading,
    isError: ContactsError,
  } = FetchContacts();

  const [search, setSearch] = useState("");
  const [newContacts, setNewContacts] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };
  const renderList = (contactList) => {
    if (contactList) {
      let array = [];
      for (let i = 0; i < contactList.length; i++) {
        if (i === 0) {
          array.push({
            letter: contactList[i].name[0],
            item: contactList[i],
            index: i,
          });
        }
        if (contactList[i - 1]) {
          array.push({
            letter: contactList[i - 1].name[0],
            item: contactList[i],
            index: i,
          });
        }
      }
      setNewArray(array);
    }
  };

  useEffect(() => {
    if (search === "") {
      renderList(contacts);
    } else {
      const array = newContacts.filter((e) => e.name.includes(search));
      renderList(array);
    }
  }, [contacts, search]);

  useEffect(() => {
    setNewContacts(contacts);
  }, [contacts]);
  return (
    <div className={classes.home}>
      <AppBar
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        search={search}
      />
      <div className={classes.wrapper}>
        <div className={classes.list}>
          <CheckCircleIcon className={classes.btnIcon} />
          <Button className={classes.submitBtn} variant="contained">
            Export All
          </Button>
        </div>
        {ContactsError === true ? (
          <div>
            <Typography>Error</Typography>
          </div>
        ) : (
          <div>
            {newArray.length !== 0 &&
              newArray.map((item, index) => {
                return (
                  <ListItem
                    letter={item.letter}
                    item={item.item}
                    index={index}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  wrapper: {
    paddingTop: 20,
  },
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
