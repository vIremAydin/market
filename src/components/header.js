import React from "react";
import {makeStyles} from "@material-ui/core";
import Basket from "./basket";
import marketLogo from "./images/marketLogo.png"


const useStyles = makeStyles(() => ({
    container: {
        height: "80px",
        width: "100%",
        backgroundColor: "#1EA4CE",
        display: "flex",
        flexDirection: "row-reverse",

    },
    image: {
        width: "auto",
        height: "60px"
    },
    inner:{
        display:"flex",
        width:"60%",
        justifyContent:"space-between"
    }
}));
const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.inner}>
                <img className={classes.image} src={marketLogo}/>
                <Basket/>
            </div>

        </div>
    )
};

export default Header;