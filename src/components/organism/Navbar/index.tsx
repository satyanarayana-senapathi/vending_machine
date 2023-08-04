import { Button, Stack } from "@mui/material";
import Images from "../../atoms/Image";
import Typo from "../../atoms/Typography";
import Buttons from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Contact from "../Contact";

interface NavProp{
  status:string;
  statusChange:(arg0:string)=>void;
}
const Navbar = ({status,statusChange}:NavProp) => {
    const [contact,setContact] =useState(false);
    const [login,setLogin] = useState(true);
    const navigate = useNavigate();
  return (
    <Stack direction={"row"} justifyContent={"space-between"} margin={"3rem 10rem 1rem 10rem"}>
      <Stack direction={"row"} spacing={2}>
        {/* <Images src={"logo.svg"} alt={"logo"} /> */}
        <Typo
          className="logoHead"
          variant={"h4"}
          content={"Vending Machine"}
          sx={{ marginTop: "20px" }}
        />
      </Stack>
      <Stack direction={"row"} spacing={4} sx={{ margin: "14px" }}>
      <Button color="success" variant={contact ? "contained" : "text"} sx={ { color: "white"}}  onClick={()=>{navigate("/contact");setContact(!contact);setLogin(!login)}} >
      Contact
      </Button>
      <Button variant={login ? "contained" : "text"} color="success"sx={{ color: "white" }} onClick={()=>{navigate("/");setLogin(!login);setContact(!Contact) ; if(status==="logOut" ){statusChange("login")}}} >
      {status}
      </Button>
        {/* <Buttons content={"x" } variant={"text"} color="success"/> */}
        {/* <Buttons id = "navButton" content={"Contact"}  color={"success"}  /> */}
        {/* <Buttons id = "navButton"   /> */}
      </Stack>
    </Stack>
  );
};

export default Navbar;
