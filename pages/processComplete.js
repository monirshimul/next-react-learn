
import React, { useState, Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import CheckIcon from '@mui/icons-material/Check';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import { Grid, IconButton, Paper } from '@mui/material';




const ProcessComplete = () => {
    const [accID, setAccId] = useState();
    const [response, setResponse] = useState([
        ["firstName", "monir"],
        ["lastName", "shimul"],
        ["email", "monirshimul@gmail.com"],
        ["address", "mirpur"],
        ["nationality", "Bangladesh"],

    ]);


    return (
        <div style={{backgroundColor: "#eee" }}>
            <Grid container sx={{height: "100vh", display: "flex", justifyContent: "center",  alignItems: "center",}}>
                <Grid item xs={10} sm={8} md={6}>
                    <Paper sx={{ padding: "15px" }}>
                        <p style={{ fontSize: "25px", color: "#9D9D9D", textAlign: "center", borderBottom: "1px dashed #9d9d9d", padding: "10px 0px" }}>Process Complete Successfully</p>
                        <p style={{ color: "#9D9D9D", textAlign: "center" }}>Here the Response Data</p>

                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {
                                response.map((val, ind) => (
                                    <Paper key={ind} sx={{ marginY: "5px" }}>
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <CheckIcon />
                                                </IconButton>
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <AlignHorizontalLeftIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={val[0]} secondary={val[1]} />
                                        </ListItem>
                                    </Paper>
                                ))
                            }
                        </List>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProcessComplete


