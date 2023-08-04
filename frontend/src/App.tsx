import "./App.css";
import Navbar from "./components/organism/Navbar";
import { Box, Stack } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/organism/Contact";
import Signup from "./components/organism/Signup";
import Machine from "./components/pages/Meachine";
import { useState } from "react";
import React from "react";

function App() {
  const [status,setStatus]= useState("login")
  return ( 
    <>
    <BrowserRouter>
    
      <Box className="App" width={"100%"} height={"100vh"}>
        <Stack className="Container">
        <Navbar status={status} statusChange={setStatus}/>
        <Routes>
          <Route index element={<Signup statusChange={setStatus}/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route  path="/signup" element={<Signup statusChange={setStatus}/> }/>
          <Route path="/vendingMachine" element={<Machine stateChange={setStatus}/>}/>
        </Routes>
        </Stack>
      </Box>
      </BrowserRouter>
     </>
  );
}

export default App;
