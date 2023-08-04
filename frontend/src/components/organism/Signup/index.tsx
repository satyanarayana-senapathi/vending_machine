import {
  Stack,
  Paper,
  FormControl,
  IconButton,
  InputAdornment,
  FilledInput,
  Button,
} from "@mui/material";
import React from "react";
import Images from "../../atoms/Image";
import Textfield from "../../atoms/Textfield";
import Typo from "../../atoms/Typography";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface Prop{
  statusChange:(arg0:string)=>void;
}
const Signup = ({statusChange}:Prop) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const navigate=useNavigate();

  return (
    <Stack
      marginTop={"4%"}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={0}
    >
      <Paper elevation={3}>
        <Stack direction={"row"} margin={5} spacing={6}>
          <Stack spacing={2} width={"100%"}>
            <Typo variant={"h4"} content={"Please Login"} color={"#ea4dad"} />
            <Textfield placeholder={"enter your name"} />
            <Textfield placeholder={"enter your email"} />
            <FormControl sx={{ m: 1, width: "25ch" }}>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="enter password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button variant={"contained"} color="success"onClick={()=>{ navigate("/vendingMachine"); statusChange("logOut")}}>Submit</Button>
          </Stack>
          <Stack>
            <Images src={"icon.png"} alt={"image"} width="350px" />
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Signup;
