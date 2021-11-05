import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { useStyles } from "./styles";
import TextField from "@material-ui/core/TextField";

const initialValue = { name_contact: "", phone: "" };

const FormContact = (props) => {
  const [formData, setFormData] = useState(initialValue);
  const { name_contact, phone } = formData;
  const classes = useStyles();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make petitions and etc like show modals
    const { nameContact, contactNumber } = e.target;
    console.log(`name: ${nameContact} contact: ${contactNumber}`);
  };

  return (
    <div className="">
      <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          required
          id="nameContact"
          label="contact name"
          variant="outlined"
          onChange={handleChange}
          InputProps={{ inputProps: { minLength: 3 } }}
        />
        <TextField
          required
          type="number"
          id="contactNumber"
          label="contact number"
          variant="outlined"
          onChange={handleChange}
          InputProps={{ inputProps: { minLength: 6 } }}
        />
        <br />
        <CustomButton type="submit">Add contact</CustomButton>
      </form>
    </div>
  );
};

export default FormContact;
