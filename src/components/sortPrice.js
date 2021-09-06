import React, {useEffect, useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {changeSort} from "../redux/actions";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    root: {
        margin: "10px",
        boxShadow: "0px 2px 4px",
        borderRadius: "2px",
        padding: "10px",
        backgroundColor:"white"
    }
})
const SortPrice = ({changeSorted}) => {
    const [value, setValue] = useState("newToOld");
    const classes = useStyle();
    useEffect(() => {
        changeSorted(value);
        console.log(value);
    }, [value])
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={classes.root}>
        <FormControl component="fieldset">
            <RadioGroup aria-label="sort" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="lowToHigh" control={<Radio/>} label="Price low to high"/>
                <FormControlLabel value="highToLow" control={<Radio/>} label="Price high to low"/>
                <FormControlLabel value="newToOld" control={<Radio/>} label="New to old"/>
                <FormControlLabel value="oldToNew" control={<Radio/>} label="Old to new"/>
            </RadioGroup>
        </FormControl>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    changeSorted: item => dispatch(changeSort(item)),
});

export default connect(null, mapDispatchToProps)(SortPrice);
