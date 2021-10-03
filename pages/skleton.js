import { Divider, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { Fragment, useState, useEffect } from 'react'
import { Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { green, lightBlue, red } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddchartIcon from '@mui/icons-material/Addchart';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "150px",
        padding: "20px"

    },
    paperStyle: {
        minHeight: "150px"
    },
    avaterDiv: {
        display: "flex",
        justifyContent: "space-between"
    },
    avater: {
        margin: "-30px 0px 0px 25px",
        width: "80px",
        height: "80px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
    }
})


const Skleton = () => {

    const [loading, setLoading] = useState(true)
    const classes = useStyles()

    useEffect(() => {
        setTimeout(() => {
            setLoading(!loading)
        }, 5000)
    }, [])


    return (
        <Fragment>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }}>
                        <Paper>
                            <div className={classes.avaterDiv}>
                                <Avatar className={classes.avater} sx={{ bgcolor: green[500] }} variant="rounded">
                                    <AssignmentIcon />
                                </Avatar>
                                <p style={{ margin: "10px 20px 0px 0px", color: "#707070", fontSize: "19px" }}><AcUnitIcon /> Features</p>
                            </div>
                            <Divider />
                            {
                                loading ? (
                                    <Stack spacing={1}>
                                        <Skeleton variant="text" />
                                        <Skeleton variant="circular" width={40} height={40} />
                                        <Skeleton variant="rectangular" height={118} />
                                    </Stack>
                                ) : (
                                    <Card sx={{ maxWidth: 345, mx: "auto" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="/one.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Features
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )
                            }

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper>
                            <div className={classes.avaterDiv}>
                                <Avatar className={classes.avater} sx={{ bgcolor: lightBlue[500] }} variant="rounded">
                                    <AssignmentIcon />
                                </Avatar>
                                <p style={{ margin: "10px 20px 0px 0px", color: "#707070", fontSize: "19px" }}><AddToDriveIcon /> Modules</p>
                            </div>
                            <Divider />
                            {
                                loading ? (
                                    <Stack spacing={1}>
                                        <Skeleton variant="text" />
                                        <Skeleton variant="circular" width={40} height={40} />
                                        <Skeleton variant="rectangular" height={118} />
                                    </Stack>
                                ) : (
                                    <Card sx={{ maxWidth: 345, mx: "auto" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="/two.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Modules
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper>
                            <div className={classes.avaterDiv}>
                                <Avatar className={classes.avater} sx={{ bgcolor: red[500] }} variant="rounded">
                                    <AssignmentIcon />
                                </Avatar>
                                <p style={{ margin: "10px 20px 0px 0px", color: "#707070", fontSize: "19px" }}><AddchartIcon /> Tasks</p>
                            </div>
                            <Divider />
                            {
                                loading ? (
                                    <Stack spacing={1}>
                                        <Skeleton variant="text" />
                                        <Skeleton variant="circular" width={40} height={40} />
                                        <Skeleton variant="rectangular" height={118} />
                                    </Stack>
                                ) : (
                                    <Card sx={{ maxWidth: 345, mx: "auto" }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="/three.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Tasks
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                )
                            }


                        </Paper>
                    </Grid>
                </Grid>
            </div>

        </Fragment>
    )
}

export default Skleton

