import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 300;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  head: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  para: {
    color: theme.palette.primary.para,
    fontSize: 14,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  drawerMain: {
    paddingLeft: 15,
    position: "sticky",
    paddingRight: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
  },
  main: {
    paddingLeft: 20,
    paddingRight: 30,
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  heading: {
    fontWeight: "bold",
  },
  tag: {
    fontWeight: "bold",
    fontSize: 15,
    paddingBottom: 10,
  },
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
    // marginLeft: 10,
    // marginRight: 10,

    "& .MuiListItem-gutters ": {
      paddingRight: 0,
      margin: 0,
    },
    // marginLeft: 10,
    // marginRight: 10,
    // backgroundColor: "#eee",
  },
  btnText: {
    padding: 0,
    flex: "unset",
    fontSize: 12,
  },
  btnIcon: {
    minWidth: "unset",
    color: theme.palette.primary.primary,
  },
  marTop: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  inputs: {
    width: 120,
    height: 40,
    borderRadius: 8,
    paddingLeft: 10,
    outline: "none",
    backgroundColor: theme.palette.primary.secondary,
    border: "none",
  },
  submitBtn: {
    marginBottom: 20,
    backgroundColor: theme.palette.primary.primary,
    color: theme.palette.primary.main,
  },
}));
