import {connect} from "react-redux";
import {selectCardItems, selectCardTotal} from "../redux/card/card.selectors";
import {makeStyles} from "@material-ui/core/styles";
import BasketItem from "./BasketItem";


const useStyle = makeStyles({
    cardDropdown: {
        borderColor: "#1EA4CE",
        border:" solid 4px",
        borderRadius: "2px",
        position: "absolute",
        width: "340px",
        height: "340px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        top: "90px",
        right: "40px",
        zIndex: 15,
        color:"black",
        opacity:1,
        background:"white"
    },

    cardItems:
    {

        display: "flex",
        flexDirection:"column",
        overflowY: "scroll"
    },
    total:{
        color:"#1EA4CE",
        marginLeft:"200px",
        marginBottom:"20px",
        borderColor: "#1EA4CE",
        border:" solid 3px",
        width:"100px",
        padding:"5px"
    }
}
)
const BasketDropdown = ({cardItems, totalCount}) => {
    const classes = useStyle();
    console.log(cardItems);



    return (<div className={classes.cardDropdown}>
            <div className={classes.cardItems}>
                {
                    cardItems.length ?
                        cardItems.map(item =>
                            (<BasketItem key={item.id} item={item}/>))
                        :
                        <span>your card is empty</span>
                }
            </div>

            <div className={classes.total}>
                &#x20BA; {totalCount.toFixed(2)}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    cardItems: selectCardItems(state),
    totalCount:selectCardTotal(state),
});

export default connect(mapStateToProps)(BasketDropdown);