import { Box, Container, Stack } from "@mui/material";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-redeclare
import Divider from "../../components/divider/divider";

export default function Statistics() {
    return (
        <div className={"static-frame"}>
            <Container>
                <Stack className="info">
                    <Stack className="static-box">
                        <Box className="static-num">12</Box>
                        <Box className="static-text">Restaurants</Box>
                    </Stack>

                    <Divider height="64" width="2" bg="#E3C08D" />

                    <Stack className="static-box">
                        <Box className="static-num">8</Box>
                        <Box className="static-text">Experience</Box>
                    </Stack>
                    
                    <Divider height="64" width="2" bg="#E3C08D" />

                    <Stack className="static-box">
                        <Box className="static-num">50+</Box>
                        <Box className="static-text">Menu</Box>
                    </Stack>

                    <Divider height="64" width="2" bg="#E3C08D" />

                    <Stack className="static-box">
                        <Box className="static-num">200+</Box>
                        <Box className="static-text">Clients</Box>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}