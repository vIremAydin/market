import React from "react";
import {Box, Button, Card, CardContent, makeStyles} from "@material-ui/core";
import ayi from "./images/ayi.png"
import {connect} from "react-redux";
import {addItem} from "../redux/card/card.action";
import {useSnackbar} from 'notistack';


const useStyles = makeStyles({
    price: {
        color: "#1EA4CE",
        fontSize: "14px",
        marginBottom:"5px"
    },
    name: {},
    card: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        direction: "column",
        justifyContent: "space-between"
    },

    btn: {
        marginTop: "20px",
        width: "100%",
        height: "33px",
        backgroundColor: "#1EA4CE",
        color: "white"
    },
    imageBox: {
        flex: 1,
        padding: "20px",
        border: "solid #F3F0FE 2px",
        borderRadius: "5px",
        margin: "10px",

    },
    image: {
        maxWidth: "100%",
        height: "auto",
        "&:hover":{
            transform: "scale(1.08)",
            animationDuration: "2s",
            transition: "transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
        }

    },


});
const Item = ({addItem, item}) => {
    const {enqueueSnackbar} = useSnackbar();
    const classes = useStyles();

    const handleClick = (variant) => () => {
        addItem(item);
        enqueueSnackbar('Added to basket', {variant});

    }
    return (
        <Card className={classes.card}>
            <Box className={classes.imageBox}>
                <img alt={"img"} className={classes.image} src={ayi}/>
            </Box>

            <CardContent>
                <div className={classes.price}>&#x20BA;{item.price}</div>
                <div className={classes.name}>{item.name}</div>
                <Button className={classes.btn} variant="contained" onClick={handleClick('success')}>Add</Button>
            </CardContent>
        </Card>
    )
};


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Item);
