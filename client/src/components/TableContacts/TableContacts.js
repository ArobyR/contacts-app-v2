import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./TableStyles";
import { Button } from "@material-ui/core";

const TableContacts = () => {
  const classes = useStyles();

  const contacts = [
    { _id: 1, username: "Aaron", phone: 22223 },
    { _id: 2, username: "Maria", phone: 12224 },
    { _id: 3, username: "Jimena", phone: 2222223 },
    { _id: 4, username: "Satoshi", phone: 18222223 },
    { _id: 5, username: "comoba", phone: 211441. },
    { _id: 6, username: "Sk", phone: 11222 },
    { _id: 7, username: "fji", phone: 120202020 },
    { _id: 8, username: "Nakamoto", phone: 1222 },
    { _id: 9, username: "Nakamoto", phone: 1222 },
    { _id: 10, username: "Nakamoto", phone: 1222 },
    { _id: 11, username: "Nakamoto", phone: 1222 },
    { _id: 12, username: "Nakamoto", phone: 1222 },
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Name: </TableCell>
            <TableCell align="right">Phone:</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell component="th" scope="row">
                {contact.username}
              </TableCell>
              <TableCell align="right">{contact.phone}</TableCell>
              <TableCell align="right">
                <Button color="primary" variant="contained">Update</Button>
              </TableCell>
              <TableCell align="right">
                <Button color="secondary" variant="contained">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContacts;
