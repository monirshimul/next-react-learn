
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
        ["firstName", "monir", "#EBA83A"],
        ["lastName", "shimul", "#00EAD3"],
        ["email", "monirshimul@gmail.com", "#FF449F"],
        ["address", "mirpur", "#F55C47"],
        ["nationality", "Bangladesh", "#4AA96C"],

    ]);


    return (
        <div style={{backgroundColor: "#eee" }}>
            <Grid container sx={{height: "100vh", display: "flex", justifyContent: "center",  alignItems: "center",}}>
                <Grid item xs={10} sm={8} md={6}>
                    <Paper sx={{ padding: "15px" }}>
                        <Paper sx={{backgroundColor:"#E8F6EF"}}>
                        <p style={{ fontSize: "20px", color: "#9D9D9D", textAlign: "center", padding: "10px 0px" }}>Process Complete Successfully</p>
                        </Paper>
                        
                        <h5 style={{ color: "#9D9D9D", fontSize:"15px", textAlign: "center", marginTop:"10px" }}>Here the Response Data</h5><hr/>

                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {
                                response.map((val, ind) => (
                                    <Paper key={ind} sx={{ marginY: "5px" }}>
                                        <ListItem
                                            sx={{backgroundColor:"#E8F6EF"}}
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <CheckIcon sx={{color:"#A3A847"}} />
                                                </IconButton>
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar sx={{backgroundColor:val[2]}}>
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


