import { Box, Button, Paper, Stack } from "@mui/material";
import React from "react";
import Images from "../../atoms/Image";
import Textfield from "../../atoms/Textfield";
import Buttons from "../../atoms/Button";
import Typo from "../../atoms/Typography";

const Contact = () => {
  return (
    <Stack marginTop={"4%"} direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={0}>
        <Paper elevation={3}>
          <Stack direction={"row"} margin={5} spacing={6}>
            <Stack spacing={2} width={"100%"}>
              <Stack spacing={1}>
                <Typo
                  variant={"h4"}
                  content={"Get In Touch"}
                  color={"#ea4dad"}
                />

                <Typo
                  variant={"body2"}
                  content={"We are here for you! How can we help?"}
                  color={"black"}
                />
              </Stack>
              <Textfield placeholder={"enter your name"} />
              <Textfield placeholder={"enter your email"} />
              <Textfield placeholder={"please enter your issue"} row={4} multiline={true} variant="filled"/>
              <Button content={""} variant={"contained"} color="success">Submit</Button>
            </Stack>
            <Stack spacing={2}>
              <Images src={"Group 15.svg"} alt={"image"} />
              <Stack spacing={2}>
                <Stack
                  direction={"row"}
                  spacing={1}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                >
                  <Images src={"location.svg"} alt={"location"} width="10%" />
                  <Typo
                    variant={"body2"}
                    content={"6-56,kakinada,Andhra Pradesh-533437"}
                  />
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={1}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                >
                  <Images src={"call.svg"} alt={"call"} width="10%" />
                  <Typo variant={"body2"} content={"+911234567890"} />
                </Stack>
                <Stack
                  direction={"row"}
                  spacing={1}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                >
                  <Images src={"email.svg"} alt={"email"} width="10%" />
                  <Typo variant={"body2"} content={"abc@gmail.com"} />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      <Stack marginTop={"15%"}>
        <Images src={"sidebar.svg"} alt={"sidebar"} />
      </Stack>
    </Stack>
  );
};

export default Contact;
