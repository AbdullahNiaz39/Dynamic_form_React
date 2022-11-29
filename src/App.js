import { AddCircleOutline, DeleteForever } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

function App() {
  //style  object
  const style = {
    marginRight: "10px",
    marginBottom: "10px",
  };
  ///Input Field object for use hooks
  const [inputFields, setInputField] = useState([
    { firstName: "", lastName: "" },
  ]);
  /// onchange Function
  const handleChange = (index, e) => {
    const values = [...inputFields];
    values[index][e.target.name] = e.target.value;
    setInputField(values);
  };

  /// form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };
  /// Add new Fields
  const handleAdd = () => {
    setInputField((inputFields) => [
      ...inputFields,
      { firstName: "", lastName: "" },
    ]);
  };
  /// Delete a Fields
  const handleDelete = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputField(values);
  };
  const sum = inputFields.length;
  return sum !== 0 ? (
    <Container>
      <h1>Add new Person</h1>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField
              name="firstName"
              label="First Name"
              value={inputField.firstName}
              sx={style}
              onChange={(e) => handleChange(index, e)}
            />
            <TextField
              name="lastName"
              label="Last Name"
              value={inputField.lastName}
              sx={style}
              onChange={(e) => handleChange(index, e)}
            />
            <IconButton onClick={() => handleDelete(index)}>
              <DeleteForever sx={{ fontSize: "40px" }} />
            </IconButton>
            <IconButton onClick={handleAdd}>
              <AddCircleOutline sx={{ fontSize: "40px" }} />
            </IconButton>
          </div>
        ))}
      </form>
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        type="submit"
      >
        Send ▶️
      </Button>
    </Container>
  ) : (
    <h1>No Field is Exists !</h1>
  );
}

export default App;
