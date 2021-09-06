import Grid from "@material-ui/core/Grid";
import Item from "./item";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {

        display: "flex",
        justifyContent: "center"
    },


    pag: {
        margin: "20px",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

    tabContainer: {
        margin: "20px",

    },


});

function lowToHigh(a, b) {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;
}

function highToLow(a, b) {
    if (a.price < b.price) {
        return 1;
    }
    if (a.price > b.price) {
        return -1;
    }
    return 0;
}

function newToOld(a, b) {
    if (a.added < b.added) {
        return -1;
    }
    if (a.added > b.added) {
        return 1;
    }
    return 0;
}

function oldToNew(a, b) {
    if (a.added < b.added) {
        return 1;
    }
    if (a.added > b.added) {
        return -1;
    }
    return 0;
}


const DisplayItems = ({users, brands, sorted, tags}) => {
    const classes = useStyles();
    const [index, setIndex] = useState(0);
    const [value, setValue] = React.useState(1);
    let filtered = users;

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setIndex(0);
    };



    useEffect(() => {

    }, [index, tags, brands])
    if (!brands[0].checked) {
        filtered = filtered.filter(i => myFilter(i, brands));
    }
    if (!tags[0].checked) {
        filtered = filtered.filter(i => myFilterTags(i, tags));
        console.log("filtered:");
        console.log(filtered);
    }
    //useEffect(()=>{
    if (sorted === "lowToHigh") {
        filtered = filtered.sort(lowToHigh);
    } else if (sorted === "highToLow") {
        filtered = filtered.sort(highToLow);
    } else if (sorted === "newToOld") {
        filtered = filtered.sort(newToOld);
    } else if (sorted === "oldToNew") {
        filtered = filtered.sort(oldToNew);
    }

    //},[filtered, sorted])
    function handlePaginationChange(event, value) {
        setIndex((value - 1) * 16);
    }

    const getMugs = (ar) => (
        value === 0 ? ar.filter(item => item.name.includes("Mug")) :
            ar.filter(item => item.name.includes("Shirt"))
    );


    return (
            <div className={classes.container}>
                <div className={classes.tabContainer}>
                    <Tabs
                        value={value}
                        indicatorColor="white"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                        TabIndicatorProps={{style: {background: '#1EA4CE'}}}

                    >
                        <Tab   label="mug"/>
                        <Tab  label="shirt"/>
                    </Tabs>
                </div>

                <Grid container spacing={1}>

                    {getMugs(filtered).slice(index, index + 16).map(u =>
                        (
                            <Grid item xs={3}>

                                    <Item key={u.added} item={u}/>
                            </Grid>
                        )
                    )}
                </Grid>
                <div className={classes.root}>
                    <Pagination variant={"outlined"} className={classes.pag} color={"primary"}
                                count={parseInt(getMugs(filtered).length / 16 + 1, 10)}
                                page={index / 16 + 1} onChange={handlePaginationChange}/>

                </div>
            </div>
    )
};
const myFilter = (user, brands) => {
    const item = brands.find(i => user.manufacturer === i.name);
    if (item)
        return item.checked
    return false;

}

const myFilterTags = (user, tags) => {
    const item = tags.find(i => user.tags.includes( i.name));
    if (item)
        return item.checked
    return false;

}

const mapStateToProps = (state) => {
    return {
        brands: state.users.brands,
        users: state.users.users,
        sorted: state.users.sorted,
        tags: state.users.tags
    };
}

export default connect(mapStateToProps)(DisplayItems);