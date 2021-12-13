import React from 'react'

//material ui components
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    container:{
        color:"#fff",
        background: "#f44336",
        height:"50px",
        display:"flex",
        alignItems: "center",
        [theme.breakpoints.down('md')]:{
            display:"none"
        }
    },
    text:{
        fontSize: "14px",
        marginLeft:"50px",
        fontWeight:"400"
    },
    logo:{
        height:"38px",
        '&:last-child':{
            margin:"6px 50px 0 40px"
        }
    }
}))

export const Header = () => {
    
    const classes = useStyles();
    
    const appleStore = "https://assets.inshorts.com/website_assets/images/appstore.png";
    const googleStore = "https://assets.inshorts.com/website_assets/images/playstore.png";


    return (
        <>
            <Box className={classes.container}>
                <Typography className={classes.text}>For the best experience use <strong>inshorts</strong> app on your smartphone</Typography>
                <Box style={{marginLeft:"auto"}}>
                    <img src={appleStore} alt="apple" className={classes.logo}></img>
                    <img src={googleStore} alt="google" className={classes.logo}></img>
                </Box>
            </Box>
        </>        
    )
}
