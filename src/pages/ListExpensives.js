import React from "react";
import FloatingAddActionButton from "../components/FloatingAddActionButton";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import moment from "moment";

const formatDate = date => {
  let momentDate = moment(date.toString());

  return momentDate.format("MMM Do YY");
};

const ListExpensives = ({ expensiveList, setShowAddPage }) => (
  <>
    <h1>My Expenses</h1>
    <Container maxWidth="sm">
      {expensiveList.length > 0 && (
        <List>
          {expensiveList.map(current => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={current.value}
                  secondary={formatDate(current.date)}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      )}
    </Container>
    <FloatingAddActionButton handleClick={setShowAddPage} />
  </>
);

export default ListExpensives;
