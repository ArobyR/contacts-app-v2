import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TableContacts from "../TableContacts/TableContacts";
import FormContact from "../FormContact/FormContact";
import { useStyles } from "../../globalStyles";

// add one button to how or hide the form
const Contacts = () => {
  const [formView, setFormView] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.fields}>
      <Button
        variant="contained"
        onClick={() => setFormView(!formView)}
        color={formView ? "secondary" : "primary"}
      >
        {formView === true ? "Close" : "Add"}
      </Button>
      {formView && <FormContact />}
      <TableContacts />
    </div>
  );
};

export default React.memo(Contacts);
