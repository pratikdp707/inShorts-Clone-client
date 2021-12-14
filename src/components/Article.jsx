import React from 'react'
import broken from './broken.png'
import {Card, CardContent, Grid, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    image:{
        height:"268px",
        width:"88%",
        borderRadius:5,
        objectFit:"cover",
        [theme.breakpoints.down('xs')]:{
            width:"100%"
        }
    },
    component: {
        marginBottom:20,
        boxShadow: '0 2px 5px 0 rgb(0 0 0 /16%), 0 2px 10px 0 rgb(0 0 0 /12%)'
    },
    title:{
        color:"#44444d",
        fontSize:"20px",
        fontWeight:"300",
        lineHeight:"27px"
    },
    container:{
        padding:"10px",
        paddingBottom :"5px!important"
    },
    rightContainer:{
        margin:"5px 0 0 -25px",
        display:"flex",
        flexDirection:"column",
        [theme.breakpoints.down('sm')]:{
            margin:"5px 0"
        }
    },
    author:{
        fontSize:"12px",
        color:"#808290",
        lineHeight:"22px"
    },
    description:{
        lineHeight:"22px",
        color:"#44444d",
        marginTop:"5px",
    },
    publisher:{
        fontSize:"12px",
        marginTop:"auto",
        marginBottom:"10px",
        '& > *':{
            textDecoration:'none',
            color:"#000",
            fontWeight:900
        }
    }
}))

export const Article = ({article}) => {

    const classes = useStyles();

    return (
        <Card className={classes.component}>
            <CardContent className ={classes.container}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <img src={article.urlToImage ? article.urlToImage : broken} alt="" className= {classes.image}></img>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12} className={classes.rightContainer}>
                        <Typography className={classes.title}>{article.title}</Typography>
                        <Typography className={classes.author}>
                            <b>short</b> by {article.author?article.author:`someone`} / {new Date(article.publishedAt).toDateString()}
                        </Typography>
                        <Typography className={classes.description}>
                            {article.description}
                        </Typography>
                        <Typography className={classes.publisher}>
                            read more at <a href={article.url} target="_blank" rel="noreferrer" >{article.source.name}</a>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
