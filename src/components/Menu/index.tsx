import React from "react";

import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { ExitToApp } from "@material-ui/icons";

export function Menu() {
  const history = useHistory<typeof useHistory>();

  const goTo = (page: string) => {
    history.push(page);
  };

  return (
    <div>
      <List>
        <ListItem button onClick={() => goTo("/dashboard")}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => goTo("/dashboard/fetch")}>
          <ListItemText primary="Fetch Api" />
        </ListItem>
        <ListItem button onClick={() => goTo("/")}>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
}
