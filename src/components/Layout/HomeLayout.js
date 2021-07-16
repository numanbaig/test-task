import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { useStyles } from "../../styles/LayoutStyle";
import ListComponent from "../List";

export default function PersistentDrawerLeft({ children }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerMain}>
          <div>
            <div className={classes.drawerHeader}>
              <Box className={classes.flex}>
                <FormatListBulletedIcon />
                <Typography className={classes.head} variant="h5">
                  Audience
                </Typography>
              </Box>
              <Typography className={classes.para} variant="h6">
                100 contacts
              </Typography>
            </div>
            <Typography c className={clsx(classes.tag)} variant="h5">
              Include Tags
            </Typography>
            <ListComponent />
            <Typography
              className={clsx(classes.tag, classes.marTop)}
              variant="h5"
            >
              Exclude Tags
            </Typography>
            <ListComponent />
            <Typography
              className={clsx(classes.tag, classes.marTop)}
              variant="h5"
            >
              Message Sent
            </Typography>
            <form className={classes.inputContainer} autoComplete="off">
              <input placeholder="Min" className={classes.inputs} />
              <input placeholder="Max" className={classes.inputs} />
            </form>
            <Typography
              className={clsx(classes.tag, classes.marTop)}
              variant="h5"
            >
              Message Receive
            </Typography>
            <form className={classes.inputContainer} autoComplete="off">
              <input placeholder="Min" className={classes.inputs} />
              <input placeholder="Max" className={classes.inputs} />
            </form>
          </div>
          <Button className={classes.submitBtn} variant="contained">
            Submit
          </Button>
        </div>
      </Drawer>
      <main className={clsx(classes.main)}>{children}</main>
    </div>
  );
}
