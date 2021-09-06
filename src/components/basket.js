
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {toggleCardHidden} from "../redux/card/card.action";
import {selectCardTotal, selectCardHidden} from "../redux/card/card.selectors";
import img from "./images/img.png"
import BasketDropdown from "./basket.dropdown";

const useStyles = makeStyles({
    basket:{
        height:"80px",
        width:"130px",
        marginRight:"150px",
        backgroundColor:"#147594",
        color:"white",
        boxSizing:"border-box",


    },
    image:{
        width:"15px",
        height:"auto",
        marginRight:"10px"
    },
    control:{
        cursor:"pointer",
        width:"100%",
        height:"100%",
        textAlign:"center",
        lineHeight:"80px"

    }
})
const Basket = ({toggleCardHidden, totalCount, hidden})=>{
    const classes = useStyles();
    console.log(hidden);
return(
    <div  className={classes.basket}>
    <div className={classes.control} onClick={() =>toggleCardHidden()}>
        <img  className={classes.image} src={img}/>
           <span> &#x20BA; {totalCount.toFixed(2)}</span>
    </div>
        <div>{
            hidden ? null:
                <BasketDropdown/>
        }
    </div>
    </div>
)

}

const mapDispatchToProps = dispatch =>({
    toggleCardHidden : () => dispatch(toggleCardHidden()),
});

const mapStateToProps = (state) =>({
    totalCount: selectCardTotal(state),
    hidden : selectCardHidden(state)
});


export default connect(mapStateToProps,mapDispatchToProps)(Basket);