
import React, {useState} from 'react';
import { Box, makeStyles } from '@material-ui/core'

//components
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { News } from './components/News';

const useStyles = makeStyles(theme=>({
  container: {
    marginTop: 110,
    width:"65%",
    margin: "0 auto",
    [theme.breakpoints.down('md')]:{
      width:"75%"
    },
    [theme.breakpoints.down('sm')]:{
      width:"90%"
    }
  }
}))

function App() {

  const [news, setnews] = useState({});
  const [category, setcategory] = useState("general");
  
  const classes = useStyles();

  return (
    <Box>
      <Navbar news={news} setnews={setnews} category = {category} setcategory = {setcategory}/>
      <Box className={classes.container}>
        <Header />
        <News news={news} setnews={setnews} category = {category} setcategory = {setcategory}/>
      </Box>

    </Box>
  );
}

export default App;
