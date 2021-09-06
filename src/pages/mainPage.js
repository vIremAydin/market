import React from "react";
import Header from "../components/header";
import Collections from "../components/collections";
import Brand from "../components/brand";
import {Grid} from "@material-ui/core";
import SortPrice from "../components/sortPrice";
import {makeStyles} from "@material-ui/core/styles";
import Tag from "../components/tag";


const useStyle = makeStyles({
    root: {
        boxSizing: "border-box",
        margin: "20px",
    },
    side: {
        display: "flex",
        flexDirection: "column"
    },
    subtitle:{
        color: "#697488",
        fontSize:"17px",
marginLeft:"10px",
        marginTop:"20px"
    }
})
const MainPage = () => {
    const classes = useStyle();
    return (
        <div>
            <Header/>
            <div  className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={3} >
                    <div className={classes.side}>
                        <span className={classes.subtitle}>Sorting</span>
                        <SortPrice/>

                        <span className={classes.subtitle}>Brands</span>
                        <Brand/>

                        <span className={classes.subtitle}>Tags</span>
                        <Tag/>

                    </div>
                </Grid>
                <Grid item xs={9}>
                    <span className={classes.subtitle}>Products</span>
                    <Collections/>
                </Grid>
            </Grid>
        </div>
        </div>

    );
};


export default MainPage;