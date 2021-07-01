import React from "react";
import { Language, NotificationsNone, SettingsOutlined } from "@material-ui/icons";
import { Avatar, makeStyles } from "@material-ui/core";

import './topbar.css';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
  }));

export default function Topbar() {
    const classes = useStyles();

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">FoodCrowdy</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topbarIconBadge">17</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topbarIconBadge">17</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsOutlined />
                    </div>
                    <Avatar className={classes.small}>H</Avatar>
                </div>
            </div>
        </div>
    );
}
