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
import "../styles/teacher-interface.css";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const useStyles = makeStyles((theme) => ({
  whole: {
    position: "relative",
  },
  root: {
    borderRadius: 15,
    height: 300,
    overflowY: "auto",
    width: "36ch",
    marginTop: 2,
    paddingTop: 1,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  scrollables_container: {
    margin: "2rem",
    marginLeft: "4rem",
    marginTop: "5rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
  intro: {
    display: "flex",
    alignItems: "center",
    "& h2": {
      fontSize: "2rem",
    },
  },
  scrollables: {
    boxShadow: "none",
    border: "1px solid gray",
    borderRadius: 15,
    padding: "0.4rem",
  },
  scrollHeading: {
    "& h3": {
      margin: 0,
    },
    padding: "10px 0",
    margin: 0,
    textAlign: "center",
    borderBottom: "1px solid gray",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#323232",
    color: "white",
    borderRadius: 15,
    border: "none",
    boxShadow: "none",
    cursor: "pointer",
    padding: "0.5rem 1.3rem",
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  joinButton: {
    width: "100%",
    textAlign: "center",
    "& button": {
      color: "white",
      backgroundColor: "#323232",
      border: "none",
      borderRadius: 20,
      width: "10rem",
      height: "3rem",
      fontSize: "1.2rem",
      fontWeight: "bold",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "black",
      },
    },
  },

  buttonGroup: {
    position: "absolute",
    right: "2rem",
    top: "2.5rem",
    "& button": {
      width: "3rem",
      height: "3rem",
      margin: "0.3rem",
      color: "white",
      backgroundColor: "#323232",
      border: "none",
      borderRadius: "100%",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "black",
      },
    },
  },
}));

export default function TeacherInterface() {
  const classes = useStyles();
  const members = [
    { name: "Hadley Cook", is: "student" },
    { name: "Clyde Lucas", is: "student" },
    { name: "Sasha Ho", is: "student" },
    { name: "Mylan Pierre", is: "student" },
    { name: "Yousif Cross", is: "student" },
    { name: "Bradley Smythe", is: "student" },
    { name: "Korbyn Colon", is: "student" },
    { name: "Jordy Eubanks", is: "student" },
  ];
  const studentQuery = [
    { name: "James Perry", query: "When should we submit the assignment?" },
    { name: "Niall Mercado", query: "When should we submit the assignment?" },
    { name: "Rylan Tolbert", query: "When should we submit the assignment?" },
    { name: "Rachel Leonard", query: "When should we submit the assignment?" },
  ];

  return (
    <div className={classes.whole}>
      <SideBar />
      <div style={{ margin: "2rem 0 0 7rem" }}>
        <div className={classes.intro}>
          <img
            src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/mammootty_1340_29-07-2016_11-43-24.jpg"
            alt="Greatest actor after mohanlal"
            width="50px"
            height=" 50px"
          />
          <h2>S3 CLASSROOM</h2>
        </div>
      </div>
      <div className={classes.buttonGroup}>
        <button>
          <NotificationsNoneOutlinedIcon style={{ fontSize: "1.7rem" }} />
        </button>
        <button>
          <ExitToAppOutlinedIcon style={{ fontSize: "1.7rem" }} />
        </button>
      </div>
      <div className={classes.scrollables_container}>
        <div>
          <h3 style={{ fontSize: "1.4rem" }}>Student Queries</h3>
          <Paper className={classes.scrollables}>
            <List className={classes.root}>
              {studentQuery.map((eachQuery) => {
                return (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src="https://www.ecclesiologyandethnography.net/wp-content/uploads/2019/06/Koos-Tamminga.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={<b>{eachQuery.name}</b>}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              {eachQuery.query}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
            </List>
          </Paper>
        </div>
        <Paper className={classes.scrollables}>
          <div className={classes.scrollHeading}>
            <h3>Announcements</h3>
            <button className={classes.addButton}>Add</button>
          </div>
          <List className={classes.root}>
            {[1, 2].map(() => {
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="No class today!"
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
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
        </Paper>
        <Paper className={classes.scrollables}>
          <h3 className={classes.scrollHeading}>Members</h3>
          <List className={classes.root}>
            {members.map((member) => {
              return (
                <>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://www.ecclesiologyandethnography.net/wp-content/uploads/2019/06/Koos-Tamminga.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={<b>{member.name}</b>}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {member.is}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
        </Paper>
      </div>
      <div className={classes.joinButton}>
        <button>Join Class</button>
      </div>
    </div>
  );
}
