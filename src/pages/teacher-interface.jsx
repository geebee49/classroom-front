import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import SideBar from "../components/sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  scrollables_container: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  intro: {
    display: "flex",
  },
}));

export default function TeacherInterface() {
  const classes = useStyles();

  return (
    <div classname={classes.root}>
      <SideBar />
      <div id="">
        <div className={classes.intro}>
          <img
            src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/mammootty_1340_29-07-2016_11-43-24.jpg"
            alt="Greatest actor after mohanlal"
            width="50px"
            height=" 50px"
          />
          <h2>Classroom</h2>
        </div>
      </div>
      <div className={classes.scrollables_container}>
        <Paper style={{ maxHeight: 200, maxWidth: 300, overflow: "auto" }}>
          <List className={classes.root}>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Ali Connors
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
          </List>
        </Paper>
        <Paper style={{ maxHeight: 200, maxWidth: 300, overflow: "auto" }}>
          <List className={classes.root}>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Ali Connors
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
          </List>
        </Paper>
        <Paper style={{ maxHeight: 200, maxWidth: 300, overflow: "auto" }}>
          <List className={classes.root}>
            {[1, 2, 3, 4, 5].map(() => {
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Ali Connors
                          </Typography>
                          {
                            " — I'll be in your neighborhood doing errands this…"
                          }
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })}
          </List>
        </Paper>
      </div>
    </div>
  );
}
