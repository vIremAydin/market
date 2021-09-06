import {makeStyles} from "@material-ui/core/styles";
import {addItem, removeItem} from "../redux/card/card.action";
import {connect} from "react-redux";


const useStyle = makeStyles({
    row: {
        display: "flex",
        justifyContent: "space-between",
        width: "90%",
        height: "50px",
        margin: "3px",
        boxSizing:"border-box"
    },
    content: {
        display: "flex",
        flexDirection: "column"
    },
    name: {},
    price: {
        color: "#1EA4CE",
    },
    control: {
        display: "flex",
        justifyContent: "center",
    },
    quantity: {
        background: "#1EA4CE",
        color:"white",
        width:"30px",
        height:"30px",
        textAlign:"center"

    },

    btn: {
        color:"#1EA4CE",
        width:"30px",
        textAlign:"center",
        cursor:"pointer"
}


});
const BasketItem = ({item, addItem, removeItem}) => {
    const classes = useStyle();
    return (<div className={classes.row}>
        <div className={classes.content}>
            <span>{item.name}</span>
            <span>&#x20BA;{item.price}</span>
        </div>
        <div className={classes.control}>
            <span onClick={() =>removeItem(item)} className={classes.btn}>-</span>
            <span className={classes.quantity}>{item.quantity}</span>
            <span onClick={() => addItem(item)} className={classes.btn}>+</span>
        </div>
    </div>)

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(BasketItem);