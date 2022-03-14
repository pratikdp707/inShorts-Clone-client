import React, { useEffect } from "react";
import { getNews } from "../services/api";
import { Article } from "./Article";
//material ui components
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        marginTop: "50px",
    },
});

export const News = (props) => {
    
    const classes = useStyles();

    const dailyNews = async () => {
        let data = await getNews(props.category);
        //console.log(data)
        // props.setnews(data.data.data);
        // console.log(data)
        props.setnews(data.data.articles)
    };

    useEffect(() => {
        dailyNews();
    },[props.category]);

    return (
        <Box className={classes.container}>
            {props.news?.length > 0 &&
                props.news.map((article) => {
                    return <Article article={article} />;
                })}
        </Box>
    );
};
