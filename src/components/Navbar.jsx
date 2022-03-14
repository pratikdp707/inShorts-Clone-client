import React from 'react'

//material ui components
import { AppBar, Toolbar, makeStyles, Drawer, Divider, IconButton, List, useTheme, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
    header: {
        background: "#fff",
        height: "70px"
    },
    logo: {
        height: "65px",
        margin: "auto",
        paddingRight: "20px"
    },
    menu: {
        color: "#000"
    },
    drawer: {
        backgroundColor: "#303036",
        color: "#fff",
        width: "200px"
    },
    drawerHeader: {
        backgroundColor: "#303036",
        color: "#fff",
        width: "300px"
    },
    button: {
        width: "90%",
        margin: "5px 10px ",
        color: "#fff",
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 30
    },
    drawerCategory: {
        backgroundColor: "#303036",
        color: "#fff",
        width: "300px",
        height: "100%"
    }
});

export const Navbar = (props) => {

    const logoURL = "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
    const classes = useStyles();

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClick = async (category) => {
        // let data;
        if (category === 'All News') {
            props.setcategory("general");
        } else {
            props.setcategory(category[0].toLowerCase() + category.slice(1));
        }
        handleDrawerClose();
        //     data = await getNews("general");
        // else
        //     data = await getNews(category);
        // props.setnews(data.data.articles);
    }
    return (
        <>
            <AppBar className={classes.header}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon className={classes.menu} />
                    </IconButton>
                    <img src={logoURL} alt="logo" className={classes.logo}></img>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawerHeader}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List className={classes.drawerCategory}>
                    &nbsp;&nbsp;Categories
                    {['All News', 'Business', 'Sports', 'Technology', 'Entertainment', 'Science', 'Health'].map(category => (
                        <Button className={classes.button} onClick={() => handleClick(category)}>
                            {category}
                        </Button>
                    ))}
                </List>
            </Drawer>
        </>
    )
}
