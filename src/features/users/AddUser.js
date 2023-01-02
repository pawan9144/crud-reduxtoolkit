import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const handleOnChange = (e) => {
    console.log(e.target.value);
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleAddUser = () => {
    // setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={handleOnChange}
        inputProps={{ type: "text", placeholder: "Jhon Doe", name: "name" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={handleOnChange}
        inputProps={{
          type: "email",
          placeholder: "jhondoe@mail.com",
          name: "email",
        }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
